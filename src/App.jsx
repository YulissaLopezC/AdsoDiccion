import React from 'react';
import './App.css';
import Form from './components/form';
import  Results  from './components/Results';
import Card from './components/Card';
import SearchBar from './components/SearchBar';

export default function App() {
  return (
    <div className='flex flex-col items-center '>
      <SearchBar />
      <Card />
    </div>
  );
}
