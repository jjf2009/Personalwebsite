"use client"

import { useRef, useEffect, useState } from "react"
import { Card, CardContent } from "./ui/card"

const experiences = [
  {
    title: "Community Manager",
    company: "Nova Hustlers ",
    period: "April 2025 - Present",
    description: [
      "Contributed to open-source projects under the GSSoC initiative.",
      "Implemented 13 merged pull requests across various repositories.",
      "Learned API integration and global collaboration.",
    ],
  },
  {
    title: "Open Source Contributor",
    company: "GirlScript Foundation",
    period: "Sep 2024 - Oct 2024",
    description: [
      "Contributed to open-source projects under the GSSoC initiative.",
      "Implemented 13 merged pull requests across various repositories.",
      "Learned API integration and global collaboration.",
    ],
  },
  {
    title: "Campus Ambassador",
    company: "Multiple Events",
    period: "Dec 2024 - Present",
    description: [
      "Represented BITSMUN Goa, Chaos IIMA, and Plinth LNMIIT.",
      "Focused on increase participation, brand promotion, and event communication.",
    ],
  },
  {
    title: "Student Intern",
    company: "Innomatics Research Labs",
    period: "Sep 2024 - Nov 2024",
    description: ["Worked as a Web Developer.", "Enhanced problem-solving skills and built scalable applications."],
  },
]

export default function Experience() {
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
      { threshold: 0.2 },
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
    <section ref={sectionRef} id="experience" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">Work Experience</h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-6 border-l-2 border-primary space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary"></div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground mb-2">
                      {exp.company} | {exp.period}
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm md:text-base">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
