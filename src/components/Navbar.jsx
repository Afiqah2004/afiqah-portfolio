import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(58,33,25,0.12)] bg-[#EBCDB7] shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        
        {/* Logo / Name */}
        <a
          href="#home"
          className="font-display text-xl font-semibold text-espresso"
        >
          Afiqah Ahsan
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-espresso transition-colors hover:text-chambray"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-full border border-[rgba(58,33,25,0.28)] p-2 text-espresso transition hover:border-chambray hover:text-chambray md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen ? (
        <div className="border-t border-[rgba(58,33,25,0.12)] bg-[#EBCDB7] px-4 py-4 md:hidden">
          <nav
            className="flex flex-col gap-2"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-3 py-2 text-sm font-medium text-espresso transition hover:bg-bisque-soft hover:text-espresso"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
