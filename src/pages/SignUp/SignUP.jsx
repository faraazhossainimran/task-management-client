import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

const SignUP = () => {
    const {user, createUser, updateUserProfile} = useAuth()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset
      } = useForm()
      const onSubmit = (data) => {
        console.log("email:", data.email, "displayName", data.displayName, "photoURL", data.photoURL);
      
        createUser(data?.email, data?.password)
          .then(() => updateUserProfile(data?.displayName, data?.photoURL))
          .then(() => navigate("/dashboard"))
          .catch((error) => {
            // Handle any errors that occurred during user creation or profile update
            console.error("Error:", error);
          });
      };
  return (
    <div>
      <div className="hero bg-base-200 py-32">
        <div className="hero-content">
          <div className="card shrink-0 w-full shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                {...register("displayName")}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                {...register("photoURL")}
                  type="text"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                {...register("email")}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                {...register("password")}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Sing Up" className="btn btn-primary"></input>
              </div>
            </form>
            <p>
              Already have an account?<Link to={"/login"}>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
