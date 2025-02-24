"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const feedbacks = [
  "Great service! Highly recommended.",
  "Ligia is an amazing professional.",
  "Excellent work and communication.",
];

export default function UserFeedback() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextFeedback = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }
  };

  const prevFeedback = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [isAnimating]);

  return (
    <section className="py-20 md:py-40 bg-gradient-to-b from-[#D1E2EF] to-white relative">
      <div className="container mx-auto mt-20 md:mt-40 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          User Feedback
        </h2>
        <div className="flex items-center justify-center">
          <button
            onClick={prevFeedback}
            className="p-2 md:p-4 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Previous feedback"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="w-full md:w-2/3 text-center overflow-hidden h-24 relative">
            <p
              className={`text-lg md:text-xl italic absolute w-full transition-opacity duration-500 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
              aria-live="polite"
            >
              &quot;{feedbacks[currentIndex]}&quot;
            </p>
          </div>
          <button
            onClick={nextFeedback}
            className="p-2 md:p-4 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Next feedback"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
