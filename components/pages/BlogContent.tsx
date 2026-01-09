"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BLOGS } from '@/constants';
import { motion } from 'framer-motion';

const BlogContent: React.FC = () => {
  const luxuryEasing = [0.16, 1, 0.3, 1] as const;

  return (
    <div className="pt-40 pb-20 bg-[#EBEBEB]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: luxuryEasing }}
          className="mb-24 text-center"
        >
          <p className="text-h1-custom text-[#BBA899] mb-4 uppercase tracking-[0.3em]">INSIGHTS & UPDATES</p>
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-gray-800 uppercase">JOURNAL</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {BLOGS.map((blog, idx) => (
            <motion.article 
              key={blog.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: luxuryEasing }}
              className="group cursor-pointer"
            >
              <Link href={`/blog/${blog.id}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-6 shadow-md">
                  <Image 
                    src={blog.image} 
                    alt={blog.title} 
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1s] ease-luxury"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-[10px] font-bold tracking-widest text-gray-400 mb-2 uppercase">{blog.date} • {blog.category}</p>
                  <h2 className="text-2xl font-light text-gray-800 leading-snug group-hover:text-[#BBA899] transition-colors uppercase tracking-tight">{blog.title}</h2>
                  <p className="text-gray-500 font-light leading-relaxed line-clamp-2">{blog.excerpt}</p>
                  <div className="pt-4">
                    <span className="inline-block text-[11px] font-bold tracking-widest border-b border-black group-hover:text-[#BBA899] group-hover:border-[#BBA899] transition-all uppercase">
                      READ THE STORY
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
