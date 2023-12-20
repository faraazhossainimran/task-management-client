import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const {user, signIn} = useAuth()
    const {
        register,
        handleSubmit,
        reset
      } = useForm()
      const onSubmit = (data) => (
        signIn(data.email, data.password).then(res=> {
            console.log(res.user);
        })
      )
  return (
    <div>
      <div className="hero bg-base-200 py-32">
        <div className="hero-content">
          <div className="card shrink-0 w-full shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
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
                <input type="submit" value="Log in" className="btn btn-primary"></input>
              </div>
            </form>
            <p>Don't have any account? <Link to={"/signup"}>SignUp</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
