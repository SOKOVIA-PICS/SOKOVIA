import './login.css'
import facebookIcon from '../../assets/facebook.png'
import googleIcon from '../../assets/google.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();

    const login = async (e) => {
        e.preventDefault();
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            alert(res.user.email);
        } catch (error) {
            console.log(error.msg);
        }
    }

    return (
        <div className="container">
            <div className="cover">

                <div className="login-container">
                    <form onSubmit={(e) => login(e)}>
                        <h1 className="title">Welcome back!</h1>
                        <h2 className="subtitle">We're so excited to see you again!</h2>

                        <p>email or phone number <span style={{color: 'red'}}>*</span></p>
                        <input type="email" onChange={(text) => setEmail(text)}/>

                        <p>password <span style={{color: 'red'}}>*</span></p>
                        <input type="password" onChange={(text) => setPassword(text)}/>

                        <button className="login-btn">Log In</button>
                        <h3>A fricking new user? <Link to={'/signup'}>Register</Link></h3>
                    </form>
                    <div className="other-login">
                        <div className="google">
                            <img src={googleIcon} alt="" />
                        </div>

                        <div className="facebook">
                            <img src={facebookIcon} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login;