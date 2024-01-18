import React from 'react';
import './App.css';
import CardsContainer from './components/CardsContainer';
import SearchBar from './components/SearchBar';

export default function App() {
  return (
    <div className="flex flex-col items-center gap-3 font-mono min-h-screen pt-6">
      <h1 className="text-4xl">Diccionario ADSO</h1>
      <SearchBar />
      <CardsContainer />
    </div>
  );
}
