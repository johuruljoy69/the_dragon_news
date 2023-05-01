import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const [success, setSuccess] = useState('')
    const navigate = useNavigate();
    const location = useLocation()
    console.log('login page location', location);
    const from = location.state?.from?.pathname || '/category/0'


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setSuccess('')

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('User Login successfully')
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error.message)
            })
    }

    return (
        <div className='container mx-auto'>
            <div className="hero min-h-screen">
                <div className="hero-content border p-24 flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-5">Login your account now!</h1>
                    </div>
                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Enter your email address" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Enter your password" name='password' className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <input type='checkbox' />
                                    <p className="label-text ps-2">Remember Me </p>

                                </label>

                            </div>
                            <p className='text-green-500'><small>{success}</small></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p><small>Don't have an Account? <Link className='text-purple-600' to='/register'>Please Register</Link></small></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;