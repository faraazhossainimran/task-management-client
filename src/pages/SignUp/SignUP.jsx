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
      const onSubmit = (data) => (
        console.log(data),
        createUser(data.email, data.password).then(
            updateUserProfile(data.name, data.userphoto).then(
                navigate("/dashboard")
            )
        )
      )
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
                {...register("name")}
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
                {...register("userPhoto")}
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
