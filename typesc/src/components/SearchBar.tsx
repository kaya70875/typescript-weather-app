import React, { useState } from 'react';
import './SearchBar.css';
import searchImg from '../img/search.png';

type SearchBarProps = {
    setValue : (value : string) => void;
}

export default function SearchBar({setValue} : SearchBarProps) {
  const [inputValue , setInputValue] = useState('');

  const handleKeyDown = (e : React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter'){
      setValue(inputValue);
    }
  }
    
  return (
    <div className="input-container">
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown} />
        <img src={searchImg} id="btnSearch" />
    </div>
  )
}
