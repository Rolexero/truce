import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Service from "./pages/Service";
import People from "./pages/People";
import Analytics from "./pages/Analytic";
import MainAppBar from './component/MainAppBar';
import {
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



function App() {
  return (
    <div className="App">
     <MainAppBar />
      <Routes>
        <Route path="/Analytics"  element={<Analytics />}/>
        <Route path="/Services"  element={ <Service />}/>
        <Route exact path="/"  element={ <People />}/>
      </Routes>
    </div>
  );
}

export default App;
