'use client'

interface PricingSectionProps {
  title?: string
  description?: string
}

export default function PricingSection({
  title = "Transparente Preise für Ihren Sprachkurs",
  description = "Unsere Sprachkurse sind darauf ausgelegt, Ihnen nachhaltigen Lernerfolg zu bieten – zu fairen und transparenten Preisen."
}: PricingSectionProps) {

  const pricingOptions = [
    {
      icon: '🌱',
      title: 'Basis',
      price: 'Ab CHF 1\'200',
      period: 'pro Kurs (10 Lektionen)',
      description: 'Ideal für den Einstieg',
      features: [
        'Flexible Terminplanung',
        'Individuelle Lehrmaterialien',
        'Online oder bei Ihnen zuhause'
      ]
    },
    {
      icon: '⭐',
      title: 'Standard',
      price: 'Ab CHF 2\'400',
      period: 'pro Kurs (20 Lektionen)',
      description: 'Für kontinuierlichen Fortschritt',
      features: [
        'Alle Basis-Features',
        'Regelmäßige Fortschrittsberichte',
        'Prüfungsvorbereitung möglich'
      ],
      popular: true
    },
    {
      icon: '💎',
      title: 'Premium',
      price: 'Ab CHF 4\'500',
      period: 'pro Kurs (40 Lektionen)',
      description: 'Für ambitionierte Lernziele',
      features: [
        'Alle Standard-Features',
        'Intensive Betreuung',
        'Zertifikatsvorbereitung inkl.'
      ]
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`
                relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all hover:shadow-xl
                ${option.popular ? 'border-[#047857] ring-2 ring-[#047857] ring-opacity-20' : 'border-gray-200'}
              `}
            >
              {option.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#047857] text-white text-sm px-4 py-1 rounded-full font-semibold">
                  Beliebt
                </div>
              )}

              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{option.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                <div className="text-3xl font-bold text-[#047857] mb-1">{option.price}</div>
                <p className="text-sm text-gray-500">{option.period}</p>
              </div>

              <div className="space-y-3">
                {option.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-[#047857] mr-2 mt-0.5">✓</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Alle Preise verstehen sich pro Lektion à 90 Minuten. Die genauen Kosten werden individuell auf Ihre Bedürfnisse abgestimmt.
        </p>
      </div>
    </section>
  )
}
