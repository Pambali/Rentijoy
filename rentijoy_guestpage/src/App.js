import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/login';
import MoviesByGenre,{SingleMovie} from './components/movieRender/MovieRender';
import Forgotpassword from './components/pages/Forgot_password';
import Userinfo from './components/pages/Userinfo';
import Delete from './components/pages/delete';

function App() {
  return (
    <div id="totalContainer" key="totalContainerKey">
      <Router>

        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/login' element={<Login/>}/>
          <Route  path="/movies/:genre" exact element={<MoviesByGenre/>}/>
          <Route  path="/movies/movie/:movie" element={<SingleMovie/>}/>
          <Route path="/userinfo" element={<Userinfo/>} />
          <Route path="/forgot_password" element={<Forgotpassword/>}/>
          <Route path="/delete" element={<Delete/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
