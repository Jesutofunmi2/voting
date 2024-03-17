import Layout from './layouts/appLayout';
import './App.scss';
import "./assets/styles/index.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./appPage/Home";
import About from "./appPage/About";

const  App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
        </Routes>
      </Layout>
    </Router>

  );
}

export default App;
