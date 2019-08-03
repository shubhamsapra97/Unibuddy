import React from 'react';
import { render } from 'react-dom';
import BlogList from './Components/BlogList';
import "./index.css";
import data from "./data.json";

const App = () => (
  <div className="container">
    <BlogList data={data}/>
  </div>
);

render(<App />, document.getElementById('root'));
