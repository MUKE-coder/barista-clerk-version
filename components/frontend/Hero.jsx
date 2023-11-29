import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="section-hero top-fix" id="about">
      <div className="max-w-[700px]">
        <h2 className="text-2xl md:text-5xl text-white py-4 md:py-10 ">
          Discover the Art of Specialty Coffee with Barista Gurus
        </h2>
        <p className="text-white py-2 md:py-4 text-sm sm:text-xl">
          Embrace your love for specialty coffee at Barista Gurus. We offer
          online courses, resources, and workshops, guiding coffee enthusiasts,
          from shop owners to baristas, through a journey that spans history,
          roasting, brewing, and industry trends. Start your coffee adventure
          with us today! ☕️
        </p>
        <div className="buttons">
          <div className="cta-links">
            <Link className="book-call" href="/categories">
              Book Video Call
            </Link>
            <Link className="courses" href="/categories">
              View Our Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
