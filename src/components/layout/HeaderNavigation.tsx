import { NavLink } from "react-router"

function Layout({children}) {

    return (
    <div className="Head">
        <nav className="Navigation">
        <button className="login">
        
        <NavLink to ="/" end>
        &nbsp;Login&nbsp;
        </NavLink>
    
        </button>

        <button>
        <NavLink to ="/MainPage" end>
        &nbsp;Main Page&nbsp;
        </NavLink>
        </button> 
        
        <button>
        <NavLink to ="/favoriteMovies" end>
        &nbsp;FavoriteMovies&nbsp;
        </NavLink>
        </button>
        </nav>
        {children}
    </div>
    );
    

}


export default Layout