import MultiStepForm from '@/components/MultiStepForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sprachkurs finden | Sprachkurse Zuhause',
  description: 'Finden Sie in wenigen Schritten den passenden Sprachlehrer für Ihre Bedürfnisse.',
}

export default function SprachenFindenPage() {
  return (
    <div>
      <MultiStepForm />
    </div>
  )
}