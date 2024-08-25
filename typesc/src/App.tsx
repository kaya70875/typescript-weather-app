import { useState } from 'react';
import './App.css'
import SearchBar from './components/SearchBar';
import Location from './components/Location';
import Content from './components/Content';
import Footer from './components/Footer';
import useFetch from './hooks/useFetch';

function App() {
  const [value , setValue] = useState('London');
  const { data } = useFetch(value);

  return (
    <div className="container">
      <SearchBar setValue={setValue} />
      <Location data={data} />
      <Content data={data} />
      <Footer data={data}/>
    </div>
)}

export default App
