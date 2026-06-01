export const projectsData = [
  {
    id: 'mumbai',
    title: 'Mumbai',
    heroImage: '/images/mumbai/mumbai-hero.jpg',
    paragraphs: [
      "This is the narrative for Mumbai. It has specific details about the drone laws and geographical features here."
    ],
    // updated to an array of objects
    gallery: [
      { 
        src: '/images/mumbai/mumbai-1.jpg', 
        caption: 'the boundary between the bandra kurla complex and dharavi.' 
      },
      { 
        src: '/images/mumbai/mumbai-2.jpg' 
        // no caption here
      }
    ]
  },
  {
    id: 'manila',
    title: 'Manila',
    heroImage: '/images/manila/manila-hero.jpg',
    paragraphs: [
      "This is the narrative for Manila. It has other specific details here. This is not a caption, btw."
    ],
    // updated to an array of objects
    gallery: [
      { 
        src: '/images/manila/manila-1.jpg', 
        caption: 'caption1.' 
      },
      { 
        src: '/images/manila/manila-2.jpg',
        caption: 'caption2.' 
      }
    ]
  }
];