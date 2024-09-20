

import './App.css';
import { useRoutes } from 'react-router-dom'; 

import { Routes } from "./routes/routeIndex";
require("@ravenpay/raven-bank-ui/dist/esm/styles/index.css");

function App() {
  return (
   useRoutes(Routes)
    
  );
}

export default App;