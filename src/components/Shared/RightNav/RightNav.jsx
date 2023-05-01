import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../../QZone/QZone';
import bg from '../../../assets/bg.png'
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';

const RightNav = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn =() =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.error(error.message);
        })
    }

    const handleGitHubSignIn =() =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.error(error.message);
        })
    }

    return (
        <div className='grid justify-center '>
            <div className=' ps-3 '>
                <h2 className='text-2xl font-semibold mb-3'>Login With</h2>
                <div className='grid grid-cols-1'>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline mb-3"><FaGoogle /><span className='ps-2'>Login with Google</span> </button>
                    <button onClick={handleGitHubSignIn} className="btn btn-outline btn-primary mb-3"><FaGithub /><span className='ps-2'>Login with GitHub</span> </button>
                </div>
            </div>
            <div className=' mt-2 ps-3 '>
                <h2 className='text-xl font-semibold mb-3'>Find Us On</h2>
                <div className="btn-group btn-group-vertical">
                    <button className="btn text-black bg-gray-50 px-12"><FaFacebook /><span className='ps-5'>Facebook</span></button>
                    <button className="btn text-black bg-gray-50 px-12"><FaTwitter /><span className='ps-5'>Twitter</span></button>
                    <button className="btn text-black bg-gray-50 px-12"><FaInstagram /><span className='ps-5'>Instagram</span></button>
                </div>
            </div>
            <QZone></QZone>
            <div className='mt-3'>
                <img src={bg} alt=""  />
            </div>
        </div>
    );
};

export default RightNav;