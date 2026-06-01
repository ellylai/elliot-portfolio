import Link from 'next/link';

const projects = [
  { id: 'mumbai', title: 'Mumbai' },
  { id: 'manila', title: 'Manila' },
  { id: 'south-africa', title: 'South Africa' },
  { id: 'sao-paulo', title: 'São Paulo' },
  { id: 'new-york', title: 'New York City' },
  { id: 'nairobi', title: 'Nairobi' }
];

export default function PortfolioTemplate() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white text-gray-900 font-sans">
      
      {/* Sidebar Navigation */}
      <nav className="w-full md:w-64 p-8 border-r border-gray-200 shrink-0">
        <Link href="/">
          <h1 className="text-2xl font-bold mb-10 tracking-tight">Unequal Scenes</h1>
        </Link>
        
        <div className="mb-8">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Locations</h2>
          <ul className="space-y-2 text-sm">
            {projects.map((project) => (
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
            <li><Link href="/about" className="hover:text-gray-500 transition-colors">About</Link></li>
            <li><Link href="/press" className="hover:text-gray-500 transition-colors">Press</Link></li>
          </ul>
        </div>
      </nav>

      {/* Main Grid Content */}
      <main className="flex-1 p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link 
              href={`/projects/${project.id}`} 
              key={project.id} 
              className="group relative block aspect-[4/3] bg-gray-100 overflow-hidden"
            >
              {/* Placeholder for Next.js <Image /> */}
              <div className="w-full h-full bg-gray-200 transition-transform duration-700 group-hover:scale-105" />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-medium tracking-wide">
                  {project.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      
    </div>
  );
}