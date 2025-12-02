'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Moon, Sun, Menu, X, Terminal } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { useState, useEffect } from 'react'

export default function Header() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (path: string) => pathname === path

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-primary-500/5' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center gap-2 text-xl font-heading font-bold transition-all"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity" />
              <div className="relative flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700 group-hover:border-primary-500/50 transition-all">
                <Terminal className="w-4 h-4 text-primary-400" />
                <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent font-mono">
                  MD
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all rounded-lg group ${
                  isActive(link.href)
                    ? 'text-primary-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {isActive(link.href) && (
                  <span className="absolute inset-0 bg-primary-500/10 border border-primary-500/30 rounded-lg" />
                )}
                <span className="relative">{link.label}</span>
                {!isActive(link.href) && (
                  <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative ml-2 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-500/50 transition-all group"
              aria-label="Toggle theme"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity" />
              {theme === 'light' ? (
                <Moon className="relative w-4 h-4 text-gray-300 group-hover:text-primary-400 transition-colors" />
              ) : (
                <Sun className="relative w-4 h-4 text-gray-300 group-hover:text-primary-400 transition-colors" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-gray-300" />
              ) : (
                <Sun className="w-4 h-4 text-gray-300" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-300" />
              ) : (
                <Menu className="w-5 h-5 text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-slate-800/50 backdrop-blur-xl rounded-b-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium transition-all rounded-lg mx-2 my-1 ${
                  isActive(link.href)
                    ? 'text-primary-400 bg-primary-500/10 border border-primary-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
