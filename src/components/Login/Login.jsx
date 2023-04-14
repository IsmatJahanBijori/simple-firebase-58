import React, { useState } from 'react';

import app from '../../firebase/firebase.config';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, GithubAuthProvider } from 'firebase/auth'

const Login = () => {

    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    // console.log(app)
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setUser(loggedUser)
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    const githubProvider = new GithubAuthProvider()
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setUser(loggedUser)
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    const handleGoogleSignOut = () => {
        signOut(auth).then((result) => {
            setUser(null)

        }).catch((error) => {
            console.log(error.message)
        });
    }
    return (
        <div>
            {
                user ? <button onClick={handleGoogleSignOut}>Google Sign Out</button> :
                    <React.Fragment>
                        <button onClick={handleGoogleSignIn}>Google Sign Up</button>
                        <button onClick={handleGithubSignIn}>Github Sign Up</button></React.Fragment>
            }



            {user && <div>
                <h3>User: {user.displayName}</h3>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;