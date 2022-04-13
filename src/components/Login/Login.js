import React from 'react';
import useFirebase from '../hooks/useFirebase';


const Login = () => {
  const {singInWighGoogle}=useFirebase()
    return (
        <div> 
            <h1>Pless Login</h1>
            <button onClick={singInWighGoogle}>Google Sign In</button><br /><br />
           <input type="email" name="" id="" /><br />
           <input type="password" name="" id="" /><br />
           <input type="submit" value="Login" />
        </div>
    );
};

export default Login;