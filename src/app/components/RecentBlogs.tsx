"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Blog 1",
    description: "Description 1",
    image: "/HeroImage.png",
  },
  {
    id: 2,
    title: "Blog 2",
    description: "Description 2",
    image: "/img1.jpg",
  },
  {
    id: 3,
    title: "Blog 3",
    description: "Description 3",
    image: "/img2.jpg",
  },
  {
    id: 4,
    title: "Blog 4",
    description: "Description 4",
    image: "/img3.jpg",
  },
  {
    id: 5,
    title: "Blog 5",
    description: "Description 5",
    image: "/img1.jpg",
  },
];

export default function RecentBlogs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextBlog = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
    }
  };

  const prevBlog = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [isAnimating]); //Fixed unnecessary dependency

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Recent Blogs
        </h2>
        <p className="text-center mb-10">Check out our latest blog posts</p>
        <div className="flex items-center justify-center mb-4">
          <button
            onClick={prevBlog}
            className="p-2 md:p-4 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Previous blog"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="w-full max-w-3xl overflow-hidden">
            <div
              className={`flex justify-center transition-opacity duration-500 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="w-full sm:w-[300px] md:w-[338px] h-[413px] bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                  src={blogs[currentIndex].image || "/HeroImage.png"}
                  alt={blogs[currentIndex].title}
                  width={338}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {blogs[currentIndex].title}
                  </h3>
                  <p>{blogs[currentIndex].description}</p>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={nextBlog}
            className="p-2 md:p-4 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Next blog"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
