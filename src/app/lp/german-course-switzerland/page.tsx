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

export default function GermanCourseForExpats() {
  const router = useRouter()

  const benefits = [
    {
      icon: '🇨🇭',
      title: 'German Lessons at Home or Online',
      description: 'Flexible lessons at your place or conveniently online'
    },
    {
      icon: '🌍',
      title: 'Tailored for Expats in Switzerland',
      description: 'Focus on Swiss German culture and everyday situations'
    },
    {
      icon: '👨‍🏫',
      title: 'Experienced German Teachers',
      description: 'Native speakers who understand expat challenges'
    }
  ]

  const steps = [
    {
      number: 1,
      title: 'Click "Find Your German Teacher"',
      description: 'Answer a few quick questions online to identify suitable German teachers for your needs.'
    },
    {
      number: 2,
      title: 'Meet Your German Teacher',
      description: 'Receive a selection of vetted German teachers and choose the one that fits you best.'
    },
    {
      number: 3,
      title: 'Start Your German Journey',
      description: 'After a free trial lesson, begin your German course – flexibly at home or online.'
    }
  ]

  const testimonials = [
    {
      name: 'James M., Zurich',
      text: 'As an American expat, learning German seemed daunting. My teacher from Sprachkurse-Zuhause made it enjoyable and practical. Now I can confidently handle all my daily interactions in German!',
      rating: 5
    },
    {
      name: 'Sophie L., Basel',
      text: 'Moving from London to Basel was challenging, but my German teacher helped me integrate quickly. The focus on Swiss culture and business German was exactly what I needed for my career.',
      rating: 5
    }
  ]

  const offers = [
    {
      icon: '🏢',
      title: 'Business German',
      description: 'Professional German for the Swiss workplace'
    },
    {
      icon: '🎯',
      title: 'Integration Support',
      description: 'Navigate Swiss bureaucracy and daily life with confidence'
    },
    {
      icon: '📜',
      title: 'Permit Preparation',
      description: 'Prepare for B or C permit language requirements'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <LPHero
        title={
          <>
            <span className="inline-block">Find Your Perfect</span>{' '}
            <span className="inline-block">
              <AnimatedText text="German Teacher in Minutes" />
            </span>
          </>
        }
        subtitle={
          <>
            Break the language barrier and thrive in Switzerland – with experienced German teachers who understand your journey. <strong className="font-bold">Starting from CHF 800 per course</strong>
          </>
        }
        buttonText="Find Your German Teacher"
        imageSrc="/images/erwachsener-finanzmathematik-lernen-homeoffice-tutor-analyse-mathe-helden.jpg"
        imageAlt="Personalized German lessons for expats in Switzerland"
        onButtonClick={() => router.push('/sprachen-finden')}
      />

      {/* Benefits */}
      <LPBenefits benefits={benefits} />

      {/* Problem Section */}
      <LPSection
        title="The Expat Language Challenge"
        content=""
        bulletPoints={[
          'Missing out on career opportunities due to language barriers',
          'Feeling isolated from Swiss colleagues and neighbors',
          'Struggling with Swiss German in everyday situations',
          'Frustration with bureaucratic processes and official documents'
        ]}
        buttonText="Find Your German Teacher"
        imageSrc="/images/student-uni-kombinatorik-lernen-cafe-tutorin-diagramm-mathe-helden.jpg"
        imageAlt="Expat facing language challenges in Switzerland"
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
                Your Gateway to Swiss Integration
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Personal German Lessons - Your Solution
              </h2>
              <p className="text-lg text-gray-600">
                We connect you with experienced German teachers who specialize in helping expats succeed in Switzerland – whether for career advancement, social integration, or personal growth.
              </p>
              <button
                onClick={() => router.push('/sprachen-finden')}
                className="bg-[#047857] text-white px-8 py-4 rounded-lg hover:bg-[#065f46] transition-colors font-semibold shadow-lg cursor-pointer"
              >
                Find Your German Teacher
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
                      <span className="text-2xl">🌐</span>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Cultural Context</p>
                      <h3 className="font-semibold text-gray-900">Learn not just German, but Swiss culture too</h3>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Practical Focus</p>
                      <h3 className="font-semibold text-gray-900">Real-life situations you face every day</h3>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Fast Progress</p>
                      <h3 className="font-semibold text-gray-900">Accelerated learning tailored to busy expats</h3>
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
        title="3 Simple Steps to German Success"
        steps={steps}
        ctaText="Find Your German Teacher"
        onCTAClick={() => router.push('/sprachen-finden')}
      />

      {/* Testimonials */}
      <LPTestimonial
        title="What Expats Are Saying"
        testimonials={testimonials}
      />

      {/* Pricing */}
      <PricingSection
        title="Transparent Pricing for Your German Course"
        description="Our German courses are designed to provide sustainable learning success – at fair and transparent prices."
      />

      {/* Offers */}
      <LPOffers
        title="German Courses Designed for Expats"
        offers={offers}
      />

      {/* Final CTA Section */}
      <section className="py-20 lg:py-24 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Make Switzerland Your Home
            </h2>

            <div className="space-y-6 text-lg text-gray-700 text-left">
              <p>
                Living in Switzerland as an expat comes with unique challenges, but mastering German doesn&apos;t have to be one of them. With Sprachkurse-Zuhause, you&apos;ll find experienced teachers who understand your specific needs as an international resident.
              </p>

              <p>
                Join over 1,000 successful expats who have transformed their Swiss experience through personalized German lessons. From navigating the workplace to building local friendships, we&apos;ll help you unlock all that Switzerland has to offer.
              </p>
            </div>

            <button
              onClick={() => router.push('/sprachen-finden')}
              className="bg-[#047857] text-white px-8 py-4 rounded-lg hover:bg-[#065f46] transition-colors font-semibold text-lg shadow-lg cursor-pointer"
            >
              Find Your German Teacher Today
            </button>
          </div>
        </div>
      </section>
    </>
  )
}