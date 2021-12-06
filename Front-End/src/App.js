import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Layout/Header';
import Auth from './pages/Auth';
import Index from './pages/Index';
import Tax from './pages/Tax';
import './App.css';
import { useContext } from 'react';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Index />} exact></Route>
        </Routes>
        <Routes>
        {!authCtx.isLoggedIn &&<Route path="/Auth" element={<Auth />} exact></Route>}
        </Routes>
        <Routes>
        {authCtx.isLoggedIn && <Route path="/Tax" element={<Tax />} exact></Route>}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
