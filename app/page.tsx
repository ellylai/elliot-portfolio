import Link from 'next/link';

// Sample projects - you will update these
const projects = [
  { id: 'mumbai', title: 'Mumbai' },
  { id: 'manila', title: 'Manila' }
];

export default function PortfolioTemplate() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white text-gray-900 font-sans">
      
      {/* Sidebar Navigation */}
      <nav className="w-full md:w-64 p-8 border-r border-gray-200 shrink-0">
        <Link href="/">
          <h1 className="text-2xl font-bold mb-10 tracking-tight">Portfolio</h1>
        </Link>
        
        {/* Locations/Projects Section */}
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

        {/* Info/About Section */}
        <div>
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Info</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-gray-500 transition-colors">About</Link></li>
            <li><Link href="/press" className="hover:text-gray-500 transition-colors">Press</Link></li>
            <li><Link href="/talks" className="hover:text-gray-500 transition-colors">Talks</Link></li>
            <li><Link href="/contact" className="hover:text-gray-500 transition-colors">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Main Content Area - A Black Box Placeholder */}
      <main className="flex-1 bg-black p-8 text-white flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-4">Main Content Area</h3>
          <p className="text-xl">Your photo grid or project content will be placed here.</p>
        </div>
      </main>
      
    </div>
  );
}