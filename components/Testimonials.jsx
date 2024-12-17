"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const AnimatedTestimonialsDemo = () => {
  const testimonials = [
    {
      quote:
        "The kurta was tailored to perfection. The fabric, fit, and finish made me feel confident and comfortable at every occasion I wore it.",
      name: "Ravi Sharma",
      designation: "Custom-Fit Kurta",
      src: "/Assets/testimonials/testimonial-1.jpg",
    },
    {
      quote:
        "This suit is the best I’ve ever had. The fit is perfect, and the attention to detail is unmatched. I always feel at my best when I wear it.",
      name: "Karan Patel",
      designation: "Bespoke Suit",
      src: "/Assets/testimonials/testimonial-2.jpg",
    },
    {
      quote:
        "The sherwani was a game-changer. It fit like a dream and made my special event even more memorable. True craftsmanship at its finest.",
      name: "Arjun Iyer",
      designation: "Custom-Tailored Sherwani",
      src: "/Assets/testimonials/testimonial-3.jpg",
    },
    {
      quote:
        "Finally, a blazer that fits perfectly and makes me feel sharp. The quality of the tailoring is exceptional, and it suits every occasion",
      name: "Rajesh Kumar",
      designation: "Tailored Blazer",
      src: "/Assets/testimonials/testimonial-4.jpg",
    },
    {
      quote:
        "The shirt and pants I had tailored for my business meetings are the most comfortable and professional I’ve ever worn.",
      name: "Sanjay Verma",
      designation: "Custom-Designed Shirt and Pants",
      src: "/Assets/testimonials/testimonial-5.jpg",
    },
  ];
  return (
    <>
      <div className="bg-white pt-5 pb-28">
        <div className="section-container flex flex-col items-center justify-center pt-20 pb-10 px-8">
          <div className="section-header">
            <h1 className="text-black text-5xl text-center">
              What Our Clients Say
            </h1>
          </div>
          <div className="service-tagline mt-6 flex justify-center">
            <p className="text-black text-l text-center w-full sm:w-1/2">
              Discover the experiences of our satisfied clients, who trust us to
              deliver perfectly tailored pieces that elevate their style and
              confidence.
            </p>
          </div>
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </div>
    </>
  );
};

export default AnimatedTestimonialsDemo;
