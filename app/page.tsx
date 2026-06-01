import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/lib/projects';

export default function PortfolioTemplate() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white text-gray-900 font-sans">
      
      {/* Sidebar Navigation */}
      <nav className="w-full md:w-64 p-8 border-r border-gray-200 shrink-0 z-10 bg-white">
        <Link href="/">
          <h1 className="text-2xl font-bold mb-10 tracking-tight">Elliot Lai</h1>
        </Link>
        
        <div className="mb-8">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Locations</h2>
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