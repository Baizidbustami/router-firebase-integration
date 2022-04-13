import { useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInAnonymously, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth();

const useFirebase = () => {
    const [user,setUser]=useState({});
    const googleprovider = new GoogleAuthProvider();
    const singInWighGoogle=()=>{
        
        signInWithPopup(auth, googleprovider)
  .then((result) => {
    
    const user = result.user;
    setUser(user)
    console.log(user)
  }).catch((error) => {
    console.log('error',error)
  });

    }

    // signOut

    const hendelSignOut = () =>{
        signOut(auth)
        .then(() => {
           setUser('')
          }).catch((error) => {
            setUser('')
          });
    }

    // onAuthStatechanged

    useEffect ( ()=>{
        onAuthStateChanged(auth,user =>{
            setUser(user);
        })
    },[])



    return {user,
        singInWighGoogle,
        hendelSignOut
    };
}

export default useFirebase;