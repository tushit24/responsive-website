"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      submenu: [
        { name: "Our Story", href: "/about/story" },
        { name: "Our Team", href: "/about/team" },
        { name: "Our Mission", href: "/about/mission" },
      ],
    },
    {
      name: "Services",
      href: "/services",
      submenu: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Mobile Apps", href: "/services/mobile-apps" },
        { name: "UI/UX Design", href: "/services/design" },
        { name: "Consulting", href: "/services/consulting" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown && !(event.target as Element).closest(".group")) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [openDropdown])

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && openDropdown) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener("keydown", handleEscKey)
    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [openDropdown])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md text-gray-800 py-2" : "bg-transparent text-white py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            LOGO
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      className={`flex items-center py-2 transition-all duration-200 
          ${pathname === item.href || pathname.startsWith(item.href + "/") ? "font-semibold" : "hover:text-blue-500"}
          ${scrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-200"}
          group`}
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault()
                          setOpenDropdown(openDropdown === item.name ? null : item.name)
                        }
                      }}
                      aria-expanded={openDropdown === item.name}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${openDropdown === item.name ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span
                        className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full ${
                          pathname === item.href || pathname.startsWith(item.href + "/") ? "w-full" : ""
                        }`}
                      ></span>
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 origin-top-left
          ${openDropdown === item.name ? "transform scale-100 opacity-100" : "transform scale-95 opacity-0 pointer-events-none"}
          `}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                    >
                      <div className="py-1" role="none">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 ${
                              pathname === subItem.href ? "font-semibold bg-gray-50" : ""
                            }`}
                            onClick={() => setOpenDropdown(null)}
                            role="menuitem"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center h-full">
                    <Link
                      href={item.href}
                      className={`relative py-2 transition-all duration-200 
          ${pathname === item.href ? "font-semibold" : "hover:text-blue-500"}
          ${scrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-200"}
          group`}
                    >
                      {item.name}
                      <span
                        className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full ${
                          pathname === item.href ? "w-full" : ""
                        }`}
                      ></span>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className={scrolled ? "text-gray-800" : "text-white"} />
            ) : (
              <Menu className={scrolled ? "text-gray-800" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col">
                {item.submenu ? (
                  <>
                    <button
                      className={`flex items-center justify-between py-2 transition-all duration-200 ${
                        pathname === item.href || pathname.startsWith(item.href + "/")
                          ? "font-semibold"
                          : "hover:text-blue-500"
                      }
                      ${scrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-200"}`}
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      aria-expanded={openDropdown === item.name}
                    >
                      <span>{item.name}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${openDropdown === item.name ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Mobile Submenu */}
                    <div
                      className={`pl-4 mt-1 space-y-2 overflow-hidden transition-all duration-200 ${
                        openDropdown === item.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block py-2 transition-all duration-200 ${
                            pathname === subItem.href ? "font-semibold" : "hover:text-blue-500"
                          }
                          ${scrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-200"}`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`py-2 transition-all duration-200 ${
                      pathname === item.href ? "font-semibold" : "hover:text-blue-500"
                    }
                    ${scrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-200"}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
