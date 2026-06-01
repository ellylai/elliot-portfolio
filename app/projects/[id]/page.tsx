import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projectsData } from '@/lib/projects';

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="p-6 md:p-8">
        <Link href="/" className="text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-gray-900 transition-colors">
          &larr; Back to Portfolio
        </Link>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center tracking-tight">
          {project.title}
        </h1>
        
        {/* Natural Aspect Ratio Hero Image */}
        <div className="w-full mb-12 bg-gray-50 flex justify-center">
          <Image 
            src={project.heroImage} 
            alt={`${project.title} aerial view`} 
            width={1600} 
            height={1200}
            className="w-full h-auto"
            priority 
          />
        </div>

        <article className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700 space-y-6 mb-16">
          {project.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </article>

        {/* Natural Aspect Ratio Gallery Images */}
        <div className="space-y-16 md:space-y-24">
          {project.gallery.map((item, index) => (
            <figure key={index} className="flex flex-col items-center">
              <div className="w-full bg-gray-50 flex justify-center">
                <Image 
                  src={item.src} 
                  alt={item.caption || `${project.title} gallery image ${index + 1}`} 
                  width={1600}
                  height={1200}
                  className="w-full h-auto"
                />
              </div>
              
              {item.caption && (
                <figcaption className="mt-4 text-sm text-gray-500 tracking-wide max-w-3xl text-center">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </main>
    </div>
  );
}