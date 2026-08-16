import { Code2, Layers3, Wrench } from 'lucide-react'
import { skillGroups } from '../data/projects'

const icons = [Code2, Layers3, Wrench]

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-chambray">Skills</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-espresso sm:text-4xl">
            A thoughtful set of tools for building practical software experiences.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = icons[index] || Code2

            return (
              <div key={group.title} className="rounded-[1.6rem] border border-[rgba(149,118,98,0.18)] bg-[rgba(255,255,255,0.74)] p-7 shadow-fine">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-bisque-soft p-3 text-espresso">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-espresso">{group.title}</h3>
                </div>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-full border border-[rgba(149,118,98,0.24)] bg-glacier-muted px-4 py-2 text-sm font-medium text-espresso">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
