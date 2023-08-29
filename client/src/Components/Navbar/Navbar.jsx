import "./navbar.css"

export const Navbar = ()=>{
    return(
        <nav>
            <div>
                <a href="/">Store-App</a>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
            <div>
                <img src="https://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png" alt="" />
                <p className="username">Username</p>
                <button>Log out</button>
            </div>            
        </nav>
    )
}