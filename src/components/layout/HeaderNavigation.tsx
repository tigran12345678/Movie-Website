import { NavLink } from "react-router"

function Layout({children}) {

    return (
    <>
        <nav>
        <NavLink to ="/" end>
        &nbsp;Login&nbsp;
        </NavLink>

        <NavLink to ="/MainPage" end>
        &nbsp;Main Page&nbsp;
        </NavLink>

        

        <NavLink to ="/favoriteMovies" end>
        &nbsp;FavoriteMovies&nbsp;
        </NavLink>

        </nav>
        {children}
    </>
    );
    

}


export default Layout