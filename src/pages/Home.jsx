import React from "react";
import logo from "../assets/child reading.png";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="bg-blue-500 min-h-screen flex items-center">
        <div className=" mx-w-7xl w-full mx-auto px-6 flex flex-col md:flex row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-black text-4xl font-bold font-serif">
              {" "}
              Learning
              <br />
              <span className="text-white">Management</span> <br /> System
            </h3>
            <p className="text-black font-serif text-2xl font-normal ">
              The most customizable yet affordable LMS solution in the market
              making education accessible for all
            </p>
            <Link to={"/login"}>
              <button className="bg-blue-600 text-black font-serif font-bold px-4 py-2 border border-white rounded-xl hover:bg-blue-800 hover:text-white transition">
                GET STARTED
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-end p-6 min-h-screen items-center">
          <img src={logo} alt="logo" className="rounded-xl w-[80%] h-auto" />
        </div>
      </section>
    </div>
  );
};

export default Home;
