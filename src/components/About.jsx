function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-[rgba(149,118,98,0.16)] bg-[rgba(255,255,255,0.7)] p-8 shadow-fine lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.36em] text-chambray">About Me</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-espresso sm:text-4xl">
              A software engineering student interested in practical, meaningful digital solutions.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[rgba(58,33,25,0.78)]">
              I am a Year 3 Bachelor of Software Engineering (Multimedia Development) student at Universiti Kebangsaan Malaysia (UKM). I am interested in software development, mobile applications, web systems, AI, digitalisation and multimedia technologies.
            </p>
            <p className="mt-5 text-lg leading-8 text-[rgba(58,33,25,0.78)]">
              I enjoy building practical applications and exploring how technology can be used to solve real-world problems.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-[rgba(149,118,98,0.18)] bg-bisque-soft p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-chambray">Current Focus</p>
            <ul className="mt-5 space-y-4 text-base leading-7 text-espresso">
              <li className="border-b border-[rgba(58,33,25,0.1)] pb-3">Software engineering fundamentals with a practical product mindset.</li>
              <li className="border-b border-[rgba(58,33,25,0.1)] pb-3">Developing applications across mobile, web and multimedia experiences.</li>
              <li>Exploring how technology can support digitalisation and real-world problem solving.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
