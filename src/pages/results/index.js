import React from 'react';
import Header from "../../components/Header";
import {Route, Routes} from "react-router-dom";
import All from "./All";
import Images from "./Images";
import News from "./News";

const Results = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<All/>}/>
        <Route path='/images' element={<Images/>}/>
        <Route path='/news' element={<News/>}/>
      </Routes>
    </>
  );
}

export default Results;