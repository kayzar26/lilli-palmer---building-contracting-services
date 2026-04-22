import { Service, BlogPost, Testimonial } from './types';

// export const COLORS = {
//   primary: '#BBA899',
//   accent: '#69727D',
//   background: '#EBEBEB',
//   text: '#69727D',
// };

export const SERVICES: Service[] = [
  { 
    id: 'hvac', 
    title: 'HVAC Solutions', 
    description: 'Precision climate control systems. Installation, repair, and seasonal optimization for high-end properties.', 
    image: '/images/services/hvac_new.webp',
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
    whyChooseUs: 'Unlike standard technicians, our engineers understand the thermal dynamics of luxury properties. We treat climate control as an integrated architectural element, not just a mechanical utility.',
    seoContent: 'When it comes to premium HVAC services in Dubai, Lilli Palmer stands as the region\'s most trusted provider. Our HVAC solutions are engineered for the unique demands of high-end residential and commercial properties across the UAE. Whether you require a complete HVAC installation for a new build, a precision HVAC repair for an existing system, or a seasonal HVAC maintenance programme to keep your climate control running at peak efficiency, our certified engineers deliver results that exceed expectations. We understand that a reliable HVAC system is not a luxury, it is a necessity in the Gulf climate. That is why every HVAC project we undertake is backed by our commitment to energy efficiency, silent operation, and long-term durability. Choose Lilli Palmer for HVAC excellence that protects your comfort and your investment.',
    cta: {
      heading: 'Is Your HVAC System Performing at Its Best?',
      description: 'Schedule a complimentary HVAC performance assessment with our certified engineers. We\'ll identify efficiency gaps and recommend solutions tailored to your property.',
      buttonText: 'Book Your Free HVAC Assessment'
    }
  },
  { 
    id: 'electrical', 
    title: 'Electrical Repair', 
    description: 'Certified electrical engineers delivering safe, innovative power and lighting solutions.', 
    image: '/images/services/electrical.webp',
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
    whyChooseUs: 'We bridge the gap between heavy engineering and delicate interior design. Our electricians are trained to work around expensive finishes, ensuring that the only sign of our presence is flawless functionality.',
    seoContent: 'Lilli Palmer delivers expert electrical services across Dubai, combining safety-first engineering with the refined touch that luxury properties demand. Our electrical repair and installation team comprises fully certified engineers who specialise in both high-voltage infrastructure and delicate smart-home electrical integrations. From comprehensive electrical safety audits to bespoke lighting design and complete electrical system upgrades, we handle every aspect of your property\'s electrical needs. Our electrical solutions are future-proofed for EV charging, solar panel integration, and next-generation home automation. When you choose Lilli Palmer for your electrical project, you are choosing a partner who treats electrical work as both a science and an art delivering flawless functionality without compromising your property\'s aesthetic integrity.',
    cta: {
      heading: 'Concerned About Your Property\'s Electrical Safety?',
      description: 'Our certified electrical engineers will conduct a thorough safety audit of your property, identifying potential hazards and recommending smart upgrades.',
      buttonText: 'Request an Electrical Repair'
    }
  },
  { 
    id: 'plumbing', 
    title: 'Professional Plumbing', 
    description: 'Advanced drainage systems and precision fixture repairs executed with architectural care.', 
    image: '/images/services/plumbing_new.webp',
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
    whyChooseUs: 'Plumbing is often hidden, but its failure is catastrophic. We use industrial-grade materials in residential settings to provide commercial-level durability and peace of mind.',
    seoContent: 'For professional plumbing services in Dubai that go beyond the ordinary, Lilli Palmer is the contractor of choice for discerning property owners. Our master plumbers bring decades of combined plumbing experience to every project, from non-invasive leak detection to the installation of premium international plumbing fixtures. We understand that quality plumbing is the invisible infrastructure that underpins a comfortable home. That is why our plumbing solutions use industrial-grade materials and precision engineering techniques to deliver commercial-level reliability in residential settings. Whether you need emergency plumbing repairs, a complete bathroom plumbing overhaul, or advanced drainage management for a new property, our plumbing team delivers results that are built to last quietly, efficiently, and without disruption to your daily life.',
    cta: {
      heading: 'Protect Your Property from Hidden Plumbing Issues',
      description: 'Our non-invasive plumbing inspection uses fibre-optic cameras and acoustic detection to identify problems before they cause damage. No tiles broken, no walls opened.',
      buttonText: 'Schedule a Plumbing Inspection'
    }
  },
  { 
    id: 'painting', 
    title: 'Painting Services', 
    description: 'Exquisite interior and exterior finishing using premium palettes and meticulous techniques.', 
    image: '/images/services/painting_new.webp',
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
    whyChooseUs: 'We don\'t just apply paint; we restore surfaces. Our team consists of artisan decorators who understand how light interacts with texture and color, delivering a finish that feels as good as it looks.',
    seoContent: 'Lilli Palmer\'s painting services are designed for clients who understand that a flawless finish transforms a space entirely. Our professional painting team combines artisan-level skill with premium, health-conscious materials to deliver painting results that are both visually stunning and enduring. From intricate interior painting that requires colour-matching precision to large-scale exterior painting projects that demand weather-resistant durability, we approach every painting job as a craft. Our painting process begins with meticulous surface preparation because we know that a perfect painting finish starts underneath. Whether you are refreshing a single feature wall or repainting an entire villa, our painting specialists ensure a Level 5 finish that looks flawless under any light.',
    cta: {
      heading: 'Ready to Transform Your Space with a Perfect Finish?',
      description: 'Book a colour consultation with our painting specialists. We\'ll help you select the perfect palette and provide a detailed quote for your project.',
      buttonText: 'Get a Painting Consultation'
    }
  },
  { 
    id: 'renovation', 
    title: 'Home Renovation', 
    description: 'Bespoke villa and apartment renovations, including luxury kitchen and bathroom transformations.', 
    image: '/images/services/renovation.webp',
    extendedContent: 'We specialize in high-end villa renovation and luxury apartment renovation across Dubai, turning outdated spaces into architectural masterpieces.',
    features: ['Villa Renovation', 'Apartment Renovation', 'Kitchen Transformations', 'Bathroom Upgrades'],
    sections: [
      { title: 'Kitchen Renovation', text: 'State-of-the-art culinary spaces featuring custom joinery, premium appliances, and ergonomic flow.' },
      { title: 'Bathroom Renovation', text: 'Spa-like sanctuaries with high-end fixtures, marble finishes, and precision plumbing integration.' },
      { title: 'Villa & Apartment Renovation', text: 'Complete spatial reimagining, from structural changes to fine interior detailing.' }
    ],
    benefits: [
      { title: 'Lifestyle Optimization', description: 'Layouts specifically reconfigured to suit the modern lifestyle of villa and apartment owners.' },
      { title: 'Premium Sourcing', description: 'Exclusive access to high-end marbles, woods, and fixtures that define luxury living.' },
      { title: 'Strategic Value', description: 'Renovations designed to significantly increase the market value of your Dubai property.' },
      { title: 'Turnkey Delivery', description: 'From concept and permits to final Snagging—we manage the entire lifecycle.' }
    ],
    process: [
      { title: 'Consultation', description: 'We discuss your specific needs for your villa or apartment renovation.' },
      { title: 'Design & Permitting', description: 'We handle all required structural engineering and DED/municipality approvals.' },
      { title: 'Construction', description: 'Our artisan trades execute the build with meticulous attention to detail.' },
      { title: 'Handover', description: 'A detailed walkthrough ensuring every corner meets our white-glove standards.' }
    ],
    whyChooseUs: 'We handle specialized home renovations where others fail. Whether it is a full villa overhaul or a high-end apartment update, we navigate the technical complexities of residential remodeling with absolute precision.',
    seoContent: 'Looking for the best villa renovation in Dubai or expert apartment renovation? Lilli Palmer is the premier choice for luxury home renovation, specializing in bespoke kitchen renovation and high-end bathroom renovation. Our team of expert renovation contractors in Dubai handles everything from spatial planning and structural changes to the fine finishing of cabinetry and fixtures. We understand that your home is your sanctuary, which is why our home renovation services are designed to enhance both functionality and market value. Whether you are seeking a complete villa renovation or a focused kitchen and bathroom transformation for your apartment, we deliver result that are architecturally sound and visually stunning.',
    subServices: [
      {
        id: 'villa-renovation',
        title: 'Villa Renovation',
        description: 'Complete villa renovation services across Dubai — from structural overhauls to luxury interior finishing.',
        image: '/images/services/villa_renovation.webp',
        carouselImages: ['/images/services/carousel/villa/1.webp', '/images/services/carousel/villa/2.webp', '/images/services/carousel/villa/3.webp', '/images/services/carousel/villa/4.webp', '/images/services/carousel/villa/5.webp'],
        sections: [
          { title: 'Structural Transformation', text: 'We reimagine villa floor plans by removing load-bearing walls with engineered steel supports, creating open-concept living areas that flood with natural light. Every structural modification is approved by certified engineers and compliant with DED regulations.' },
          { title: 'Facade & Exterior Upgrade', text: 'Modern stone cladding, aluminium composite panels, and designer landscaping transform the kerb appeal of ageing villas. We integrate ambient exterior lighting and smart irrigation systems for a complete outdoor transformation.' },
          { title: 'Interior Finishing', text: 'From Level 5 drywall finishing to bespoke joinery and imported Italian marble flooring, our artisan teams deliver interior finishes that rival five-star hotels. Every villa renovation is completed with a comprehensive snagging process.' }
        ],
        benefits: [
          { title: 'Value Appreciation', description: 'Strategic villa renovations proven to increase property market value by 20-30% across Dubai communities.' },
          { title: 'Turnkey Management', description: 'A single dedicated project manager handles all trades, permits, and quality control from start to finish.' },
          { title: 'Heritage Respect', description: 'We preserve the architectural character of your villa while introducing modern luxury and functionality.' },
          { title: 'Premium Materials', description: 'Direct sourcing partnerships with global suppliers ensure the finest marbles, woods, and fixtures at competitive pricing.' }
        ],
        process: [
          { title: 'Villa Assessment', description: 'Our senior architect conducts a detailed structural and aesthetic assessment of your existing villa.' },
          { title: 'Design & Approvals', description: 'We produce 3D visualizations and handle all DED and community NOC approvals on your behalf.' },
          { title: 'Construction Phase', description: 'Our certified teams execute the renovation on a strict timeline with weekly progress updates.' },
          { title: 'Snagging & Handover', description: 'A meticulous 200-point snagging checklist ensures every detail meets our white-glove standard.' }
        ],
        whyChooseUs: 'Villa renovations demand a contractor who understands the scale and complexity of large residential projects. With over a decade of villa renovation experience in communities like Arabian Ranches, Emirates Hills, and Palm Jumeirah, Lilli Palmer delivers results that are structurally sound, aesthetically breathtaking, and completed on time.',
        seoContent: 'As a leading villa renovation company in Dubai, Lilli Palmer transforms outdated villas into contemporary masterpieces. Our villa renovation services cover every aspect of your project — from initial concept design and DED approvals through to structural modifications, premium finishing, and landscaping. Whether you own a villa in Arabian Ranches, Emirates Hills, Jumeirah, or Palm Jumeirah, our experienced villa renovation contractors deliver turnkey solutions that increase your property value by up to 30%. We specialize in open-plan villa conversions, modern facade upgrades, and complete interior redesigns that respect the original architectural character while introducing cutting-edge luxury. Every villa renovation we undertake is managed by a dedicated project coordinator, ensuring transparent timelines and meticulous quality control from foundation to final polish.',
        cta: { heading: 'Ready to Reimagine Your Villa?', description: 'Schedule a complimentary villa assessment with our senior architect. We will evaluate your space and present a detailed renovation roadmap with transparent costing.', buttonText: 'Book a Villa Assessment' }
      },
      {
        id: 'apartment-renovation',
        title: 'Apartment Renovation',
        description: 'Luxury apartment renovation and fit-out services for high-rise living across Dubai Marina, Downtown, and beyond.',
        image: '/images/services/apartment_renovation.webp',
        carouselImages: ['/images/services/carousel/apartment/1.webp', '/images/services/carousel/apartment/2.webp', '/images/services/carousel/apartment/3.webp', '/images/services/carousel/apartment/4.webp', '/images/services/carousel/apartment/5.webp'],
        sections: [
          { title: 'Layout Reconfiguration', text: 'We reconfigure apartment layouts to maximise space and light. Open-plan conversions, walk-in wardrobe additions, and utility room integrations are executed with precision engineering.' },
          { title: 'Building Management Coordination', text: 'High-rise renovations require strict adherence to building management rules. We handle NOC applications, elevator bookings, noise schedules, and material delivery logistics seamlessly.' },
          { title: 'Smart Home Integration', text: 'Every apartment renovation includes the option for full smart home integration — automated lighting, climate control, motorised blinds, and integrated security systems.' }
        ],
        benefits: [
          { title: 'Space Maximisation', description: 'Intelligent design solutions that make every square foot work harder, creating the illusion of significantly more space.' },
          { title: 'Zero Hassle', description: 'We manage all building management regulations, permits, and logistics so you never need to interact with the management office.' },
          { title: 'Premium Finish', description: 'Hospital-grade waterproofing, premium acoustic insulation, and Level 5 wall finishes as standard.' },
          { title: 'Quick Turnaround', description: 'Our streamlined apartment renovation process is designed for speed without sacrificing quality, minimising time away from your home.' }
        ],
        process: [
          { title: 'Site Survey', description: 'We survey your apartment and identify structural constraints, plumbing routes, and electrical capacity.' },
          { title: 'NOC & Permits', description: 'We obtain all necessary building management NOCs and municipality permits before any work begins.' },
          { title: 'Fit-Out Execution', description: 'Our specialist apartment teams work within strict building hours and noise guidelines.' },
          { title: 'Final Inspection', description: 'A comprehensive handover inspection ensures every element is perfect before you move back in.' }
        ],
        whyChooseUs: 'Apartment renovations in Dubai present unique challenges — restricted access, noise regulations, and building management politics. Our team has completed hundreds of apartment fit-outs across Dubai Marina, Downtown, JBR, and Business Bay. We know the rules, the logistics, and the shortcuts that save you time and money.',
        seoContent: 'Our apartment renovation services are engineered for the unique challenges of high-rise living in Dubai. Lilli Palmer is a trusted apartment renovation company delivering premium fit-outs for apartments in Dubai Marina, Downtown Dubai, JBR, Business Bay, and beyond. We navigate building management regulations, coordinate hoist and lift logistics, and manage noise-sensitive schedules — so you don\'t have to. Our apartment renovation expertise includes complete layout reconfiguration, smart home integration, premium flooring installation, and bespoke joinery designed to maximize every square foot. Whether you are renovating a studio or a penthouse, we deliver apartment renovation results that feel five-star from the moment you walk through the door.',
        cta: { heading: 'Transform Your Apartment Living', description: 'Book a site survey for your apartment. We will assess the space, handle all building management coordination, and deliver a detailed renovation plan.', buttonText: 'Book an Apartment Survey' }
      },
      {
        id: 'kitchen-renovation',
        title: 'Kitchen Renovation',
        description: 'Bespoke kitchen renovation featuring custom cabinetry, premium countertops, and intelligent spatial design.',
        image: '/images/services/kitchen_renovation.webp',
        carouselImages: ['/images/services/carousel/kitchen/1.webp', '/images/services/carousel/kitchen/2.webp', '/images/services/carousel/kitchen/3.webp', '/images/services/carousel/kitchen/4.webp', '/images/services/carousel/kitchen/5.webp'],
        sections: [
          { title: 'Custom Cabinetry & Joinery', text: 'Our master joiners craft bespoke kitchen cabinets from solid hardwoods and premium veneers. Soft-close mechanisms, integrated LED lighting, and custom drawer organisers come standard.' },
          { title: 'Countertop Selection', text: 'Choose from Calacatta marble, quartzite, Dekton, or engineered stone. We source slabs personally and template every countertop with laser precision for a seamless fit.' },
          { title: 'Appliance Integration', text: 'We design around your preferred appliance brands — Gaggenau, Miele, Sub-Zero, Wolf — ensuring each unit is perfectly integrated into the cabinetry for a sleek, built-in finish.' }
        ],
        benefits: [
          { title: 'Ergonomic Design', description: 'Kitchens designed around the golden triangle principle, optimising the relationship between sink, stove, and refrigerator.' },
          { title: 'Premium Materials', description: 'Only the finest natural stones, solid hardwoods, and designer hardware make it into our kitchen renovations.' },
          { title: 'Full MEP Handling', description: 'We manage all plumbing rerouting, electrical upgrades, and ventilation modifications required for your new layout.' },
          { title: 'Lifetime Warranty', description: 'Our bespoke joinery comes with a comprehensive warranty covering structural integrity and hardware performance.' }
        ],
        process: [
          { title: 'Design Consultation', description: 'We discuss your cooking habits, storage needs, and aesthetic preferences to design the perfect kitchen.' },
          { title: 'Material Selection', description: 'Visit our private showroom to select stones, woods, hardware, and appliances with our design consultant.' },
          { title: 'Demolition & Build', description: 'Complete strip-out and rebuild including plumbing, electrical, tiling, and cabinetry installation.' },
          { title: 'Styling & Handover', description: 'Final appliance commissioning, deep clean, and a styled handover that is ready to cook in.' }
        ],
        whyChooseUs: 'The kitchen is the heart of every home, and a poorly designed kitchen renovation is a daily frustration. Our kitchen designers have completed hundreds of luxury kitchen projects across Dubai, combining European design principles with the practical demands of Middle Eastern entertaining and family life.',
        seoContent: 'Transform the heart of your home with Lilli Palmer\'s premium kitchen renovation services in Dubai. Our kitchen renovation process begins with understanding how you use your kitchen — cooking habits, entertaining style, and storage needs — before designing a layout that is both ergonomically brilliant and aesthetically stunning. We source premium materials including Calacatta marble countertops, custom-milled solid wood cabinetry, and integrated European appliances from brands like Gaggenau, Miele, and Sub-Zero. Our kitchen renovation contractors handle complete demolition, plumbing rerouting, electrical upgrades, and precision installation. The result is a kitchen renovation that doesn\'t just look beautiful — it transforms the way you live, cook, and entertain.',
        cta: { heading: 'Design Your Dream Kitchen', description: 'Book a kitchen design consultation with our specialists. We will help you plan the perfect layout, select premium materials, and provide a detailed quote.', buttonText: 'Book a Kitchen Consultation' }
      },
      {
        id: 'bathroom-renovation',
        title: 'Bathroom Renovation',
        description: 'Spa-inspired bathroom renovation with natural stone, premium fixtures, and precision waterproofing.',
        image: '/images/services/bathroom_renovation.webp',
        carouselImages: ['/images/services/carousel/bathroom/1.webp', '/images/services/carousel/bathroom/2.webp', '/images/services/carousel/bathroom/3.webp', '/images/services/carousel/bathroom/4.webp', '/images/services/carousel/bathroom/5.webp'],
        sections: [
          { title: 'Waterproofing & Drainage', text: 'Every bathroom renovation begins with hospital-grade waterproofing — multi-layer membrane systems, precision drainage falls, and pressure-tested plumbing connections that guarantee zero leaks for decades.' },
          { title: 'Natural Stone & Tiling', text: 'We work with Italian marble, natural travertine, large-format porcelain, and artisan zellige tiles. Every tile is laser-levelled and grouted to perfection for a flawless finish.' },
          { title: 'Fixture & Fitting Selection', text: 'From freestanding marble tubs to ceiling-mounted rain showers and heated towel rails, we source fixtures from brands like Hansgrohe, Duravit, and Gessi to create a true spa experience.' }
        ],
        benefits: [
          { title: 'Zero-Leak Guarantee', description: 'Multi-layer waterproofing systems tested to international standards, preventing costly water damage.' },
          { title: 'Spa-Grade Finish', description: 'Natural stone finishes, underfloor heating, and premium fixtures that rival five-star hotel bathrooms.' },
          { title: 'Smart Technology', description: 'Sensor-activated lighting, heated toilet seats, digital shower controls, and anti-fog mirrors available.' },
          { title: 'Quick Completion', description: 'Our dedicated bathroom teams complete most renovations within 2-3 weeks, minimising disruption to your daily routine.' }
        ],
        process: [
          { title: 'Existing Strip-Out', description: 'Complete removal of existing tiles, fixtures, and waterproofing down to the structural substrate.' },
          { title: 'Waterproofing', description: 'Application of multi-layer waterproof membrane systems with 48-hour flood testing before any tiling begins.' },
          { title: 'Tiling & Fixtures', description: 'Precision tiling installation followed by fixture mounting, silicone sealing, and grout finishing.' },
          { title: 'Commissioning', description: 'All plumbing connections pressure-tested, fixtures calibrated, and a final deep clean before handover.' }
        ],
        whyChooseUs: 'A bathroom renovation gone wrong can cause catastrophic water damage to your property. Our specialist bathroom teams understand that waterproofing is not a step to rush. We invest more time in the layers you cannot see — membranes, drainage falls, and plumbing connections — because a beautiful bathroom must also be a bulletproof one.',
        seoContent: 'Lilli Palmer delivers luxury bathroom renovation services in Dubai that transform ordinary bathrooms into private spa sanctuaries. Our bathroom renovation process prioritises flawless waterproofing, precision drainage engineering, and premium material selection — including Italian marble, natural travertine, and hand-selected porcelain. We specialise in walk-in shower conversions, freestanding tub installations, underfloor heating, and smart bathroom technology including sensor-activated lighting and heated towel systems. Every bathroom renovation project is managed end-to-end by our specialist team, from initial concept through to the final sealant bead. Whether you are renovating a guest powder room or a master en-suite, our bathroom renovation delivers a space that feels like a five-star retreat.',
        cta: { heading: 'Create Your Private Sanctuary', description: 'Book a bathroom design consultation. We will assess your space, recommend premium materials, and deliver a detailed waterproofing and design plan.', buttonText: 'Book a Bathroom Consultation' }
      }
    ],
    cta: {
      heading: 'Ready to Transform Your Home?',
      description: 'Consult with our renovation experts to explore the possibilities for your villa or apartment. We provide detailed roadmaps and transparent costing.',
      buttonText: 'Start Your Home Renovation'
    }
  },
  { 
    id: 'office-renovation', 
    title: 'Office Renovation', 
    description: 'Sophisticated workplace transformations that enhance productivity and reflect corporate identity.', 
    image: '/images/services/office_renovation.webp',
    extendedContent: 'As leading office renovation contractors in Dubai, we create executive environments that blend professional utility with luxury aesthetics.',
    features: ['Commercial Fit-out', 'Spatial Productivity', 'IT Infrastructure', 'Brand Integration'],
    sections: [
      { title: 'Executive Fit-out', text: 'High-end boardroom and executive office designs featuring premium acoustics and joinery.' },
      { title: 'Workspace Optimization', text: 'Scientific space planning to improve employee flow, collaboration, and ergonomic comfort.' },
      { title: 'Infrastructure Integration', text: 'Seamless integration of advanced IT, lighting, and climate control systems.' }
    ],
    benefits: [
      { title: 'Brand Alignment', description: 'Workspaces that serve as a physical embodiment of your company\'s values and status.' },
      { title: 'Productivity Gains', description: 'Optimized lighting and acoustics proven to increase focus and employee wellbeing.' },
      { title: 'Scalable Design', description: 'Flexible layouts that allow your office to grow alongside your business.' },
      { title: 'Minimal Disruption', description: 'Strict project management ensures your office renovation is completed on time with minimal downtime.' }
    ],
    process: [
      { title: 'Workflow Audit', description: 'We analyze how your team works to design a space that facilitates movement.' },
      { title: 'Concept Design', description: 'Aesthetic mood boards that integrate your brand palette and professional requirements.' },
      { title: 'Build Phase', description: 'Precision construction executed by certified commercial fit-out specialists.' },
      { title: 'System Commissioning', description: 'Final testing of all smart systems, lighting, and acoustic performance.' }
    ],
    whyChooseUs: 'We understand that an office is a tool for business. Our office renovation services prioritize both the speed of delivery and the extreme quality of the finish, ensuring your corporate image is reinforced by your physical environment.',
    seoContent: 'Looking for professional office renovation in Dubai or high-end commercial fit-out services? Lilli Palmer is a top-tier office renovation company specializing in corporate workplace transformations. Our office renovation services are designed for companies that demand an executive finish and professional project management. From open-plan workspace optimization to high-end executive office fit-outs, we handle the complete lifecycle of your commercial renovation. As expert office renovation contractors, we understand the importance of timing and IT integration, ensuring your business operation is enhanced, not hindered, by the build process. Partner with Lilli Palmer to create an office environment that reflects your status and drives corporate success.',
    cta: {
      heading: 'Optimize Your Workspace Today',
      description: 'Schedule a workspace audit with our office renovation consultants. We will help you reimagine your office for the future of work.',
      buttonText: 'Request an Office Audit'
    }
  },
  { 
    id: 'construction', 
    title: 'Full Construction', 
    description: 'From foundation to finish, we execute architectural visions with uncompromised precision.', 
    image: '/images/services/construction.webp',
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
    whyChooseUs: 'We are builders who think like owners. We understand that a construction project is a significant financial asset, and we manage it with the rigour of an investment portfolio.',
    seoContent: 'Lilli Palmer offers full-scope construction services in Dubai for clients who demand architectural precision and structural excellence. Our construction team works in close partnership with leading architects and designers to translate visionary blueprints into built reality. From ground-up new-build construction to large-scale structural extensions, every construction project we deliver is defined by over-engineered foundations, meticulous quality control, and transparent costing. We understand that a construction project is one of the most significant investments you will make, which is why we manage every construction phase from site mobilisation through to final handover with the rigour of an asset portfolio. Choose Lilli Palmer for construction that stands the test of time.',
    cta: {
      heading: 'Ready to Build Something Extraordinary?',
      description: 'From concept to completion, our construction team manages every detail. Let\'s discuss your architectural vision and turn blueprints into reality.',
      buttonText: 'Discuss Your Construction Project'
    }
  },
  { 
    id: 'mep-contracting', 
    title: 'MEP Contracting', 
    description: 'Premier Mechanical, Electrical, and Plumbing engineering integration for luxury properties.', 
    image: '/images/services/mep_contracting.webp',
    extendedContent: 'Lilli Palmer is recognized among the elite MEP companies in Dubai, delivering flawless mechanical, electrical, plumbing integration.',
    features: ['Mechanical Systems', 'Electrical Engineering', 'Plumbing Topography', 'Full MEP Lifecycle'],
    sections: [
      { title: 'Mechanical Engineering', text: 'Advanced climate control, ventilation, and thermal dynamics orchestrated for peak efficiency.' },
      { title: 'Electrical Systems', text: 'Robust, safe, and intelligent electrical architectures that power modern smart living.' },
      { title: 'Plumbing & Drainage', text: 'Hydraulic calculations and precision fixture installations ensuring continuous flow and whisper-quiet operation.' }
    ],
    benefits: [
      { title: 'Unified Systems', description: 'Complete synchronization between mechanical, electrical, and plumbing elements prevents future conflicts.' },
      { title: 'Energy Supremacy', description: 'Our MEP contractors in Dubai engineer solutions that significantly reduce carbon footprint and operational costs.' },
      { title: 'Architectural Symbiosis', description: 'MEP systems are designed to exist invisibly, preserving the aesthetic purity of your property.' },
      { title: 'Single-Source Reliability', description: 'Consolidate responsibility with one elite firm, avoiding the friction of managing multiple different contractors.' }
    ],
    process: [
      { title: '3D Spatial Planning', description: 'We use advanced BIM (Building Information Modeling) to map all MEP routes before laying a single pipe.' },
      { title: 'Component Fabrication', description: 'Precision elements are orchestrated with industrial-grade materials for ultimate longevity.' },
      { title: 'Synchronized Execution', description: 'Our multidisciplinary teams install complex arrays simultaneously to compress build schedules.' },
      { title: 'Commissioning', description: 'Intensive stress testing ensures all mechanical, electrical, plumbing systems operate flawlessly under peak load.' }
    ],
    whyChooseUs: 'When searching for MEP companies in Dubai, property owners demand precision. Lilli Palmer bridges the gap between raw engineering and high-end residential luxury. Your building is a living organism; our MEP contracting ensures it breathes, powers, and flows with absolute perfection.',
    seoContent: 'Looking for top-tier MEP companies in Dubai? Lilli Palmer provides unparalleled Mechanical, Electrical, Plumbing (MEP) contracting solutions tailored exclusively for luxury residential and commercial developments. As leading MEP contractors in Dubai, we understand that true luxury lies in flawless functionality. Our in-house engineers manage the complete MEP lifecycle, from advanced 3D spatial planning to final commissioning. By unifying mechanical systems (HVAC), complex electrical engineering, and precision plumbing into a single, cohesive strategy, we eliminate the costly errors associated with fragmented contractors. When you demand uncompromising quality for your mechanical, electrical, plumbing infrastructure, partner with Lilli Palmer. We bring commercial-grade reliability to luxury spaces, establishing ourselves as the premier choice among MEP companies in the UAE.',
    cta: {
      heading: 'Require Elite MEP Integration for Your Project?',
      description: 'Consult with our senior MEP engineers. We provide comprehensive mechanical, electrical, and plumbing roadmaps tailored to your architectural vision.',
      buttonText: 'Schedule an MEP Consultation'
    }
  },
  { 
    id: 'annual-maintenance-contract', 
    title: 'Annual Maintenance', 
    description: 'Comprehensive maintenance contracts providing year-round peace of mind for your property.', 
    image: '/images/services/maintenance.webp',
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
    id: 'b4', 
    title: 'The Importance of HVAC Servicing in Summers', 
    date: 'Apr 21, 2026', 
    excerpt: 'Beat the heat proactively with preventative climate control maintenance. AI zoning, air quality, and reduced bills.', 
    image: '/images/blog/hvac_summer_2026.png',
    author: 'Aydan Doherty',
    category: 'Maintenance',
    sections: [
      { title: 'The Summer Strain', content: 'As temperatures peak, your HVAC system works overtime. Preventative servicing ensures that your indoor sanctuary remains uninterrupted, preventing catastrophic failure during peak load.' },
      { title: 'High-Efficiency AI Control', content: 'In 2026, modern smart thermostats do more than cool—they predict. By servicing your system now, you ensure maximum energy efficiency, leading to drastically reduced utility bills throughout the hot months.' },
      { title: 'Indoor Air Quality (IAQ)', content: 'Summer brings dust and allergens. A professional service includes changing to hospital-grade MERV 13+ filtration to protect your family\'s respiratory health.' }
    ]
  },
  { 
    id: 'b1', 
    title: 'The Art of High-End HVAC', 
    date: 'Oct 12, 2025', 
    excerpt: 'Integrating climate control seamlessly into architectural design.', 
    image: '/images/blog/blog1.webp',
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
    image: '/images/blog/blog2.webp',
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
    image: '/images/blog/blog3.webp',
    author: 'Construction Lead',
    category: 'Architecture',
    sections: [
      { title: 'The Soul of the Property', content: 'Heritage buildings carry a soul that is impossible to replicate. Our approach is to preserve that essence while modernizing the livability.' },
      { title: 'Structural Considerations', content: 'Sometimes, the bones are too far gone. We help clients navigate the difficult decision between a costly restoration and a fresh architectural start.' }
    ]
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Leila Olalia',
    stats: '10 reviews',
    time: 'a month ago',
    text: 'Very helpful, polite and professional. Thank you',
  },
  {
    id: 't2',
    name: 'Mohayer Dam',
    stats: 'Local Guide · 5 reviews',
    time: '4 months ago',
    text: 'Best maintenance and renovation company in Dubai! Everything was perfect.',
  },
  {
    id: 't3',
    name: 'Ahmed Sharif',
    stats: '1 review',
    time: '4 months ago',
    text: 'Great experience overall — organized, honest, and highly efficient team.',
  },
  {
    id: 't4',
    name: 'Faisal Saeed',
    stats: '2 reviews',
    time: '4 months ago',
    text: 'Affordable pricing with premium results. Totally satisfied!',
  },
  {
    id: 't5',
    name: 'Kazia Majewska',
    stats: '1 review',
    time: '4 months ago',
    text: 'LILLI PALMER delivered beyond my expectations. Great team and communication.',
  }
];

