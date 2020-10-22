import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import { auth } from './firebase'
function Login() {


    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth =>{
                history.push('/')
            })


            .catch(error => alert(error.message))
        //fancy firebase stuff
    }


    const register = e => {
        e.preventDefault();

        auth
        
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            
            console.log(auth)
            if(auth) {
                history.push('/')
            }
        })

        .catch(error => alert(error.messages))
        //fancy firebase stuff
    }


    return (
        


    <div className='login'>
        <Link to='/'>
            <img className='login__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />

        </Link>

        <div className='login__container'>
            <h1>Sign-in</h1>
            <form >
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <button className='login__signInButton' type='submit' onClick={signIn} >
                    Sign In
                </button>

                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button className='login__registerButton' type='submit' onClick={register} >Create your Account</button>
            </form>
        </div>
    </div>
    


        
    )
}


export default Login
