import { ArrowRight, Download } from 'lucide-react'
import { personalInfo } from '../data/projects'

function Hero() {
  return (
    <section id="home" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 rounded-[2.25rem] border border-[rgba(149,118,98,0.18)] bg-glacier p-8 shadow-soft lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
        <div className="max-w-2xl animate-fade-up">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-chambray">
            Software Engineering Internship Portfolio
          </p>
          <h1 className="font-display text-5xl leading-[0.95] text-espresso sm:text-6xl lg:text-7xl">
            Hi, I&apos;m Afiqah.
          </h1>
          <p className="mt-4 text-xl font-medium text-chambray sm:text-2xl">
            Software Engineering Student
          </p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[rgba(58,33,25,0.78)]">
            {personalInfo.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
           <a
  href="#projects"
  className="inline-flex items-center justify-center gap-2 rounded-[1rem] bg-espresso px-6 py-3 text-sm font-semibold text-[#EBCDB7] transition-soft hover:bg-chambray"
>
              View My Projects
              <ArrowRight size={18} />
            </a>
            <a
              href={personalInfo.resume}
              download
              className="inline-flex items-center justify-center gap-2 rounded-[1rem] border border-espresso px-6 py-3 text-sm font-semibold text-espresso transition-soft hover:bg-bisque"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[480px] overflow-hidden rounded-[2rem] border border-[rgba(149,118,98,0.18)] bg-[rgba(255,255,255,0.65)] p-4 shadow-fine">
            <img
              src={personalInfo.profileImage}
              alt="Portrait placeholder for Afiqah Ahsan"
              className="w-full rounded-[1.5rem] object-cover"
            />
            <div className="pointer-events-none absolute inset-x-6 bottom-6 rounded-[1.25rem] border border-[rgba(255,255,255,0.75)] bg-[rgba(255,255,255,0.8)] px-5 py-4 backdrop-blur-sm">
              <p className="text-sm font-semibold text-espresso">Afiqah Ahsan</p>
              <p className="mt-1 text-sm text-clay">Year 3 Software Engineering student</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
