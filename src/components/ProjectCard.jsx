import { ArrowRight, PlayCircle } from 'lucide-react'

function ProjectCard({ project, onView }) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-[rgba(149,118,98,0.16)] bg-[rgba(255,255,255,0.8)] shadow-fine transition-soft hover:-translate-y-1 hover:shadow-soft">
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="h-56 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col p-6">
        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-chambray">
          <span>{project.category}</span>
        </div>
        <h3 className="mt-4 font-display text-2xl text-espresso">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-[rgba(58,33,25,0.78)]">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded-full border border-[rgba(149,118,98,0.2)] bg-bisque-soft px-3 py-1 text-xs font-medium text-espresso">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
  type="button"
  onClick={() => onView(project)}
  className="inline-flex items-center gap-2 rounded-[0.9rem] bg-espresso px-5 py-2.5 text-sm font-semibold text-[#EBCDB7] transition-soft hover:bg-chambray"
>
            View Project
            <ArrowRight size={16} />
          </button>
          {project.demoVideo?.url && project.demoVideo.url !== '[YOUTUBE LINK]' ? (
            <a
              href={project.demoVideo.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-[0.9rem] border border-[rgba(149,118,98,0.25)] px-5 py-2.5 text-sm font-semibold text-espresso transition-soft hover:bg-bisque"
            >
              <PlayCircle size={16} />
              Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
