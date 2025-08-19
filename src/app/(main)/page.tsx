'use client'

import { useRouter } from 'next/navigation'
import LPHero from '@/components/LPHero'
import LPBenefits from '@/components/LPBenefits'
import LPSection from '@/components/LPSection'
import LPSteps from '@/components/LPSteps'
import LPTestimonial from '@/components/LPTestimonial'
import LPOffers from '@/components/LPOffers'
import AnimatedText from '@/components/AnimatedText'

export default function Home() {
  const router = useRouter()
  
  const benefits = [
    {
      icon: '🏠',
      title: 'Sprachunterricht zuhause oder online',
      description: 'Flexibel bei Ihnen zuhause oder bequem online'
    },
    {
      icon: '👥',
      title: 'Für alle Altersgruppen',
      description: 'Von Kindern bis Erwachsenen und Senioren'
    },
    {
      icon: '🌍',
      title: 'Alle wichtigen Sprachen',
      description: 'Englisch, Französisch, Deutsch, Schweizerdeutsch und mehr'
    }
  ]

  const steps = [
    {
      number: 1,
      title: 'Auf „Jetzt Sprachkurs finden" klicken',
      description: 'Beantworten Sie online ein paar kurze Fragen, um passende Sprachlehrer zu identifizieren.'
    },
    {
      number: 2,
      title: 'Lehrer kennenlernen',
      description: 'Sie erhalten eine Auswahl geprüfter Lehrer und können denjenigen wählen, der am besten zu Ihnen passt.'
    },
    {
      number: 3,
      title: 'Sprachkurs starten',
      description: 'Nach einer unverbindlichen Probelektion beginnt der Sprachkurs – flexibel zuhause oder online.'
    }
  ]

  const testimonials = [
    {
      name: 'Frau Meier, Zürich',
      text: 'Dank Sprachkurse-Zuhause habe ich endlich den Mut, Englisch im Beruf aktiv einzusetzen. Mein Lehrer hat mir Schritt für Schritt Sicherheit gegeben.',
      rating: 5
    },
    {
      name: 'Herr Rossi, Bern',
      text: 'Ich wollte Schweizerdeutsch lernen, um mich im Alltag wohler zu fühlen. Mit meinem Lehrer habe ich schnell Fortschritte gemacht und verstehe endlich die Leute im Dorf.',
      rating: 5
    }
  ]

  const offers = [
    {
      icon: '📚',
      title: 'Sprachcoaching',
      description: 'Für nachhaltigen Spracherwerb mit individuellen Methoden'
    },
    {
      icon: '🎓',
      title: 'Prüfungsvorbereitung',
      description: 'Vorbereitung auf Cambridge, DELF/DALF, Goethe und mehr'
    },
    {
      icon: '🌐',
      title: 'Alltag & Beruf',
      description: 'Praktische Sprachkenntnisse für Job, Reisen oder Alltag'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <LPHero
        title={
          <>
            <span className="inline-block">In wenigen Klicks zum</span>{' '}
            <span className="inline-block">
              <AnimatedText text="richtigen Sprachkurs" />
            </span>
          </>
        }
        subtitle="Ob Englisch, Französisch, Deutsch oder Schweizerdeutsch – wir zeigen Ihnen sofort passende Sprachkurse und Lehrer."
        buttonText="Jetzt Sprachkurs finden"
        imageSrc="/images/erwachsener-finanzmathematik-lernen-homeoffice-tutor-analyse-mathe-helden.jpg"
        imageAlt="Individuelle Sprachkurse mit geprüften Lehrpersonen"
      />

      {/* Benefits */}
      <LPBenefits benefits={benefits} />

      {/* Problem Section */}
      <LPSection
        title="Wenn Sprachen zum Hindernis werden"
        content=""
        bulletPoints={[
          'Schwierigkeiten beim Verstehen oder Sprechen',
          'Unsicherheit in Schule, Beruf oder Alltag',
          'Fehlende Motivation durch trockenen Unterricht',
          'Angst, beim Sprechen Fehler zu machen'
        ]}
        buttonText="Jetzt Sprachkurs finden"
        imageSrc="/images/student-uni-kombinatorik-lernen-cafe-tutorin-diagramm-mathe-helden.jpg"
        imageAlt="Person mit Sprachlernfrust und Schwierigkeiten"
        imagePosition="left"
        backgroundColor="gray"
      />

      {/* Solution Section - Custom Layout */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Title, Subtitle, Button */}
            <div className="space-y-6">
              <p className="text-[#047857] font-semibold uppercase tracking-wide text-sm">
                Lernen mit System und Freude
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Persönlicher Sprachunterricht - Ihre Lösung
              </h2>
              <p className="text-lg text-gray-600">
                Wir verbinden Sie mit erfahrenen Sprachlehrern, die individuell auf Ihre Bedürfnisse eingehen – ob für Schule, Beruf oder Freizeit.
              </p>
              <button 
                onClick={() => router.push('/sprachen-finden')}
                className="bg-[#047857] text-white px-8 py-4 rounded-lg hover:bg-[#065f46] transition-colors font-semibold shadow-lg cursor-pointer"
              >
                Jetzt Sprachkurs finden
              </button>
            </div>

            {/* Right Column - Bullet Points with Graphic */}
            <div className="relative">
              {/* Background Graphic */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg className="w-full h-full max-w-md" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="200" cy="200" r="180" stroke="#047857" strokeWidth="2" strokeDasharray="10 10" />
                  <circle cx="200" cy="200" r="140" stroke="#047857" strokeWidth="2" strokeDasharray="8 8" />
                  <circle cx="200" cy="200" r="100" stroke="#047857" strokeWidth="2" strokeDasharray="6 6" />
                  <path d="M200 80 L250 150 L230 230 L170 230 L150 150 Z" stroke="#047857" strokeWidth="2" fill="none" />
                  <circle cx="200" cy="80" r="10" fill="#047857" />
                  <circle cx="250" cy="150" r="10" fill="#047857" />
                  <circle cx="230" cy="230" r="10" fill="#047857" />
                  <circle cx="170" cy="230" r="10" fill="#047857" />
                  <circle cx="150" cy="150" r="10" fill="#047857" />
                </svg>
              </div>

              {/* Bullet Points Card */}
              <div className="relative bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-100">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Individuell abgestimmt</p>
                      <h3 className="font-semibold text-gray-900">Unterricht nach Ihrem Niveau und Tempo</h3>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">✅</span>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Praktisch & anwendbar</p>
                      <h3 className="font-semibold text-gray-900">Direkt im Alltag und Beruf nutzbar</h3>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Nachhaltig</p>
                      <h3 className="font-semibold text-gray-900">Bleibende Erfolge statt kurzfristiger Tricks</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps */}
      <LPSteps
        title="In 3 Schritten zum passenden Sprachkurs"
        steps={steps}
        ctaText="Jetzt Sprachkurs finden"
      />

      {/* Testimonials */}
      <LPTestimonial
        title="Was unsere Kunden sagen"
        testimonials={testimonials}
      />

      {/* Offers */}
      <LPOffers
        title="Unsere Angebote"
        offers={offers}
      />

      {/* Final CTA Section */}
      <section className="py-20 lg:py-24 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Verpassen Sie nicht die Chance auf echte Sprachkompetenz
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 text-left">
              <p>
                Mit Sprachkurse-Zuhause finden Sie in wenigen Klicks den passenden Lehrer für Ihre Bedürfnisse. Über 1&apos;000 zufriedene Kunden haben bereits von unserem Angebot profitiert.
              </p>
              
              <p>
                Warten Sie nicht länger – je früher Sie starten, desto schneller können Sie Sprache mit Freude meistern.
              </p>
            </div>
            
            <button 
              onClick={() => router.push('/sprachen-finden')}
              className="bg-[#047857] text-white px-8 py-4 rounded-lg hover:bg-[#065f46] transition-colors font-semibold text-lg shadow-lg cursor-pointer"
            >
              Jetzt Sprachkurs finden
            </button>
          </div>
        </div>
      </section>
    </>
  )
}