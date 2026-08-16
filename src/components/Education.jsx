import { Download, GraduationCap } from 'lucide-react'
import { educationDetails } from '../data/projects'

function Education() {
  const cgpa = educationDetails.cgpa ?? '[CGPA]'
  const expectedGraduation = educationDetails.expectedGraduation ?? '[EXPECTED GRADUATION]'
  const transcript = educationDetails.transcript ?? ''

  return (
    <section id="education" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-[rgba(149,118,98,0.16)] bg-[rgba(255,255,255,0.74)] p-8 shadow-fine lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-chambray">
              Education
            </p>

            <h2 className="mt-4 font-display text-3xl leading-tight text-espresso sm:text-4xl">
              Building a thoughtful foundation in software engineering.
            </h2>

            <div className="mt-8 rounded-[1.6rem] border border-[rgba(149,118,98,0.16)] bg-[rgba(210,226,236,0.65)] p-7">
              <div className="flex items-center gap-3 text-chambray">
                <GraduationCap size={24} />

                <span className="text-sm font-semibold uppercase tracking-[0.26em]">
                  Academic Background
                </span>
              </div>

              <h3 className="mt-4 font-display text-2xl text-espresso">
                {educationDetails.institution}
              </h3>

              <p className="mt-3 text-lg text-[rgba(58,33,25,0.8)]">
                {educationDetails.degree}
              </p>

              <p className="mt-2 text-base text-clay">{educationDetails.status}</p>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-base text-clay">
                <span>
                  <strong className="text-espresso">CGPA:</strong>{' '}
                  {cgpa}
                </span>

                <span>
                  <strong className="text-espresso">Expected Graduation:</strong>{' '}
                  {expectedGraduation}
                </span>
              </div>

              {transcript ? (
                <a
                  href={transcript}
                  download
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-chambray transition-soft hover:text-espresso"
                >
                  <Download size={17} />
                  Download Academic Transcript
                </a>
              ) : null}
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-[rgba(149,118,98,0.18)] bg-bisque-soft p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-chambray">
              Focus
            </p>

            <p className="mt-2 text-lg font-medium leading-7 text-espresso">
              Software engineering, multimedia development, and practical application building.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

