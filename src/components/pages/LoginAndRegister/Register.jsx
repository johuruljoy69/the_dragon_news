import React, { useContext, useState } from 'react';
import { Link } from 'react-daisyui';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const [errorPassword, setErrorPassword] = useState('')
    const [success, setSuccess] = useState('');
    const[accepted, setAccepted] = useState(false)

    const { createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        setSuccess('')
        setErrorPassword('')

        if (password.length < 8) {
            setErrorPassword('Please input min 8 character')
            return;
        }
        else if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setErrorPassword('Please provide two capital letter')
            return;
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            setErrorPassword('Please provide one special Character')
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('Create Account Successfully')
                form.reset();
                
            })
            .catch(error => {
                console.log(error.message)
                setSuccess('')
            })
    }

const handleAccepted = (event) =>{
    setAccepted(event.target.checked)
}


    return (
        <div className='container mx-auto'>
            <div className="hero min-h-screen">
                <div className="hero-content border p-24 flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-5">Register your account now!</h1>
                    </div>
                    <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Enter your name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Enter your photo url" name='photo' className="input input-bordered" />
                            </div>
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
                            <p className='text-red-500'><small>{errorPassword}</small></p>
                            <div className="form-control">
                                <label className="label">
                                    <input onClick={handleAccepted} type='checkbox' />
                                    <p className="label-text ps-2">Accept <span className='text-blue-500'>Term & Conditions</span> </p>

                                </label>

                            </div>
                            <p className='text-green-500'><small>{success}</small></p>
                            <div className="form-control mt-6">
                                <button disabled={!accepted} className="btn btn-primary">Register</button>
                            </div>
                            <p><small>Already Have an Account? <Link className='text-purple-600' to='/login'>Please Login</Link></small></p>                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;