
import Login from './components/Login';
import Layout from './components/layout/HeaderNavigation';
import Movies from './components/mainPage/Movies';
import FavoritesPage from './components/favoritesPage/FavoritesPage';
import './App.css';
import {  createBrowserRouter, RouterProvider, NavLink} from 'react-router';




const LoginPage  = () => {
      return(
          <Login />
      );
}


const MainPage = () => {
    return (
      <Movies />
    )
}

const FavoriteMovies = () =>{
    return (
      <FavoritesPage />
    )
}

const router = createBrowserRouter ([

      {
        path:"/", 
        element: <Layout><LoginPage /></Layout>
      },
      {
        path: "/mainPage", 
        element: <Layout> <MainPage /></Layout> 
      },
      {  path: "/favoriteMovies", 
        element: <Layout><FavoriteMovies /></Layout> 
      }

]);


 function App() {
  return (
  
    <div>
        
        <RouterProvider router = {router} />
    
    </div>
  
  );
}


export default App
