import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase/firebase.config';

const GoogleSignIn = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUSer = result.user
                setUser(loggedInUSer)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(() => {

                setUser(null)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            {
                user ? <button onClick={handleGoogleSignOut}>Sign Out</button> :
                    <button onClick={handleGoogleSignIn}>Sign Up</button>
            }
            {
                user &&
                <div>
                    <h2>UserName: {user.displayName}</h2>
                </div>
            }
        </div>
    );
};

export default GoogleSignIn;