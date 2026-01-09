"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BLOGS } from '@/constants';
import { BlogPost } from '@/types';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

interface BlogDetailContentProps {
  blog: BlogPost;
}

const BlogDetailContent: React.FC<BlogDetailContentProps> = ({ blog }) => {
  const luxuryEasing = [0.16, 1, 0.3, 1] as const;
  const recentPosts = BLOGS.filter(b => b.id !== blog.id).slice(0, 2);

  return (
    <div className="pt-32 pb-20 bg-[#EBEBEB]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: luxuryEasing }}
        >
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 hover:text-[#BBA899] transition-colors mb-12 uppercase">
            <ArrowLeft size={16} /> Back to Journal
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-6 mb-8 text-[10px] font-bold tracking-widest text-gray-500 uppercase">
              <span className="flex items-center gap-2"><Calendar size={12} className="text-[#BBA899]" /> {blog.date}</span>
              <span className="flex items-center gap-2"><User size={12} className="text-[#BBA899]" /> BY {blog.author}</span>
              <span className="flex items-center gap-2"><Tag size={12} className="text-[#BBA899]" /> {blog.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-light tracking-tighter text-gray-800 leading-[1.1] mb-12 uppercase">
              {blog.title}
            </h1>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: luxuryEasing }}
          className="relative h-[400px] md:h-[700px] mb-20 overflow-hidden rounded-sm"
        >
          <Image src={blog.image} alt={blog.title} fill className="object-cover" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 lg:col-start-3 space-y-12">
            <div className="text-2xl font-light text-gray-700 leading-relaxed italic border-l-4 border-[#BBA899] pl-8">
              {blog.excerpt}
            </div>
            
            {blog.sections.map((section, idx) => (
              <div key={idx} className="space-y-6">
                {section.title && <h2 className="text-2xl font-bold tracking-widest text-gray-800 uppercase">{section.title}</h2>}
                <p className="text-xl text-gray-500 font-light leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}

            <div className="pt-20 border-t border-gray-300">
              <h3 className="text-h1-custom text-black mb-12 uppercase tracking-[0.3em]">Continue Reading</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {recentPosts.map(post => (
                  <Link key={post.id} href={`/blog/${post.id}`} className="group block">
                    <div className="relative aspect-[16/9] overflow-hidden mb-6 rounded-sm">
                      <Image src={post.image} alt={post.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <p className="text-[10px] tracking-widest text-gray-400 mb-2 uppercase">{post.date}</p>
                    <h4 className="text-xl font-medium text-gray-800 group-hover:text-[#BBA899] transition-colors">{post.title}</h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailContent;
