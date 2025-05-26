"use client"

import { useRef, useEffect, useState } from "react"
import { Badge } from "./ui/badge"

const frontendSkills = ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"]

const backendSkills = ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "AWS", "OpenCV"]

export default function Skills() {
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
    <section ref={sectionRef} id="skills" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
