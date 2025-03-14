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
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
