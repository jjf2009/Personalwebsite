"use client"

import { useRef, useEffect, useState } from "react"
import { Card, CardContent } from "./ui/card"
import { Code, Cloud, Lightbulb } from "lucide-react"

export default function About() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div
            className={`space-y-2 max-w-3xl transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              As a student at Goa College of Engineering, I'm passionate about creating innovative web solutions using
              modern technologies. I specialize in the MERN stack and cloud computing, constantly pushing the boundaries
              of what's possible in web development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-4xl">
            <Card
              className={`transition-all duration-700 delay-100 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <CardContent className="flex flex-col items-center p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Development</h3>
                <p className="text-center text-muted-foreground">Full-stack development with modern technologies</p>
              </CardContent>
            </Card>

            <Card
              className={`transition-all duration-700 delay-200 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <CardContent className="flex flex-col items-center p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Cloud Computing</h3>
                <p className="text-center text-muted-foreground">Experience with cloud platforms and services</p>
              </CardContent>
            </Card>

            <Card
              className={`transition-all duration-700 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <CardContent className="flex flex-col items-center p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Innovation</h3>
                <p className="text-center text-muted-foreground">Creative solutions to complex problems</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
