import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "../components/Layout/Footer";

const reviews = Array.from({ length: 53 }, (_, i) => ({
  id: i + 1,
  src: `../../assets/reviews/review-${i + 1}.jpg`, // Update with your actual image paths
  alt: `Review Image ${i + 1}`,
}));



const ReviewsPage = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="py-8 bg-transparent text-white text-center">
      <h1 className="text-3xl font-bold">Customer Reviews</h1>
      <p className="mt-2 text-lg">See what our customers have to say!</p>
      <button
        onClick={() => router.back()}
        className="mt-4 px-6 py-3 bg-white text-black-500 font-semibold text-lg rounded-lg shadow-md hover:bg-gray-100 transition-all"
      >
        Go Back
      </button>
    </header>
      <main className="py-8 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="relative overflow-hidden rounded-lg shadow-lg group hover:scale-105 transform transition-all"
            >
              <Image
                src={review.src}
                alt={review.alt}
                layout="responsive"
                width={400}
                height={400}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                <p className="text-white text-sm font-semibold">Review {review.id}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
    
  );
};

export default ReviewsPage;
