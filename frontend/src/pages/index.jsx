import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./list";
import Edit from "./edit/edit";
import Create from "./create";

export const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List/>} />
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </BrowserRouter>
  );
};
