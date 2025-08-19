import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center md:justify-between py-4">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-[#047857]">
              Sprachkurse Zuhause
            </div>
          </Link>
          <Link 
            href="/sprachen-finden" 
            className="border-2 border-[#047857] text-[#047857] px-6 py-2 rounded-lg hover:bg-green-50 transition-colors font-medium bg-white hidden md:block"
          >
            Jetzt Sprachkurs finden
          </Link>
        </div>
      </div>
    </header>
  )
}