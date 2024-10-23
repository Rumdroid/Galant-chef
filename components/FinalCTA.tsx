import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="py-20 glass-effect">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Prioritize Your Safety?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">Join thousands of satisfied customers who trust SafetyFirst for their PPE needs.</p>
        <Link href="/shop">
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            Start Shopping Now
          </Button>
        </Link>
      </div>
    </section>
  )
}