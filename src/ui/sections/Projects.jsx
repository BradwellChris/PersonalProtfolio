
const projects = [
  {
    title: "",
    description: "",
    image: "",
    tags: [],
    link: "",
    github: ""
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that&nbsp;
            <span className="font-serif italic font-normal text-white">
              bring my portfolio to life
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Here are a selction of projects I have worked on. From beginner level to advanced. Testing my skills and knowledge.
          </p>
        </div>

        {/* Projects Section*/}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx}>
              <image src={project.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
