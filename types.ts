
export interface ServiceDetailSection {
  title: string;
  text: string;
}

export interface ServiceDetailItem {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  extendedContent: string;
  features: string[];
  sections: ServiceDetailSection[];
  benefits?: ServiceDetailItem[];
  process?: ServiceDetailItem[];
  whyChooseUs?: string;
}

export interface BlogPostSection {
  title?: string;
  content: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  author: string;
  category: string;
  sections: BlogPostSection[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}
