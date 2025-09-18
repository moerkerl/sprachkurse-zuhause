'use client'

import { useRouter } from 'next/navigation'
import LPHero from '@/components/LPHero'
import LPBenefits from '@/components/LPBenefits'
import LPSection from '@/components/LPSection'
import LPSteps from '@/components/LPSteps'
import LPTestimonial from '@/components/LPTestimonial'
import LPOffers from '@/components/LPOffers'
import AnimatedText from '@/components/AnimatedText'

export default function SchweizerdeutschkursZuhause() {
  const router = useRouter()

  const benefits = [
    {
      icon: '🇨🇭',
      title: 'Schweizerdeutsch zuhause oder online',
      description: 'Flexibel bei Ihnen zuhause oder bequem online'
    },
    {
      icon: '🗣️',
      title: 'Alle Schweizer Dialekte',
      description: 'Züridütsch, Bärndütsch, Baseldytsch und mehr'
    },
    {
      icon: '👥',
      title: 'Native Schweizerdeutsch-Sprecher',
      description: 'Echte Schweizer, die ihre Mundart mit Leidenschaft vermitteln'
    }
  ]

  const steps = [
    {
      number: 1,
      title: 'Auf „Jetzt Schweizerdeutschkurs finden" klicken',
      description: 'Beantworten Sie online ein paar kurze Fragen, um passende Schweizerdeutsch-Lehrer zu identifizieren.'
    },
    {
      number: 2,
      title: 'Schweizerdeutsch-Lehrer kennenlernen',
      description: 'Sie erhalten eine Auswahl geprüfter Lehrkräfte und können denjenigen wählen, dessen Dialekt und Stil zu Ihnen passt.'
    },
    {
      number: 3,
      title: 'Schweizerdeutschkurs starten',
      description: 'Nach einer unverbindlichen Probelektion beginnt der Kurs – flexibel zuhause oder online.'
    }
  ]

  const testimonials = [
    {
      name: 'Andreas M., Zürich',
      text: 'Als Deutscher in Zürich war Schweizerdeutsch anfangs ein Rätsel für mich. Mein Lehrer von Sprachkurse-Zuhause hat mir nicht nur die Sprache, sondern auch die Schweizer Mentalität nähergebracht. Jetzt verstehe ich endlich meine Arbeitskollegen!',
      rating: 5
    },
    {
      name: 'Jennifer K., Luzern',
      text: 'Nach 5 Jahren in der Schweiz wollte ich endlich richtig dazugehören. Der Schweizerdeutschkurs war der Schlüssel – ich kann jetzt sogar am Stammtisch mitdiskutieren!',
      rating: 5
    }
  ]

  const offers = [
    {
      icon: '🎯',
      title: 'Grundkurs für Einsteiger',
      description: 'Von Grüezi bis Chuchichäschtli – die Basics'
    },
    {
      icon: '💼',
      title: 'Business Schweizerdeutsch',
      description: 'Verstehen Sie Ihre Schweizer Kollegen und Kunden'
    },
    {
      icon: '🏔️',
      title: 'Dialekt nach Wahl',
      description: 'Lernen Sie genau den Dialekt Ihrer Region'
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
              <AnimatedText text="perfekten Schweizerdeutschkurs" />
            </span>
          </>
        }
        subtitle="Tauchen Sie ein in die echte Schweizer Kultur – mit Muttersprachlern, die Ihnen Schweizerdeutsch mit Herz und Humor beibringen."
        buttonText="Jetzt Schweizerdeutschkurs finden"
        imageSrc="/images/erwachsener-finanzmathematik-lernen-homeoffice-tutor-analyse-mathe-helden.jpg"
        imageAlt="Individueller Schweizerdeutschunterricht mit echten Schweizern"
        onButtonClick={() => router.push('/sprachen-finden')}
      />

      {/* Benefits */}
      <LPBenefits benefits={benefits} />

      {/* Problem Section */}
      <LPSection
        title="Wenn Hochdeutsch nicht mehr reicht"
        content=""
        bulletPoints={[
          'Sie verstehen Ihre Schweizer Kollegen nicht, wenn sie unter sich sprechen',
          'Sie fühlen sich ausgeschlossen bei geselligen Anlässen',
          'Schweizer wechseln automatisch auf Hochdeutsch, wenn Sie dabei sind',
          'Sie möchten endlich richtig zur Schweizer Gemeinschaft gehören'
        ]}
        buttonText="Jetzt Schweizerdeutschkurs finden"
        imageSrc="/images/student-uni-kombinatorik-lernen-cafe-tutorin-diagramm-mathe-helden.jpg"
        imageAlt="Person die sich ausgeschlossen fühlt wegen Sprachbarriere"
        imagePosition="left"
        backgroundColor="gray"
        onButtonClick={() => router.push('/sprachen-finden')}
      />

      {/* Solution Section - Custom Layout */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Title, Subtitle, Button */}
            <div className="space-y-6">
              <p className="text-[#047857] font-semibold uppercase tracking-wide text-sm">
                Willkomme i dr Schwiiz
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Persönlicher Schweizerdeutschunterricht - Ihre Lösung
              </h2>
              <p className="text-lg text-gray-600">
                Wir verbinden Sie mit echten Schweizern, die Ihnen ihre Mundart authentisch und mit viel Geduld beibringen – damit Sie endlich wirklich dazugehören.
              </p>
              <button
                onClick={() => router.push('/sprachen-finden')}
                className="bg-[#047857] text-white px-8 py-4 rounded-lg hover:bg-[#065f46] transition-colors font-semibold shadow-lg cursor-pointer"
              >
                Jetzt Schweizerdeutschkurs finden
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
                </svg>
              </div>

              {/* Bullet Points Card */}
              <div className="relative bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-xl border border-red-100">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Authentisch</p>
                      <h3 className="font-semibold text-gray-900">Echtes Schweizerdeutsch, wie es gesprochen wird</h3>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🗣️</span>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Praxisnah</p>
                      <h3 className="font-semibold text-gray-900">Redewendungen und Ausdrücke aus dem Alltag</h3>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Integration</p>
                      <h3 className="font-semibold text-gray-900">Der Schlüssel zur Schweizer Gesellschaft</h3>
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
        title="In 3 Schritten zum passenden Schweizerdeutschkurs"
        steps={steps}
        ctaText="Jetzt Schweizerdeutschkurs finden"
        onCTAClick={() => router.push('/sprachen-finden')}
      />

      {/* Testimonials */}
      <LPTestimonial
        title="Was unsere Schweizerdeutsch-Schüler sagen"
        testimonials={testimonials}
      />

      {/* Offers */}
      <LPOffers
        title="Unser Schweizerdeutsch-Angebot"
        offers={offers}
      />

      {/* Final CTA Section */}
      <section className="py-20 lg:py-24 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Wärde Sie eine vo eus!
            </h2>

            <div className="space-y-6 text-lg text-gray-700 text-left">
              <p>
                Schweizerdeutsch ist mehr als nur ein Dialekt – es ist der Schlüssel zur Schweizer Seele. Mit Sprachkurse-Zuhause lernen Sie nicht nur die Sprache, sondern werden Teil der Gemeinschaft.
              </p>

              <p>
                Unsere muttersprachlichen Lehrer bringen Ihnen mit viel Geduld und Humor bei, was es heisst, echtes Schweizerdeutsch zu sprechen. Von &quot;Grüezi mitenand&quot; bis &quot;Merci vilmal&quot; – bald werden auch Sie wie ein echter Schweizer klingen!
              </p>
            </div>

            <button
              onClick={() => router.push('/sprachen-finden')}
              className="bg-[#047857] text-white px-8 py-4 rounded-lg hover:bg-[#065f46] transition-colors font-semibold text-lg shadow-lg cursor-pointer"
            >
              Jetzt Schweizerdeutschkurs finden
            </button>
          </div>
        </div>
      </section>
    </>
  )
}