import MultiStepForm from '@/components/MultiStepForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sprachkurs finden | Sprachkurse Zuhause',
  description: 'Finden Sie in wenigen Schritten den passenden Sprachlehrer für Ihre Bedürfnisse.',
}

export default function SprachenFindenPage() {
  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Finden Sie Ihren passenden Sprachlehrer
        </h1>
        <p className="text-gray-600">
          Beantworten Sie ein paar kurze Fragen, damit wir Ihnen die besten Sprachlehrer vorschlagen können.
        </p>
      </div>
      
      <MultiStepForm />
    </div>
  )
}