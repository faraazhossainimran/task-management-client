import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Banner = () => {
  const {user} = useAuth()
  return (
    <div>
      <div
        className="hero md:h-[650px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/rF1hR7q/kelly-sikkema-LM17x-Cof-KA0-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">Task Manager</h1>
            <p className="mb-5">
            Empower Productivity, Master Efficiency: Your Tasks, Our Priority.
            </p>
            {user? <button className="btn btn-primary"><Link to={"/dashboard"}>Let's Explore</Link></button> : <button className="btn btn-primary"><Link to={"/login"}>Let's Explore</Link></button>}
            {/* <button className="btn btn-primary"><Link to={"/login"}>Let's Explore</Link></button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
