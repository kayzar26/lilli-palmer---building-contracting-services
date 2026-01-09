
import { Project, Service, BlogPost } from './types';

export const COLORS = {
  primary: '#BBA899',
  accent: '#69727D',
  background: '#EBEBEB',
  text: '#69727D',
};

export const PROJECTS: Project[] = [
  { id: '1', title: 'MODERN HVAC OVERHAUL', category: 'Climate Control', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200' },
  { id: '2', title: 'HERITAGE RE-PAINTING', category: 'Aesthetics', image: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?auto=format&fit=crop&q=80&w=1200' },
  { id: '3', title: 'LUXURY KITCHEN RENO', category: 'Renovation', image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=1200' },
  { id: '4', title: 'ARCHITECTURAL ADDITION', category: 'Construction', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200' },
  { id: '5', title: 'SMART GRID ELECTRICAL', category: 'Repair', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200' },
];

export const SERVICES: Service[] = [
  { 
    id: 'hvac', 
    title: 'HVAC Solutions', 
    description: 'Precision climate control systems. Installation, repair, and seasonal optimization for high-end properties.', 
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1200',
    extendedContent: 'HVAC systems are the lungs of your property. At Lilli Palmer, we specialize in the precision maintenance and rapid repair of high-end climate control systems.',
    features: ['Seasonal Optimization', 'Emergency Repair', 'Smart Integration', 'Air Quality Audits'],
    sections: [
      { title: 'Preventative Maintenance', text: 'Regular servicing prevents 90% of system failures. Our team conducts deep-cycle inspections twice yearly.' },
      { title: 'Rapid Repair', text: 'When systems fail, response time is critical. Our HVAC engineers are equipped with advanced diagnostics.' },
      { title: 'Energy Efficiency', text: 'We integrate smart thermostats and zone-based controls to reduce environmental impact.' }
    ]
  },
  { 
    id: 'electrical', 
    title: 'Electrical Repair', 
    description: 'Certified electrical engineers delivering safe, innovative power and lighting solutions.', 
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200',
    extendedContent: 'Electrical integrity is the backbone of property safety. Our certified engineers provide full property audits and advanced infrastructure.',
    features: ['Full Property Audits', 'Lighting Design', 'Smart Home Setup', 'Fault Detection'],
    sections: [
      { title: 'Safety & Compliance', text: 'We ensure your property meets the highest standards. Our safety audits identify potential hazards.' },
      { title: 'Aesthetic Lighting', text: 'Lighting is an architectural tool. We design bespoke systems that highlight the best features of your home.' },
      { title: 'Technology Integration', text: 'From smart hubs to backup power, we build the infrastructure required for modern living.' }
    ]
  },
  { 
    id: 'plumbing', 
    title: 'Professional Plumbing', 
    description: 'Advanced drainage systems and precision fixture repairs executed with architectural care.', 
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1200',
    extendedContent: 'From heritage fixtures to modern drainage, our master plumbers deliver uncompromised precision.',
    features: ['Leak Detection', 'Precision Fixtures', 'Gas Fitting', 'Drainage Management'],
    sections: [
      { title: 'High-Pressure Diagnostics', text: 'We use acoustic leak detection to find hidden issues without damaging your property.' },
      { title: 'Bespoke Installations', text: 'We specialize in the installation of premium international fixtures for kitchens and bathrooms.' },
      { title: 'Emergency Management', text: 'Our rapid-response team is available for critical repairs 24/7 for our retained clients.' }
    ]
  },
  { 
    id: 'painting', 
    title: 'Painting Services', 
    description: 'Exquisite interior and exterior finishing using premium palettes and meticulous techniques.', 
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200',
    extendedContent: 'Surface preparation is 90% of a perfect finish. We use premium low-VOC paints and specialized techniques.',
    features: ['Heritage Restoration', 'Minimalist Finishes', 'Facade Protection', 'Custom Color Matching'],
    sections: [
      { title: 'Master Surface Prep', text: 'We believe a great finish starts underneath. Our team meticulously sands and primes every surface.' },
      { title: 'Heritage Timber Care', text: 'Preserving old-growth timber requires specialized knowledge of traditional methods.' },
      { title: 'Exterior Durability', text: 'Our exterior solutions are designed for longevity, utilizing UV-resistant coatings.' }
    ]
  },
  { 
    id: 'renovation', 
    title: 'Boutique Renovation', 
    description: 'Transformative spatial design and structural upgrades that breathe new life into existing structures.', 
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200',
    extendedContent: 'Renovating requires respect for original character while pushing boundaries of modern living.',
    features: ['Space Planning', 'Structural Changes', 'Kitchen Specialist', 'High-End Joinery'],
    sections: [
      { title: 'Spatial Design', text: 'We reimagine how you move through your home, removing barriers to create open environments.' },
      { title: 'Material Selection', text: 'From Calacatta marble to custom-milled oak, we source the world’s finest materials.' },
      { title: 'Project Management', text: 'We manage every detail, from council approvals to the final site clean.' }
    ]
  },
  { 
    id: 'construction', 
    title: 'Full Construction', 
    description: 'From foundation to finish, we execute architectural visions with uncompromised precision.', 
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    extendedContent: 'Architectural construction demands precision at every scale. We partner with leading designers to execute builds.',
    features: ['New Builds', 'Structural Extensions', 'Architectural Partnership', 'Project Engineering'],
    sections: [
      { title: 'Structural Integrity', text: 'We build for generations, focusing on structural redundancy and long-term performance.' },
      { title: 'Architectural Fidelity', text: 'We ensure every millimeter of the vision is realized, from hidden supports to cladding.' },
      { title: 'End-to-End Delivery', text: 'Our process is transparent and controlled, providing regular quality assurance.' }
    ]
  },
];

export const BLOGS: BlogPost[] = [
  { 
    id: 'b1', 
    title: 'The Art of High-End HVAC', 
    date: 'Oct 12, 2025', 
    excerpt: 'Integrating climate control seamlessly into architectural design.', 
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    author: 'Aydan Doherty',
    category: 'Engineering',
    sections: [
      { title: 'The Invisible Comfort', content: 'Modern luxury is as much about what you don\'t see as what you do. High-end HVAC systems are now designed to be completely integrated into the architectural fabric of a building.' },
      { title: 'Acoustic Engineering', content: 'Silence is the ultimate luxury. We work with acoustic engineers to ensure that even at peak performance, our climate systems remain a whisper.' }
    ]
  },
  { 
    id: 'b2', 
    title: 'Color Trends for 2026', 
    date: 'Sept 28, 2025', 
    excerpt: 'Deep tones and textured finishes in luxury painting.', 
    image: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?auto=format&fit=crop&q=80&w=1200',
    author: 'Lilli Palmer',
    category: 'Design',
    sections: [
      { title: 'The Return of Texture', content: 'We are seeing a massive shift away from flat colors toward textured, lime-washed finishes that catch the light in unique ways.' },
      { title: 'Deep Earth Tones', content: 'Expect to see more terracotta, sage, and deep slate in the upcoming season. These colors bring a grounded, organic feel to large open spaces.' }
    ]
  },
  { 
    id: 'b3', 
    title: 'Restoration vs. Rebuild', 
    date: 'Aug 15, 2025', 
    excerpt: 'When to preserve heritage and when to build anew.', 
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200',
    author: 'Construction Lead',
    category: 'Architecture',
    sections: [
      { title: 'The Soul of the Property', content: 'Heritage buildings carry a soul that is impossible to replicate. Our approach is to preserve that essence while modernizing the livability.' },
      { title: 'Structural Considerations', content: 'Sometimes, the bones are too far gone. We help clients navigate the difficult decision between a costly restoration and a fresh architectural start.' }
    ]
  },
];
