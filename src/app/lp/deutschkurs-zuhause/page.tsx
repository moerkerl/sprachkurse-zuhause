'use client'

import { useRouter } from 'next/navigation'
import LPHero from '@/components/LPHero'
import LPBenefits from '@/components/LPBenefits'
import LPSection from '@/components/LPSection'
import LPSteps from '@/components/LPSteps'
import LPTestimonial from '@/components/LPTestimonial'
import LPOffers from '@/components/LPOffers'
import AnimatedText from '@/components/AnimatedText'
import PricingSection from '@/components/PricingSection'

export default function DeutschkursZuhause() {
  const router = useRouter()

  const benefits = [
    {
      icon: '🇩🇪',
      title: 'Deutschunterricht zuhause oder online',
      description: 'Flexibel bei Ihnen zuhause oder bequem online'
    },
    {
      icon: '📚',
      title: 'Alle Niveaus von A1 bis C2',
      description: 'Anfänger bis Fortgeschrittene - individuell angepasst'
    },
    {
      icon: '🎯',
      title: 'Erfahrene Deutschlehrer',
      description: 'Erfahrene Lehrkräfte mit Goethe-Zertifikat und mehr'
    }
  ]

  const steps = [
    {
      number: 1,
      title: 'Auf „Jetzt Deutschkurs finden" klicken',
      description: 'Beantworten Sie online ein paar kurze Fragen, um passende Deutschlehrer zu identifizieren.'
    },
    {
      number: 2,
      title: 'Deutschlehrer kennenlernen',
      description: 'Sie erhalten eine Auswahl geprüfter Deutschlehrer und können denjenigen wählen, der am besten zu Ihnen passt.'
    },
    {
      number: 3,
      title: 'Deutschkurs starten',
      description: 'Nach einer unverbindlichen Probelektion beginnt der Deutschkurs – flexibel zuhause oder online.'
    }
  ]

  const testimonials = [
    {
      name: 'Maria S., Zürich',
      text: 'Als Expat in der Schweiz war es für mich wichtig, schnell Deutsch zu lernen. Mein Deutschlehrer von Sprachkurse-Zuhause hat mir nicht nur die Sprache, sondern auch die Schweizer Kultur nähergebracht.',
      rating: 5
    },
    {
      name: 'Ahmed K., Basel',
      text: 'Die Vorbereitung auf die Goethe B2 Prüfung war intensiv, aber dank meinem kompetenten Deutschlehrer habe ich sie beim ersten Mal bestanden!',
      rating: 5
    }
  ]

  const offers = [
    {
      icon: '🗣️',
      title: 'Konversationstraining',
      description: 'Sicheres Sprechen im Alltag und Beruf'
    },
    {
      icon: '📝',
      title: 'Prüfungsvorbereitung',
      description: 'Goethe-Zertifikat, telc, TestDaF und mehr'
    },
    {
      icon: '💼',
      title: 'Business Deutsch',
      description: 'Professionelles Deutsch für den Arbeitsplatz'
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
              <AnimatedText text="perfekten Deutschkurs" />
            </span>
          </>
        }
        subtitle={
          <>
            Lernen Sie Deutsch effektiv und individuell – mit erfahrenen Deutschlehrern, die zu Ihnen passen. <strong className="font-bold">Ab 1&apos;200 CHF pro Kurs</strong>
          </>
        }
        buttonText="Jetzt Deutschkurs finden"
        imageSrc="/images/erwachsener-finanzmathematik-lernen-homeoffice-tutor-analyse-mathe-helden.jpg"
        imageAlt="Individueller Deutschunterricht mit geprüften Lehrpersonen"
        onButtonClick={() => router.push('/sprachen-finden')}
      />

      {/* Benefits */}
      <LPBenefits benefits={benefits} />

      {/* Problem Section */}
      <LPSection
        title="Wenn Deutsch zur Hürde wird"
        content=""
        bulletPoints={[
          'Schwierigkeiten bei der Integration in der Schweiz',
          'Unsicherheit in Bewerbungsgesprächen und am Arbeitsplatz',
          'Verständnisprobleme bei Behördengängen',
          'Angst vor Grammatikfehlern beim Sprechen'
        ]}
        buttonText="Jetzt Deutschkurs finden"
        imageSrc="/images/student-uni-kombinatorik-lernen-cafe-tutorin-diagramm-mathe-helden.jpg"
        imageAlt="Person mit Deutschlernfrust und Schwierigkeiten"
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
                Deutsch lernen mit System
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Persönlicher Deutschunterricht - Ihre Lösung
              </h2>
              <p className="text-lg text-gray-600">
                Wir verbinden Sie mit erfahrenen Deutschlehrern, die individuell auf Ihre Bedürfnisse eingehen – ob für Integration, Beruf oder Studium.
              </p>
              <button
                onClick={() => router.push('/sprachen-finden')}
                className="bg-[#047857] text-white px-8 py-4 rounded-lg hover:bg-[#065f46] transition-colors font-semibold shadow-lg cursor-pointer"
              >
                Jetzt Deutschkurs finden
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
              <div className="relative bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-100">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Massgeschneidert</p>
                      <h3 className="font-semibold text-gray-900">Unterricht nach Ihrem Niveau und Lerntempo</h3>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🗣️</span>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Praxisorientiert</p>
                      <h3 className="font-semibold text-gray-900">Fokus auf Sprechen und Alltagssituationen</h3>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📈</span>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Schnelle Fortschritte</p>
                      <h3 className="font-semibold text-gray-900">Strukturiertes Lernen mit messbaren Erfolgen</h3>
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
        title="In 3 Schritten zum passenden Deutschkurs"
        steps={steps}
        ctaText="Jetzt Deutschkurs finden"
        onCTAClick={() => router.push('/sprachen-finden')}
      />

      {/* Testimonials */}
      <LPTestimonial
        title="Was unsere Deutschlernenden sagen"
        testimonials={testimonials}
      />

      {/* Pricing */}
      <PricingSection
        title="Transparente Preise für Ihren Deutschkurs"
        description="Unsere Deutschkurse sind darauf ausgelegt, Ihnen nachhaltigen Lernerfolg zu bieten – zu fairen und transparenten Preisen."
      />

      {/* Offers */}
      <LPOffers
        title="Unser Deutschkurs-Angebot"
        offers={offers}
      />

      {/* Final CTA Section */}
      <section className="py-20 lg:py-24 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Starten Sie jetzt Ihre Deutschreise
            </h2>

            <div className="space-y-6 text-lg text-gray-700 text-left">
              <p>
                Mit Sprachkurse-Zuhause finden Sie in wenigen Klicks den passenden Deutschlehrer für Ihre individuellen Bedürfnisse. Über 1&apos;000 zufriedene Schüler haben bereits erfolgreich Deutsch gelernt.
              </p>

              <p>
                Ob für die Integration in der Schweiz, beruflichen Erfolg oder persönliche Weiterentwicklung – je früher Sie starten, desto schneller erreichen Sie Ihre Deutschziele.
              </p>
            </div>

            <button
              onClick={() => router.push('/sprachen-finden')}
              className="bg-[#047857] text-white px-8 py-4 rounded-lg hover:bg-[#065f46] transition-colors font-semibold text-lg shadow-lg cursor-pointer"
            >
              Jetzt Deutschkurs finden
            </button>
          </div>
        </div>
      </section>
    </>
  )
}