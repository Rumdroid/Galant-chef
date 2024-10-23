import { Shield, Truck, Award } from "lucide-react"

const benefits = [
  { icon: Shield, title: "Premium Quality", description: "Our products meet the highest safety standards" },
  { icon: Truck, title: "Fast Delivery", description: "Get your PPE quickly with our expedited shipping" },
  { icon: Award, title: "Satisfaction Guaranteed", description: "100% money-back guarantee if you're not satisfied" },
]

export default function Benefits() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center glass-effect p-6 rounded-lg">
              <benefit.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
              <p className="text-white/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}