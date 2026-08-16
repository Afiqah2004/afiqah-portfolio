
import { Globe2, Mail, Phone, Send } from 'lucide-react'
import { personalInfo } from '../data/projects'


const contactMethods = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    label: 'Phone',
    value: personalInfo.phone,
    href: 'https://wa.link/0xzm2d',
    icon: Phone,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/afiqah-ahsan-231b28370',
    href: personalInfo.linkedin,
    icon: Globe2,
  },
  {
    label: 'GitHub',
    value: 'github.com/Afiqah2004',
    href: personalInfo.github,
    icon: Send,
  },
]



function Contact() {
  return (
    <section id="contact" className="bg-[#DFCCB1] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#3A2119]">
          Contact
        </p>

        <h2 className="mt-3 text-3xl font-bold text-[#3A2119]">
          Let's work together.
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-[#3A2119]/80">
          Interested in software development, digital solutions, and technology?
          Feel free to get in touch.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {contactMethods.map((item) => {
            const Icon = item.icon

            return (
              <a
                key={item.label}
                href={item.href}
                target={
                  item.label === 'LinkedIn' || item.label === 'GitHub'
                    ? '_blank'
                    : undefined
                }
                rel={
                  item.label === 'LinkedIn' || item.label === 'GitHub'
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="flex items-center gap-4 rounded-[1.3rem] border border-[#3A2119]/20 bg-[#DFCCB1]/60 p-5 transition-all duration-300 hover:bg-[#3A2119]/10"
              >
                <div className="rounded-2xl bg-[#3A2119] p-3 text-[#DFCCB1]">
                  <Icon size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#3A2119]">
                    {item.label}
                  </p>

                  <p className="mt-1 text-base font-medium text-[#3A2119]">
                    {item.value}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact

