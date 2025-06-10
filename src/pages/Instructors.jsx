import React from "react";
import logo from "../assets/instructor.png";
import Header from "../components/Header";

const Instructors = () => {
  return (
    <div>
      <Header />
      <section className="bg-blue-500 min-h-screen flex items-center">
        <div className="w-full flex justify-start p-6 min-h-screen items-center pl-10">
          <img src={logo} alt="logo" className="rounded-xl w-[100%] h-auto" />
        </div>
        <div className=" mx-w-7xl w-full mx-auto px-6 flex flex-col md:flex row items-center justify-between gap-12 pr-10">
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-black text-4xl font-bold font-serif">
              {" "}
              Learn from the
              <br />
              <span className="text-white">Best</span> <br /> Educators
            </h3>
            <p className="text-black font-serif text-2xl font-normal ">
              Our dedicated team of instructors brings a wealth of experience
              and expertise to the classroom, ensuring every student receives
              personalized attention and guidance. They are committed to
              fostering a dynamic learning environment where curiosity thrives
              and academic goals are achieved. Discover how our passionate
              educators can transform your educational journey.
            </p>
            <button className="bg-blue-600 text-black font-serif font-bold px-4 py-2 border border-white rounded-xl hover:bg-blue-800 hover:text-white transition">
              GET AN INSTRUCTOR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instructors;
