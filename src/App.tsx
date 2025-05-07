
import Login from './components/Login';
import HeaderNavigation from './components/HeaderNavigation';
import Movies from './components/Movies';
import FavoritesPage from './components/FavoritesPage';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

export default function App() {
  return (

    <div className='App'>
    <h1>Movie website</h1>
    <Movies></Movies>
    <FavoritesPage></FavoritesPage>
    </div>
  );
}

