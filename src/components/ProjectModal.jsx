import { useEffect, useState } from 'react'
import { ExternalLink, PlayCircle, X } from 'lucide-react'

function ProjectModal({ project, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  if (!project) {
    return null
  }

  const hasDemoVideo = Boolean(project.demoVideo?.url && project.demoVideo.url !== '[YOUTUBE LINK]')
  const hasLinks = Boolean(project.github)

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-[rgba(58,33,25,0.82)] px-4 py-6 backdrop-blur-sm sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2.2rem] bg-[rgba(255,255,255,0.95)] shadow-soft">
        <div className="flex items-center justify-between border-b border-[rgba(149,118,98,0.16)] px-6 py-5 sm:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-chambray">Project Details</p>
            <h2 className="mt-1 font-display text-2xl text-espresso">{project.title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[rgba(149,118,98,0.24)] p-2 text-espresso transition-soft hover:border-chambray hover:text-chambray"
            aria-label="Close project details"
          >
            <X size={20} />
          </button>
        </div>

        <div className="max-h-[80vh] overflow-y-auto px-6 py-8 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <img src={project.image} alt={`${project.title} hero preview`} className="w-full rounded-[1.5rem] object-cover" />
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-[rgba(149,118,98,0.2)] bg-bisque-soft px-3 py-1 text-sm font-medium text-espresso">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-chambray">{project.category}</p>
              <p className="mt-4 text-lg leading-8 text-[rgba(58,33,25,0.78)]">{project.description}</p>
              <div className="mt-6 rounded-[1.4rem] border border-[rgba(149,118,98,0.16)] bg-glacier-soft p-6">
                <h3 className="text-xl font-semibold text-espresso">Overview</h3>
                <p className="mt-3 text-sm leading-7 text-[rgba(58,33,25,0.76)]">{project.description}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[1.4rem] border border-[rgba(149,118,98,0.16)] p-6">
              <h3 className="text-xl font-semibold text-espresso">Problem</h3>
              <p className="mt-3 text-sm leading-7 text-[rgba(58,33,25,0.76)]">{project.problem}</p>
            </div>
            <div className="rounded-[1.4rem] border border-[rgba(149,118,98,0.16)] p-6">
              <h3 className="text-xl font-semibold text-espresso">Solution</h3>
              <p className="mt-3 text-sm leading-7 text-[rgba(58,33,25,0.76)]">{project.solution}</p>
            </div>
          </div>

          <div className="mt-10 rounded-[1.6rem] border border-[rgba(149,118,98,0.16)] p-6">
            <h3 className="text-xl font-semibold text-espresso">Key Features</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="rounded-[1rem] border border-[rgba(149,118,98,0.16)] bg-glacier-muted px-4 py-3 text-sm text-[rgba(58,33,25,0.76)]">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[1.4rem] border border-[rgba(149,118,98,0.16)] p-6">
              <h3 className="text-xl font-semibold text-espresso">My Contribution</h3>
              <p className="mt-3 text-sm leading-7 text-[rgba(58,33,25,0.76)]">{project.contribution}</p>
            </div>
            <div className="rounded-[1.4rem] border border-[rgba(149,118,98,0.16)] p-6">
              <h3 className="text-xl font-semibold text-espresso">Challenges</h3>
              <p className="mt-3 text-sm leading-7 text-[rgba(58,33,25,0.76)]">{project.challenges}</p>
            </div>
          </div>

          <div className="mt-10 rounded-[1.6rem] border border-[rgba(149,118,98,0.16)] p-6">
            <h3 className="text-xl font-semibold text-espresso">Screenshots</h3>
            <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {project.screenshots.map((screenshot) => (
                <button
                  key={screenshot.alt}
                  type="button"
                  className="overflow-hidden rounded-[1.2rem] border border-[rgba(149,118,98,0.16)] text-left transition-soft hover:-translate-y-1"
                  onClick={() => setSelectedImage(screenshot)}
                >
                  <img src={screenshot.src} alt={screenshot.alt} loading="lazy" className="h-48 w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[1.6rem] border border-[rgba(149,118,98,0.16)] p-6">
            <h3 className="text-xl font-semibold text-espresso">Project Demo</h3>
            <div className="mt-5 rounded-[1.2rem] border border-[rgba(149,118,98,0.16)] bg-glacier-muted p-6">
              {hasDemoVideo ? (
                project.demoVideo.type === 'youtube' ? (
                  <div className="aspect-video overflow-hidden rounded-[1rem]">
                    <iframe
                      src={project.demoVideo.url}
                      title={`${project.title} demo video`}
                      className="h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <video controls preload="metadata" className="w-full rounded-[1rem]">
                    <source src={project.demoVideo.url} />
                  </video>
                )
              ) : (
                <div className="flex items-center gap-3 rounded-[1rem] border border-dashed border-[rgba(149,118,98,0.28)] bg-[rgba(255,255,255,0.7)] p-6 text-sm text-[rgba(58,33,25,0.76)]">
                  <PlayCircle size={20} className="text-chambray" />
                  <span>{project.demoVideo?.label || 'Demo video will be shared later.'}</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-10 rounded-[1.6rem] border border-[rgba(149,118,98,0.16)] p-6">
            <h3 className="text-xl font-semibold text-espresso">What I Learned</h3>
            <p className="mt-3 text-sm leading-7 text-[rgba(58,33,25,0.76)]">{project.learning}</p>
          </div>

          {hasLinks ? (
            <div className="mt-10 rounded-[1.6rem] border border-[rgba(149,118,98,0.16)] p-6">
              <h3 className="text-xl font-semibold text-espresso">Links</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-[0.95rem] bg-espresso px-5 py-2.5 text-sm font-semibold text-[#EBCDB7] transition-soft hover:bg-chambray">
                    <ExternalLink size={16} />
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {selectedImage ? (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-[rgba(58,33,25,0.9)] p-4">
          <div className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-[1.5rem] bg-white p-3 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-espresso shadow-sm"
              aria-label="Close image preview"
            >
              <X size={18} />
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-h-[80vh] w-full object-contain" />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default ProjectModal
