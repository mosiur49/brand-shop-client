import React, { useContext } from 'react';
import img from '../../assets/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/AuthProvider';

const SignUp = () => {
    const {createUser} =useContext(AuthContext)


    const handleSignUp =event =>{
        event.preventDefault()
        const form =event.target;
        const name=form.name.value
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password,name)

        createUser(email,password)
        .then(result =>{
            const logged=result.user;
            console.log(logged)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="mr-10 w-1/2">
      
      <img src={img} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
      <h1 className="text-5xl font-bold">Sign up</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name='name' placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Login</button>
          
        </div>
        <div className='space-y-5'>
        <p>or sign up with</p>
        <button  className="btn btn-active btn-accent btn-sm  btn-primary">signIn google</button>
        <p className='mb-4 ml-8'>Already  acount?
      <Link to="/login" className="label-text-alt link link-hover text-orange-600 text-xl">
        Sign up
      </Link></p>
      </div>
      </form>
      
    </div>
  </div>
</div>
    );
};

export default SignUp;