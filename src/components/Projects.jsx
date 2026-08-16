import { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projects } from '../data/projects'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const featuredProject = projects.find((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-chambray">Projects</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-espresso sm:text-4xl">
            A curated portfolio of practical software, mobile and multimedia work.
          </h2>
        </div>

        {featuredProject ? (
          <div className="mb-10 overflow-hidden rounded-[2.2rem] border border-[rgba(149,118,98,0.16)] bg-[rgba(255,255,255,0.74)] p-4 shadow-fine sm:p-6">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <img src={featuredProject.image} alt={`${featuredProject.title} preview`} className="h-80 w-full rounded-[1.4rem] object-cover" />
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-chambray">
                  <span>{featuredProject.category}</span>
                  <span className="rounded-full bg-bisque-soft px-3 py-1 text-[0.7rem] text-espresso">Featured Project</span>
                </div>
                <h3 className="mt-4 font-display text-3xl leading-tight text-espresso">{featuredProject.title}</h3>
                <p className="mt-4 text-lg leading-8 text-[rgba(58,33,25,0.78)]">{featuredProject.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-[rgba(149,118,98,0.2)] bg-bisque-soft px-3 py-1 text-sm font-medium text-espresso">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(featuredProject)}
                    className="rounded-[0.95rem] bg-espresso px-6 py-3 text-sm font-semibold text-[#EBCDB7] transition-soft hover:bg-chambray"
                  >
                    View Project
                  </button>
                  {featuredProject.demoVideo?.url && featuredProject.demoVideo.url !== '[YOUTUBE LINK]' ? (
                    <a
                      href={featuredProject.demoVideo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-[0.95rem] border border-[rgba(149,118,98,0.3)] px-6 py-3 text-sm font-semibold text-espresso transition-soft hover:bg-bisque"
                    >
                      Watch Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onView={setSelectedProject} />
          ))}
        </div>
      </div>

      {selectedProject ? <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
    </section>
  )
}

export default Projects
