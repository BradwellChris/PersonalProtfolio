
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
  { icon: Github, href: "https://github.com/DevProjectJourney" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/christopher-bradwell-b7065092/" },
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
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in animation-delay-100">
              <h1>
                Building <span className="text-primary gloaw-text">digital</span>
                <br />
                campaigns with
                <br />
                <span className="text-normal italic text-white">precision</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">Hi, I'm Chris Bradwell - an email marketing executive specialising in makreting automation platforms. With experience in all digital marketing modules.</p>
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

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {socialLinks.map((social, idx) => (
                <a href={social.href} key={idx} className="p-2 rounded-full glass hover:bg-secondary/20 hover:text-primary transition-all duration-300">{<social.icon className="w-5 h-5" />}</a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/40 via-transparent to-primary/20 blur-2xl" />

              <div className="relative glass rounded-3xl p-2 glow-border">
                <img src="/profile-photo.jpg" alt="Chris Bradwell" className="w-full aspect-[4/5] object-cover rounded-2xl" />

                {/* Floating Badges */}
                <div className="absolute -bottom-4 -right-4 glass animate-float px-4 py-3 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3">
                  <div className="text-2xl font-bold text-primary">8+ </div>
                  <div className="text-xs text-muted-foreground">Years Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
