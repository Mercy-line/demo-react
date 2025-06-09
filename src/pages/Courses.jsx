import React from "react";
import logo from "../assets/courses.webp";
import Header from "../components/Header";

const Courses = () => {
  return (
    <div>
      <Header />
      <section className="bg-blue-500 min-h-screen flex items-center">
        <div className=" mx-w-7xl w-full mx-auto px-6 flex flex-col md:flex row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
             <h3 className="text-black text-4xl font-bold font-serif">
              {" "}
              Manage
              <br />
              <span className="text-white">Courses</span> <br /> with
              ease in LMS
            </h3>
            <p className="text-black font-serif text-2xl font-normal ">
              Easily create, organize, and manage all your school’s courses in
              one place. Assign teachers, set schedules, upload materials, and
              monitor student progress—everything you need to deliver a smooth
              and effective learning experience.
            </p>
            <button className="bg-blue-600 text-black font-serif font-bold px-4 py-2 border border-white rounded-xl hover:bg-blue-800 hover:text-white transition">
              GET STARTED
            </button>
          </div>
        </div>
        <div className="w-full flex justify-end p-6 min-h-screen items-center">
          <img src={logo} alt="logo" className="rounded-xl w-[80%] h-auto" />
        </div>
      </section>
    </div>
  );
};

export default Courses;
