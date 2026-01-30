
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";
import Button from "../components/Button";
import AnimatedButton from "../components/AnimatedButton";

const socialLinks = [
  { icon: Github, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/bg.jpg" alt="Hero Image" className="w-full h-full object-cover opacity-40" />

        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Email Marketing Executive • Marketing Automation
              </span>
            </div>

            {/* Headline */}
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <h1>
                Building <span className="text-primary gloaw-text">digital</span>
                <br />
                campaigns with
                <br />
                <span className="text-normal italic text-white">precision</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">Hi, I'm Chris Bradwell - a email marketing executive ....</p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedButton>
                Download CV
              </AnimatedButton>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div></div>
        </div>
      </div>
    </section>
  )
}
