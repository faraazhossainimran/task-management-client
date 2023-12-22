import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mb-12">
      <div
        className="hero py-24"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/nRYL1V6/wes-hicks-6bi-N3u-Bw4-Fg-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About Us</h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="py-6">
          <div className="hero">
            <div className="hero-content flex-col gap-32 lg:flex-row-reverse">
              <img
                src="https://i.ibb.co/tMBWLB1/scott-graham-5f-Nm-Wej4t-AA-unsplash.jpg"
                className="w-[500px] rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">Move faster as a team</h1>
                <p className="py-6">
                  The only project management platform for hybrid work, shaped
                  by users.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6">
          <div className="hero">
            <div className="hero-content flex-col gap-32 lg:flex-row">
              <img
                src="https://i.ibb.co/Np0sq25/simon-launay-Ht-QPK4h-Vp-I-unsplash.jpg"
                className="w-[500px] rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">
                  Multi-step projects made easy
                </h1>
                <p className="py-6">
                  Simple workflows for complex approvals. Powerful proofing and
                  annotation tools. Use project and action templates for
                  repeatable steps to cut down your work in half.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-gradient-to-r from-yellow-300 to-pink-500 h-56 flex flex-col items-center justify-center">
          <h2 className="text-white text-3xl">
            Simplify task management and prioritize work
          </h2>
          <div className="mt-4 mb-12">
            <button className="text-white bg-indigo-500 py-2 px-4 rounded">
             <Link to={"/signup"}>SignUp</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
