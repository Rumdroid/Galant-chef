import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  { name: "John Doe", role: "Healthcare Worker", content: "The quality of PPE from SafetyFirst is unmatched. I feel secure every day at work.", avatar: "JD" },
  { name: "Jane Smith", role: "Factory Manager", content: "Excellent customer service and fast delivery. Our workers are well-protected thanks to SafetyFirst.", avatar: "JS" },
  { name: "Mike Johnson", role: "Construction Supervisor", content: "The variety of PPE available is impressive. We found everything we needed in one place.", avatar: "MJ" },
]

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-black/50 backdrop-blur-sm border-primary">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-primary">{testimonial.name}</CardTitle>
                    <p className="text-sm text-white/80">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white">&ldquo;{testimonial.content}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}