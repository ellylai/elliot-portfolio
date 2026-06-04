import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/lib/projects';
import { aboutData } from '@/lib/about';
import CopyEmail from '@/components/CopyEmail';

export default function PortfolioTemplate() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white text-gray-900 font-sans">
      
      {/* Sidebar Navigation */}
      <nav className="w-full md:w-64 p-8 border-r border-gray-200 shrink-0 z-10 bg-white">
        <Link href="/">
          <h1 className="text-2xl font-bold mb-10 tracking-tight">Elliot Lai</h1>
        </Link>
        
        <div className="mb-8">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Projects</h2>
          <ul className="space-y-2 text-sm">
            {projectsData.map((project) => (
              <li key={project.id}>
                <Link href={`/projects/${project.id}`} className="hover:text-gray-500 transition-colors">
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Info</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-gray-500 transition-colors">About Me</Link></li>
          </ul>
          {/* Social Icons */}
        <div className="flex gap-4 mt-8 text-gray-400">
          {/* Email */}
          <CopyEmail email={aboutData.contact.email2} />

          {/* LinkedIn */}
          <a href={aboutData.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors" aria-label="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href={aboutData.contact.instaUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors" aria-label="Instagram">
             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
        </div>
      </nav>

      {/* Main Content Area - Interactive Grid */}
      <main className="flex-1 p-2 md:p-6 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4 h-full auto-rows-[400px]">
          {projectsData.map((project) => (
            <Link 
              href={`/projects/${project.id}`} 
              key={project.id} 
              className="group relative block w-full h-full overflow-hidden bg-gray-200"
            >
              {/* Base Layer: High-res image with default desaturation */}
              {project.heroImage ? (
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="object-cover saturate-50 brightness-90 transition-all duration-500 ease-in-out group-hover:saturate-100 group-hover:brightness-100 group-hover:scale-105"
                />
              ) : (
                // Fallback if no image is defined yet
                <div className="w-full h-full bg-gray-300" />
              )}
              
              {/* Interactive Overlay Container */}
              <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 flex items-center justify-center">
                
                {/* Center Title Box (Fades and scales in) */}
                <div className="bg-white/90 px-8 py-4 opacity-0 scale-90 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 delay-75 shadow-lg">
                  <h3 className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase text-gray-900">
                    {project.title}
                  </h3>
                </div>
                
              </div>
            </Link>
          ))}
        </div>
      </main>
      
    </div>
  );
}