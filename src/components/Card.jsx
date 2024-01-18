import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Card({ concept, definition }) {
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-1/2">
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">{concept}</h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">{definition}</p>
      </div>
      <div className="flex flex-row justify-end p-6 pt-0">
        <button className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20" type="button">Mostrar Mas</button>
      </div>
    </div>
  );
}
