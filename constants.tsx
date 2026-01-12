
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
    ],
    benefits: [
      { title: 'Optimized Energy Consumption', description: 'Advanced calibration reduces energy bills by up to 30% while maintaining superior comfort levels.' },
      { title: 'Enhanced Air Quality', description: 'Hospital-grade filtration systems remove 99.9% of biological contaminants and allergens.' },
      { title: 'Silent Operation', description: 'Acoustic dampers and precision balancing ensure your system is felt, not heard.' },
      { title: 'Extended Hardware Life', description: 'Proactive component care doubles the operational lifespan of expensive HVAC units.' }
    ],
    process: [
      { title: 'System Auditing', description: 'We begin with a thermal imaging audit to identify efficiency leaks and airflow bottlenecks.' },
      { title: 'Bespoke Design', description: 'For new installs, we engineer ductwork that integrates invisibly with your architecture.' },
      { title: 'Precision Installation', description: 'Our certified engineers execute installations with surgical cleanliness and care.' },
      { title: 'Smart Calibration', description: 'Final commissioning involves balancing air pressure and integrating smart controls.' }
    ],
    whyChooseUs: 'Unlike standard technicians, our engineers understand the thermal dynamics of luxury properties. We treat climate control as an integrated architectural element, not just a mechanical utility.'
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
    ],
    benefits: [
      { title: 'Absolute Safety', description: 'Rigorous testing protocols ensure your property is protected against surges and fire hazards.' },
      { title: 'Smart Future-Proofing', description: 'Infrastructure designed to support EV chargers, solar integration, and next-gen automation.' },
      { title: 'Mood Architecture', description: 'Lighting circuits designed to create distinct atmospheres for day, evening, and entertaining.' },
      { title: 'Uninterrupted Power', description: 'Seamless backup solutions ensure your lifestyle is never disrupted by grid failures.' }
    ],
    process: [
      { title: 'Load Calculation', description: 'We calculate the precise power requirements of your modern lifestyle appliances.' },
      { title: 'Strategic Wiring', description: 'Cabling is routed with future accessibility in mind, minimizing disruption for upgrades.' },
      { title: 'Fixture Installation', description: 'We handle premium fittings with white-glove care, ensuring perfect alignment.' },
      { title: 'Safety Certification', description: 'Every project concludes with a full compliance certificate and safety stress-test.' }
    ],
    whyChooseUs: 'We bridge the gap between heavy engineering and delicate interior design. Our electricians are trained to work around expensive finishes, ensuring that the only sign of our presence is flawless functionality.'
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
    ],
    benefits: [
      { title: 'Water Purity', description: 'Whole-home filtration integration for spa-quality water from every tap.' },
      { title: 'Pressure Balance', description: 'Optimized systems that deliver consistent, powerful pressure across all bathrooms simultaneously.' },
      { title: 'Silent Drainage', description: 'Acoustically insulated piping eliminates the noise of water movement behind walls.' },
      { title: 'Leak Immunity', description: 'Advanced jointing techniques and pressure testing prevent future water damage.' }
    ],
    process: [
      { title: 'Non-Invasive Inspection', description: 'We use fiber-optic cameras to inspect internal pipe health without breaking tiles.' },
      { title: 'Technical Planning', description: 'Complex flows are hydraulically calculated to prevent blockages and pressure drops.' },
      { title: 'Precision Fitting', description: 'Fixtures are installed using laser levels to ensure perfect symmetry and alignment.' },
      { title: 'System Sterilization', description: 'New systems are flushed and sterilized before handover.' }
    ],
    whyChooseUs: 'Plumbing is often hidden, but its failure is catastrophic. We use industrial-grade materials in residential settings to provide commercial-level durability and peace of mind.'
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
    ],
    benefits: [
      { title: 'Flawless Surfaces', description: 'Level 5 drywall finishing ensures walls are perfectly smooth even under rake lighting.' },
      { title: 'Health Conscious', description: 'Zero-VOC, odorless paints allow you to inhabit your space immediately after completion.' },
      { title: 'Color Permanence', description: 'UV-stabilized pigments prevent fading and chalking on exteriors for a decade.' },
      { title: 'Easy Maintenance', description: 'Washable, scuff-resistant finishes that forgive the wear and tear of daily life.' }
    ],
    process: [
      { title: 'Furniture Protection', description: 'We treat your belongings with reverence, using museum-grade covers and barriers.' },
      { title: 'Defect Correction', description: 'Every imperfection, crack, and nail pop is surgically repaired and smoothed.' },
      { title: 'Multi-Coat Application', description: 'Light sanding between coats ensures mechanical adhesion and a velvet touch.' },
      { title: 'White Glove Clean', description: 'We leave your property spotlessly clean, with windows polished and floors vacuumed.' }
    ],
    whyChooseUs: 'We don’t just apply paint; we restore surfaces. Our team consists of artisan decorators who understand how light interacts with texture and color, delivering a finish that feels as good as it looks.'
  },
  { 
    id: 'renovation', 
    title: 'Home Renovation', 
    description: 'Transformative spatial design and structural upgrades that breathe new life into existing structures.', 
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200',
    extendedContent: 'Renovating requires respect for original character while pushing boundaries of modern living.',
    features: ['Space Planning', 'Structural Changes', 'Kitchen Specialist', 'High-End Joinery'],
    sections: [
      { title: 'Spatial Design', text: 'We reimagine how you move through your home, removing barriers to create open environments.' },
      { title: 'Material Selection', text: 'From Calacatta marble to custom-milled oak, we source the world’s finest materials.' },
      { title: 'Project Management', text: 'We manage every detail, from council approvals to the final site clean.' }
    ],
    benefits: [
      { title: 'Value Addition', description: 'Strategic renovations that are proven to increase property valuation by 20-30%.' },
      { title: 'Flow & Function', description: 'Reconfigured layouts that unlock the hidden potential of your existing footprint.' },
      { title: 'Bespoke Identity', description: 'Custom joinery and unique finishes that reflect your personal narrative, not a trend.' },
      { title: 'Stress-Free Build', description: 'A single point of contact manages all trades, schedules, and quality control.' }
    ],
    process: [
      { title: 'Concept Feasibility', description: 'We assess structural constraints to determine exactly what is possible.' },
      { title: 'Material Sourcing', description: 'We escort you to private showrooms to select stones, woods, and fixtures.' },
      { title: 'Construction Phase', description: 'A strictly scheduled build ensures momentum is maintained without compromising quality.' },
      { title: 'Detailing', description: 'The final 5%—silicones, trims, and adjustments—receives 50% of our attention.' }
    ],
    whyChooseUs: 'We handle the "impossible" renovations. Tight access, occupied spaces, and heritage restrictions are where we excel. We respect that we are guests in your home, maintaining a tidy and polite site at all times.'
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
    ],
    benefits: [
      { title: 'Architectural Accuracy', description: 'We speak the language of architects, translating complex details into built reality.' },
      { title: 'Structural Longevity', description: 'Over-engineered foundations and frames ensure your asset withstands the test of time.' },
      { title: 'Transparent Costing', description: 'Detailed quantity surveying prevents budget creep and unexpected variations.' },
      { title: 'Site Excellence', description: 'A managed site is a safe site. We maintain rigorous standards of organization and safety.' }
    ],
    process: [
      { title: 'Site Mobilization', description: 'Secure hoarding and site setup to establish a professional workspace.' },
      { title: 'Shell & Core', description: 'Rapid, precise execution of the structural elements to get watertight quickly.' },
      { title: 'MEP Integration', description: 'Mechanical, Electrical, and Plumbing systems are roughed in with future-proofing in mind.' },
      { title: 'Finishes & Handover', description: 'The installation of final layers, followed by a comprehensive snagging and handover capability.' }
    ],
    whyChooseUs: 'We are builders who think like owners. We understand that a construction project is a significant financial asset, and we manage it with the rigour of an investment portfolio.'
  },
  { 
    id: 'annual-maintenance-contract', 
    title: 'Annual Maintenance', 
    description: 'Comprehensive maintenance contracts providing year-round peace of mind for your property.', 
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
    extendedContent: 'Our Annual Maintenance Contracts (AMC) offer proactive care, ensuring your property remains in pristine condition year-round.',
    features: ['Priority Response', 'Scheduled Preventive Maintenance', 'Unlimited Emergency Callouts', 'Comprehensive Coverage'],
    sections: [
      { title: 'Proactive Care', text: 'We identify issues before they become problems with regular detailed inspections.' },
      { title: 'Priority Access', text: 'AMC clients receive skip-the-queue priority for all service requests.' },
      { title: 'Cost Certainty', text: 'Avoid unexpected repair bills with our inclusive maintenance packages.' }
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
