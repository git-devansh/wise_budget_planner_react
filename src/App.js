import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calculate from "./pages/Calculate";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {/* <Route index element={} /> */}
        {/* // TODO */}
        {/* <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      </Route>
      <Route path="/calculate" element={<Calculate />} />
    </Routes>
  );
};

export default App;
