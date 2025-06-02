'use client'
import { ArrowRight, Briefcase, ChevronDown, Compass, Feather, Globe, Mail, Menu, Monitor, Moon, Phone, Sun, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const TRDDesignStudio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoaded(true);
    }, 800);

    // Handle scroll for active section
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'services', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: 'Fintech Dashboard',
      category: 'fintech',
      image: '/api/placeholder/600/450',
      description: 'Modern banking interface with focus on user experience and data visualization'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      category: 'ecommerce',
      image: '/api/placeholder/600/450',
      description: 'Full-featured online store with custom product configurator'
    },
    {
      id: 3,
      title: 'Healthcare App',
      category: 'healthcare',
      image: '/api/placeholder/600/450',
      description: 'Patient-centric mobile application for appointment management and health tracking'
    },
    {
      id: 4,
      title: 'Travel Booking System',
      category: 'other',
      image: '/api/placeholder/600/450',
      description: 'Seamless travel planning experience with personalized recommendations'
    },
    {
      id: 5,
      title: 'Media Streaming Platform',
      category: 'other',
      image: '/api/placeholder/600/450',
      description: 'Content discovery and playback interface with adaptive UI'
    }
  ];

  // Services data
  const _services = [
    {
      icon: <Monitor className="w-10 h-10" />,
      title: 'UX/UI Design',
      description: 'User-centric interfaces that balance aesthetics with functionality, ensuring intuitive experiences across all devices.'
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Web Design',
      description: 'Responsive, fast-loading websites built with modern technologies and optimized for performance and conversions.'
    },
    {
      icon: <Feather className="w-10 h-10" />,
      title: 'Graphic Design',
      description: `Compelling visual assets that communicate your brand&apos;s message across digital and print media.`
    }
  ];

  // Testimonials data
  const _testimonials = [
    {
      quote: "TRD transformed our complex app into something our users actually love to use. The attention to detail is remarkable.",
      author: "Alex Morgan",
      company: "FinTech Solutions",
      avatar: '/api/placeholder/60/60'
    },
    {
      quote: "Working with TRD was seamless from start to finish. They perfectly captured our brand vision while improving the user journey.",
      author: "Sarah Chen",
      company: "GreenCommerce",
      avatar: '/api/placeholder/60/60'
    },
    {
      quote: "The team&apos;s ability to blend creativity with data-driven decisions helped us achieve a 40% increase in conversion rate.",
      author: "Michael Rodriguez",
      company: "Health Connect",
      avatar: '/api/placeholder/60/60'
    }
  ];

  // Filter portfolio projects
  const _filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(project => project.category === activeTab);

  return (
    <div className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen transition-all duration-300`}>
      {/* Loader */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-500 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-blue-500 animate-spin"></div>
          <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-t-4 border-b-4 border-pink-500 animate-spin animate-pulse"></div>
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-all duration-300 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-2xl font-bold tracking-tight group">
              <Image
                src="/logo.svg"
                alt="Resume analysis sample"
                width={136}
                height={40}
              />

            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Portfolio', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`${activeSection === item.toLowerCase() ? 'text-blue-500 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'} hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300`}
                >
                  {item}
                </a>
              ))}

              <a
                href="#contact"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-4">
              {['Home', 'About', 'Portfolio', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`${activeSection === item.toLowerCase() ? 'text-blue-500 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'} hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full text-center hover:shadow-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="relative pt-20 pb-24 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-center">
              <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  We design <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">digital experiences</span> that drive business growth
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                  UlineX is a design studio focused on creating user-centric digital solutions that combine aesthetics with functionality to deliver measurable results. The New Line in Design
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#portfolio"
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    See Our Work
                  </a>
                  <a
                    href="#services"
                    className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    Our Services
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2 relative animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl animate-blob"></div>
                <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-pink-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/demo-image.jpg"
                    alt="UlineX Demo"
                    width={800}
                    height={450}
                    className="w-full h-auto object-cover aspect-video"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About UlineX</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We create strategic design solutions that transform ideas into impactful digital experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-pink-500/10 transform -rotate-3 rounded-xl"></div>
                  <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8">
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      To empower businesses with design-driven digital solutions that engage users, solve problems, and deliver tangible results. We believe in the transformative power of thoughtful design to elevate brands and create meaningful connections.
                    </p>
                    <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-1 mr-3 text-blue-500 dark:text-blue-400 mt-1">
                          <div className="w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                        </div>
                        <div>
                          <span className="font-bold">User-Centric:</span> We prioritize real user needs in everything we create
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-1 mr-3 text-blue-500 dark:text-blue-400 mt-1">
                          <div className="w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                        </div>
                        <div>
                          <span className="font-bold">Innovation:</span> We continuously explore new approaches and technologies
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-1 mr-3 text-blue-500 dark:text-blue-400 mt-1">
                          <div className="w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                        </div>
                        <div>
                          <span className="font-bold">Collaboration:</span> We believe the best results come from true partnership
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <h3 className="text-2xl font-bold mb-6">Our Team</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  We&apos;re a dedicated team of designers, developers, and strategists working together to create exceptional digital experiences. With backgrounds spanning technology, art, and business, we bring diverse perspectives to every project.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="aspect-square rounded-xl bg-gray-100 dark:bg-gray-800 overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <User className="w-12 h-12 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  {['Dribbble', 'Behance', 'LinkedIn'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="bg-white dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 shadow-md px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-300"
                      aria-label={platform}
                    >
                      {platform === 'Dribbble' && <Globe className="w-4 h-4" />}
                      {platform === 'Behance' && <Briefcase className="w-4 h-4" />}
                      {platform === 'LinkedIn' && <User className="w-4 h-4" />}
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We offer comprehensive design solutions tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {_services.map((service, index) => (
                <div
                  key={service.title}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 animate-fade-in-up hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 inline-flex text-blue-500 dark:text-blue-400 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 rounded-2xl p-8 md:p-12 animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-6">Our Process</h3>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Discovery',
                    description: 'We learn about your business, goals, users, and competitors to establish a solid foundation.'
                  },
                  {
                    step: '02',
                    title: 'Strategy',
                    description: 'We develop a comprehensive plan aligning design objectives with your business goals.'
                  },
                  {
                    step: '03',
                    title: 'Design',
                    description: 'We create user flows, wireframes, and visual designs through an iterative process.'
                  },
                  {
                    step: '04',
                    title: 'Handoff',
                    description: 'We deliver production-ready designs with documentation for seamless implementation.'
                  }
                ].map((process) => (
                  <div key={process.step} className="relative">
                    <div className="text-5xl font-bold text-gray-100 dark:text-gray-800">{process.step}</div>
                    <div className="absolute top-0 left-0 pt-1 pl-1">
                      <h4 className="text-xl font-bold mb-2">{process.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-10 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Explore our latest design projects across various industries
              </p>
            </div>

            <div className="flex justify-center mb-10 animate-fade-in-up">
              <div className="inline-flex bg-gray-100 dark:bg-gray-900 p-1 rounded-lg">
                {['all', 'fintech', 'ecommerce', 'healthcare', 'other'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${activeTab === tab
                      ? 'bg-white dark:bg-gray-800 shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                      }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
              {_filteredProjects.map((project) => (
                <div key={project.id} className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <Monitor className="w-12 h-12" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6">
                        <h4 className="text-white text-xl font-bold mb-2">{project.title}</h4>
                        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                        <a href="#" className="inline-flex items-center text-white gap-1 text-sm font-medium hover:underline">
                          View Case Study <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Hear from our satisfied clients about their experience working with us
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {_testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.author}
                  className="animate-fade-in-up bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 relative"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="text-5xl text-gray-100 dark:text-gray-800 absolute top-4 left-4">&quot;</div>
                  <div className="relative">
                    <p className="text-gray-600 dark:text-gray-400 mb-8 italic relative z-10">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center">
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <User className="w-6 h-6 text-gray-500" />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.author}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Find answers to common questions about our services and process
              </p>
            </div>

            <div className="max-w-3xl mx-auto animate-fade-in-up">
              {[
                {
                  question: 'How long does a typical project take?',
                  answer: `Project timelines vary based on scope and complexity. Simple projects may take 2-4 weeks, while more comprehensive ones can take 2-3 months. We'll provide a detailed timeline during our initial consultation.`
                },
                {
                  question: 'What is your pricing structure?',
                  answer: 'We offer both project-based and retainer pricing models. Project fees are determined by scope, complexity, and timeline. We provide transparent quotes after understanding your requirements in detail.'
                },
                {
                  question: 'Do you work with clients outside of Ukraine?',
                  answer: 'Absolutely! We work with clients globally and have experience collaborating across different time zones. Our communication process is designed to accommodate international partnerships.'
                },
                {
                  question: 'What information do you need to start a project?',
                  answer: 'To get started, we need your business objectives, target audience information, competitors, existing brand assets, technical requirements, and project timeline. Our detailed brief will help gather all necessary information.'
                },
                {
                  question: 'Do you provide ongoing support after project completion?',
                  answer: 'Yes, we offer maintenance packages and ongoing support services to ensure your digital products continue to perform optimally and evolve with your business needs.'
                }
              ].map((faq, index) => (
                <details
                  key={index}
                  className="group border-b border-gray-200 dark:border-gray-700 py-4"
                >
                  <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none">
                    {faq.question}
                    <span className="transition-transform duration-300 group-open:rotate-180">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-pink-500/10 dark:from-blue-500/20 dark:to-pink-500/20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Experience?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                Let&apos;s create something exceptional together. Reach out to discuss your project, no strings attached.
              </p>
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full text-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                Book a Free Consultation <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Get in touch to discuss your project or request a quote
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <h3 className="text-2xl font-bold mb-6">Let&apos;s Talk</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Fill out the form and we&apos;ll get back to you within 24 hours. Alternatively, you can reach us directly using the contact information below.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 text-blue-500 dark:text-blue-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">Email Us</h4>
                      <a href="mailto:hello@trdstudio.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                        hello@trdstudio.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 text-blue-500 dark:text-blue-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">Call Us</h4>
                      <a href="tel:+380123456789" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                        +38 (012) 345 6789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 text-blue-500 dark:text-blue-400">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">Office</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Kharkiv, Ukraine
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  {['Dribbble', 'Behance', 'LinkedIn'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="bg-gray-100 dark:bg-gray-900 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                      aria-label={platform}
                    >
                      {platform === 'Dribbble' && <Globe className="w-5 h-5" />}
                      {platform === 'Behance' && <Briefcase className="w-5 h-5" />}
                      {platform === 'LinkedIn' && <User className="w-5 h-5" />}
                    </a>
                  ))}
                </div>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <form className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Your email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Project inquiry"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-2px]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section >
      </main >

      {/* Footer */}
      < footer className="bg-gray-900 dark:bg-black text-white py-12" >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <a href="#home" className="text-2xl font-bold tracking-tight mb-4 inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">UlineX</span>
                <span className="ml-2 text-gray-300">Design Studio</span>
              </a>
              <p className="text-gray-400 mb-6">
                Strategic design solutions that transform ideas into impactful digital experiences.
              </p>
              <div className="flex gap-4">
                {['Dribbble', 'Behance', 'LinkedIn'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label={platform}
                  >
                    {platform === 'Dribbble' && <Globe className="w-5 h-5" />}
                    {platform === 'Behance' && <Briefcase className="w-5 h-5" />}
                    {platform === 'LinkedIn' && <User className="w-5 h-5" />}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                {['UX/UI Design', 'Web Design', 'Branding', 'Graphic Design'].map((service) => (
                  <li key={service}>
                    <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                {['About', 'Portfolio', 'Testimonials', 'Process', 'Blog'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <a href="mailto:hello@trdstudio.com" className="hover:text-white transition-colors duration-300">
                    hello@trdstudio.com
                  </a>
                </li>
                <li className="text-gray-400">
                  <a href="tel:+380123456789" className="hover:text-white transition-colors duration-300">
                    +38 (012) 345 6789
                  </a>
                </li>
                <li className="text-gray-400">
                  Kharkiv, Ukraine
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} UlineX Design Studio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer >

      {/* CSS animations */}
      < style jsx > {`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
        }
        
        .animate-blob {
          animation: blob 10s infinite alternate;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style >
    </div >
  );
};

export default TRDDesignStudio;