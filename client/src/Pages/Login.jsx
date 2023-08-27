

export const Login = () =>{
    return(
        <div className="login-container">
            <h2>Bienvenu sur Store-App</h2>
            <form action="">
                <h3>Login in your account</h3>
                <div className="email-wrapper">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="Enter your Email"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" 
                    placeholder="Enter your Password"/>
                </div>
                <span>
                    Don't have an acount yet?
                    <a href="" className="link">Register</a>
                </span>
                    
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}