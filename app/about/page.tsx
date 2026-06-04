import Link from 'next/link';
import Image from 'next/image';
import { aboutData } from '@/lib/about';
// import CopyEmail from '@/components/CopyEmail';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* Top Navigation */}
      <header className="p-6 md:p-8">
        <Link 
          href="/" 
          className="text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-gray-900 transition-colors"
        >
          &larr; Back to Portfolio
        </Link>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-20 mt-10 md:mt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">About Me</h1>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          
          {/* Profile Image */}
          <div className="w-full md:w-1/3 aspect-[4/5] relative bg-gray-100 flex-shrink-0">
            {/* Remove the generic div when you have your image ready, and uncomment this Image component:
            <Image 
              src={aboutData.profileImage} 
              alt={`Portrait of ${aboutData.name}`} 
              fill 
              className="object-cover grayscale" 
            /> 
            */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm tracking-widest uppercase">
              [ Portrait ]
            </div>
          </div>

          {/* Bio & Info Section */}
          <div className="w-full md:w-2/3 text-lg leading-relaxed text-gray-700">
            
            {/* Dynamic Bio Paragraphs */}
            <div className="space-y-6">
              {aboutData.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Contact / Info Block */}
            <div className="pt-10 mt-10 border-t border-gray-200">
              <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">
                Contact & Details
              </h2>
              <ul className="space-y-3 text-base">
                <li>
                  <strong className="text-gray-900 mr-2">Email:</strong> 
                  {/* <a href={`mailto:${aboutData.contact.email}`} className="hover:text-gray-500 underline decoration-gray-300 underline-offset-4 transition-colors"> */}
                    {aboutData.contact.email2}
                  {/* </a> */}
                </li>
                <li>
                  <strong className="text-gray-900 mr-2">LinkedIn:</strong> 
                  <a href={aboutData.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 underline decoration-gray-300 underline-offset-4 transition-colors">
                    {aboutData.contact.linkedinHandle}
                  </a>
                </li>
                <li>
                  <strong className="text-gray-900 mr-2">Location:</strong> 
                  {aboutData.contact.location}
                </li>
              </ul>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}