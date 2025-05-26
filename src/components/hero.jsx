
import { useEffect, useRef } from "react"
import { Button } from "./ui/button"
import Typed from "typed.js"
import profileimage from "/images/Profile_image.png"

export default function Hero() {
  const typedRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "Full Stack Developer",
          "MERN Stack Developer",
          "Cloud Computing Enthusiast",
          "Problem Solver",
          "Future Entrepreneur",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      })

      return () => {
        typed.destroy()
      }
    }
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={sectionRef} id="home" className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hi, I'm Jared Furtado</h1>
            <h2 className="text-xl md:text-2xl">
              I'm a <span ref={typedRef} className="text-primary"></span>
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Building innovative web solutions with modern technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button size="lg" onClick={scrollToProjects}>
                View My Work
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:jaredfurtadowork@gmail.com">Get In Touch</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
              <img
                src={profileimage}
                alt="Jared's Profile"
                className="rounded-full object-cover w-full h-full"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
