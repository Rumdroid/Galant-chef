import { Button } from "@/components/ui/button"
import { ShieldCheck } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative py-20 min-h-screen flex items-center">
      <Image
        src="/images/ppe-workers.jpg"
        alt="Workers wearing PPE"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col items-center text-center">
          <ShieldCheck className="w-16 h-16 mb-6 text-primary" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Protect Your Team with Premium PPE</h1>
          <p className="text-xl mb-8 max-w-2xl text-white">Stay safe with our high-quality Personal Protective Equipment. Your safety is our priority.</p>
          <Link href="/intake">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}