import Link from 'next/link';
import Image from 'next/image'; // Added Image import
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
        
        {/* Replaced Pink Box with Hero Image */}
        <div className="w-full h-[50vh] md:h-[70vh] mb-12 relative bg-gray-100">
          <Image 
            src={project.heroImage} 
            alt={`${project.title} aerial view`} 
            fill 
            className="object-cover"
            priority // Loads the hero image immediately
          />
        </div>

        <article className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700 space-y-6 mb-16">
          {project.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </article>

        {/* Replaced Pink Boxes with Gallery Images */}
        <div className="space-y-10 md:space-y-16">
          {project.galleryImages.map((imgSrc, index) => (
            <div key={index} className="w-full h-[40vh] md:h-[60vh] relative bg-gray-100">
               <Image 
                  src={imgSrc} 
                  alt={`${project.title} gallery image ${index + 1}`} 
                  fill 
                  className="object-cover"
               />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}