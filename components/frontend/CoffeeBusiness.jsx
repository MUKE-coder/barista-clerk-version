import Link from "next/link";
import React from "react";

export default function CoffeeBusiness() {
  return (
    <section className="coffee-business">
      <div className="max-w-[700px]">
        <h2 className="text-2xl md:text-5xl text-white py-4 md:py-10 ">
          Unleash Your Inner Barista: Discover the Wholesome World of Coffee
          Craftsmanship
        </h2>
        <p className="text-white py-2 md:py-4 text-sm sm:text-xl">
          Studying a coffee barista course offers more than just a skill – it's
          an exploration of taste, culture, and precision. Elevate your coffee
          prowess, master the art of brewing, and unlock exciting opportunities
          in an industry fueled by passion and creativity.
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
}
