'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCSRF, addCSRFHeader } from '@/hooks/useCSRF'

const sprachniveauOptions = [
  'Anfänger (A1)',
  'Grundkenntnisse (A2)',
  'Mittelstufe (B1)',
  'Fortgeschritten (B2)',
  'Fachkundige Sprachkenntnisse (C1)',
  'Annähernd muttersprachliche Kenntnisse (C2)',
  'Muttersprachlich',
  'Ich möchte das Niveau bestimmen lassen'
]

const sprachenBeispiele = [
  'Englisch',
  'Französisch',
  'Deutsch',
  'Schweizerdeutsch',
  'Italienisch',
  'Spanisch'
]

const initialState = {
  person: '',
  niveau: '',
  sprache: '',
  plz: '',
  nachname: '',
  telefon: '',
  email: ''
}

export default function MultiStepForm() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const { token: csrfToken } = useCSRF()
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleChangeWithAutoAdvance = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    
    // Auto-advance for niveau selection
    if (name === 'niveau' && value && step === 2) {
      setTimeout(() => {
        setError('')
        setStep(step + 1)
      }, 300)
    }
    
    // Auto-advance for PLZ when 4 characters are entered
    if (name === 'plz' && value.length === 4 && step === 4) {
      setTimeout(() => {
        setError('')
        setStep(step + 1)
      }, 300)
    }
  }

  const handleSelectWithAutoAdvance = (name: string, value: string) => {
    setForm({ ...form, [name]: value })
    setTimeout(() => {
      setError('')
      setStep(step + 1)
    }, 300)
  }

  const handleNext = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    setError('')
    
    // Validierung je Schritt
    if (step === 1 && !form.person) return setError('Bitte wählen Sie eine Option.')
    if (step === 2 && !form.niveau) return setError('Bitte wählen oder geben Sie ein Sprachniveau an.')
    if (step === 3 && !form.sprache) return setError('Bitte geben Sie die gewünschte Sprache an.')
    if (step === 4 && !form.plz) return setError('Bitte geben Sie Ihre Postleitzahl an.')
    
    setStep(step + 1)
  }

  const handleBack = () => {
    setError('')
    setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    // Validierung
    if (!form.nachname || !form.telefon || !form.email) {
      setError('Bitte füllen Sie alle Felder aus.')
      return
    }

    setLoading(true)
    
    try {
      // Send data to our API endpoint
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: addCSRFHeader({
          'Content-Type': 'application/json',
        }, csrfToken),
        body: JSON.stringify(form)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Ein Fehler ist aufgetreten')
      }

      if (data.success) {
        // Redirect to thank you page
        router.push('/dankesseite')
      } else {
        throw new Error(data.error || 'Ein Fehler ist aufgetreten')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      {/* Progress indicator */}
      {step <= 5 && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="text-[#047857] font-semibold">Frage {step} von 5</div>
            <div className="text-gray-500 text-sm">{Math.round((step / 5) * 100)}% abgeschlossen</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-[#047857] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Step 1: Wer möchte die Sprache lernen */}
      {step === 1 && (
        <form onSubmit={handleNext}>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Wer möchte die Sprache lernen?
          </h2>
          <div className="grid grid-cols-1 gap-3 mb-6">
            {['Meine Tochter', 'Mein Sohn', 'Ich', 'Jemand anderes'].map((option, index) => (
              <button
                key={index}
                type="button"
                className={`border-2 rounded-lg px-6 py-4 text-left transition-all font-medium cursor-pointer ${
                  form.person === option.toLowerCase().replace(' ', '-')
                    ? 'border-[#047857] bg-blue-50 text-[#010583]'
                    : 'border-gray-300 hover:border-blue-400 text-gray-700'
                }`}
                onClick={() => handleSelectWithAutoAdvance('person', option.toLowerCase().replace(' ', '-'))}
              >
                {option}
              </button>
            ))}
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="flex justify-between mt-8">
            <div />
            <button 
              type="submit" 
              className="bg-[#047857] text-white px-8 py-3 rounded-lg hover:bg-[#065f46] transition-colors font-semibold cursor-pointer"
            >
              Weiter
            </button>
          </div>
        </form>
      )}

      {/* Step 2: Sprachniveau */}
      {step === 2 && (
        <form onSubmit={handleNext}>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Welches Sprachniveau hat {
              form.person === 'meine-tochter' ? 'Ihre Tochter' : 
              form.person === 'mein-sohn' ? 'Ihr Sohn' : 
              form.person === 'ich' ? 'Sie' : 'die Person'
            }?
          </h2>
          <select 
            name="niveau" 
            value={form.niveau} 
            onChange={handleChangeWithAutoAdvance}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#047857] focus:outline-none text-gray-700"
          >
            <option value="">Bitte wählen...</option>
            {sprachniveauOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {error && <div className="text-red-500 mt-2">{error}</div>}
          <div className="flex justify-between mt-8">
            <button 
              type="button" 
              className="text-[#047857] hover:text-[#010583] font-medium cursor-pointer"
              onClick={handleBack}
            >
              ← Zurück
            </button>
            <button 
              type="submit" 
              className="bg-[#047857] text-white px-8 py-3 rounded-lg hover:bg-[#065f46] transition-colors font-semibold cursor-pointer"
            >
              Weiter
            </button>
          </div>
        </form>
      )}

      {/* Step 3: Sprache */}
      {step === 3 && (
        <form onSubmit={handleNext}>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Welche Sprache möchten Sie lernen?
          </h2>
          
          <input 
            name="sprache" 
            value={form.sprache} 
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#047857] focus:outline-none text-gray-700 mb-4"
            placeholder="Sprache eingeben..."
          />
          
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-3">Oder wählen Sie aus beliebten Optionen:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {sprachenBeispiele.map(sprache => (
                <button
                  key={sprache}
                  type="button"
                  className={`border-2 rounded-lg px-4 py-2 text-sm transition-all cursor-pointer ${
                    form.sprache === sprache
                      ? 'border-[#047857] bg-blue-50 text-[#010583]'
                      : 'border-gray-300 hover:border-blue-400 text-gray-700'
                  }`}
                  onClick={() => setForm({ ...form, sprache })}
                >
                  {sprache}
                </button>
              ))}
            </div>
          </div>

          {error && <div className="text-red-500 mt-2">{error}</div>}
          <div className="flex justify-between mt-8">
            <button 
              type="button" 
              className="text-[#047857] hover:text-[#010583] font-medium cursor-pointer"
              onClick={handleBack}
            >
              ← Zurück
            </button>
            <button 
              type="submit" 
              className="bg-[#047857] text-white px-8 py-3 rounded-lg hover:bg-[#065f46] transition-colors font-semibold cursor-pointer"
            >
              Weiter
            </button>
          </div>
        </form>
      )}

      {/* Step 4: PLZ */}
      {step === 4 && (
        <form onSubmit={handleNext}>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Wo wohnen Sie?
          </h2>
          <label className="block text-gray-700 mb-2">Postleitzahl</label>
          <input 
            name="plz" 
            value={form.plz} 
            onChange={handleChangeWithAutoAdvance}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#047857] focus:outline-none text-gray-700"
            placeholder="PLZ eingeben..."
            maxLength={4}
          />
          {error && <div className="text-red-500 mt-2">{error}</div>}
          <div className="flex justify-between mt-8">
            <button 
              type="button" 
              className="text-[#047857] hover:text-[#010583] font-medium cursor-pointer"
              onClick={handleBack}
            >
              ← Zurück
            </button>
            <button 
              type="submit" 
              className="bg-[#047857] text-white px-8 py-3 rounded-lg hover:bg-[#065f46] transition-colors font-semibold cursor-pointer"
            >
              Weiter
            </button>
          </div>
        </form>
      )}

      {/* Step 5: Kontaktdaten */}
      {step === 5 && (
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Ihre Kontaktdaten
          </h2>
          <p className="text-gray-600 mb-6">
            Damit wir Ihnen die passende Auswahl an Sprachlehrern zusenden können.
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Nachname *</label>
              <input 
                name="nachname" 
                value={form.nachname} 
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#047857] focus:outline-none text-gray-700"
                placeholder="Ihr Nachname"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Telefonnummer *</label>
              <input 
                name="telefon" 
                value={form.telefon} 
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#047857] focus:outline-none text-gray-700"
                placeholder="+41 79 XXX XX XX"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">E-Mail *</label>
              <input 
                name="email" 
                value={form.email} 
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#047857] focus:outline-none text-gray-700"
                placeholder="ihre@email.ch"
                type="email"
                required
              />
            </div>
          </div>

          {error && <div className="text-red-500 mt-4">{error}</div>}
          
          <div className="flex justify-between mt-8">
            <button 
              type="button" 
              className="text-[#047857] hover:text-[#010583] font-medium cursor-pointer"
              onClick={handleBack}
              disabled={loading}
            >
              ← Zurück
            </button>
            <button 
              type="submit" 
              className="bg-[#047857] text-white px-8 py-3 rounded-lg hover:bg-[#065f46] transition-colors font-semibold disabled:opacity-50 cursor-pointer"
              disabled={loading}
            >
              {loading ? 'Wird gesendet...' : 'Anfrage senden'}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}