export const OFFICE_RENOVATION_SUB_SERVICE: import('./types').SubService = {
  id: 'office-renovation',
  title: 'Office Renovation',
  description: 'Sophisticated workplace transformations that enhance productivity and reflect corporate identity.',
  image: '/images/services/office_renovation.webp',
  carouselImages: ['/images/services/carousel/office/1.webp', '/images/services/carousel/office/2.webp', '/images/services/carousel/office/3.webp', '/images/services/carousel/office/4.webp', '/images/services/carousel/office/5.webp'],
  sections: [
    { title: 'Executive Fit-out', text: 'High-end boardroom and executive office designs featuring premium acoustics, bespoke joinery, and integrated AV systems that convey authority and sophistication.' },
    { title: 'Workspace Optimization', text: 'Scientific space planning to improve employee flow, collaboration zones, and ergonomic comfort. We design offices that boost productivity and reduce fatigue.' },
    { title: 'Infrastructure Integration', text: 'Seamless integration of advanced IT infrastructure, smart lighting scenes, climate zoning, and access control systems — all invisible to the end user.' }
  ],
  benefits: [
    { title: 'Brand Alignment', description: 'Workspaces that serve as a physical embodiment of your company\'s values and market position.' },
    { title: 'Productivity Gains', description: 'Optimized lighting, acoustics, and layout proven to increase focus and employee wellbeing.' },
    { title: 'Scalable Design', description: 'Flexible layouts with modular furniture systems that allow your office to grow alongside your business.' },
    { title: 'Minimal Disruption', description: 'Strict project management and phased construction ensures your business continues operating during renovation.' }
  ],
  process: [
    { title: 'Workflow Audit', description: 'We analyze how your team works — meetings, collaboration, focused work — to design a space around your operations.' },
    { title: 'Concept Design', description: 'Aesthetic mood boards and 3D renders that integrate your brand palette with professional requirements.' },
    { title: 'Build Phase', description: 'Precision construction executed by certified commercial fit-out specialists, often outside business hours.' },
    { title: 'System Commissioning', description: 'Final testing of all smart systems, lighting scenes, acoustic performance, and IT connectivity.' }
  ],
  whyChooseUs: 'We understand that an office is a tool for business. Our office renovation services prioritize both the speed of delivery and the extreme quality of the finish, ensuring your corporate image is reinforced by your physical environment.',
  seoContent: 'Looking for professional office renovation in Dubai or high-end commercial fit-out services? Lilli Palmer is a top-tier office renovation company specializing in corporate workplace transformations. Our office renovation services are designed for companies that demand an executive finish and professional project management. From open-plan workspace optimization to high-end executive office fit-outs, we handle the complete lifecycle of your commercial renovation. As expert office renovation contractors, we understand the importance of timing and IT integration, ensuring your business operation is enhanced, not hindered, by the build process. Partner with Lilli Palmer to create an office environment that reflects your status and drives corporate success.',
  cta: {
    heading: 'Optimize Your Workspace Today',
    description: 'Schedule a workspace audit with our office renovation consultants. We will help you reimagine your office for the future of work.',
    buttonText: 'Request an Office Audit'
  }
};
