

export const Sigin = () =>{
    return(
        <div className="login-container signin--container">
            <h2>Bienvenu sur Store-App</h2>
            <form action="">
                <h3>Sign in</h3>
                <div className="email-wrapper">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="Enter your Email"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" 
                    placeholder="Enter your Password"/>
                </div>
                <div>
                    <label htmlFor="conf-password">Confirm assword</label>
                    <input type="password" id="conf-password" 
                    placeholder="Enter again your Password"/>
                </div>
                <span>
                    Already have an acount yet?
                    <a href="" className="link">Log in</a>
                </span>
                    
                <button type="submit">Sign in</button>
            </form>
        </div>
    )
}