import './login.css'
import facebookIcon from '../../assets/facebook.png'
import googleIcon from '../../assets/google.png'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container">
            <div className="cover">

                <div className="login-container">
                    <form>
                        <h1 className="title">Welcome back!</h1>
                        <h2 className="subtitle">We're so excited to see you again!</h2>

                        <p>email or phone number <span style={{color: 'red'}}>*</span></p>
                        <input type="text" />

                        <p>password <span style={{color: 'red'}}>*</span></p>
                        <input type="text" />

                        <button className="login-btn">Log In</button>
                        <h3>A fricking new user? <a href="/login"></a></h3>
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