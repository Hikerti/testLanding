import '../styles/App.scss'
import {Routes, Route} from "react-router-dom";
import Layout from "./MainComponets/Layout.tsx";
import Home from "./Pages/Home.tsx";
import * as React from "react";

function NotFound() {
  return null;
}

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} />
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
