import './signup.css'
import facebookIcon from '../../assets/facebook.png'
import googleIcon from '../../assets/google.png'

const Signup = () => {
    return (
        <div className="container">
            <div className="cover">

                <form>
                    <h1 className="title">Create an account</h1>

                    <p>email <span style={{color: 'red'}}>*</span></p>
                    <input type="text" />

                    <p>display name <span style={{color: 'red'}}>*</span></p>
                    <input type="text" />

                    <p>username <span style={{color: 'red'}}>*</span></p>
                    <input type="text" />

                    <p>password <span style={{color: 'red'}}>*</span></p>
                    <input type="text" />

                    <div className="other-login">
                        <div className="google">
                            <img src={googleIcon} alt="" />
                            <h4>Google</h4>
                        </div>

                        <div className="facebook">
                            <img src={facebookIcon} alt="" />
                            <h4>Facebook</h4>
                        </div>
                    </div>

                    <button className='register-btn'>Continue</button>
                    <h3>Already have an acc? <a href="/signup">Login</a></h3>
                </form>

            </div>
        </div>
    )
}

export default Signup;