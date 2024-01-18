import React, { useState, useRef, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
export default function Card({ concept, definition }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const definitionRef = useRef(null);

  const determineOverflow = (element) => {
    if (element) {
      const documentFontSizeStr = getComputedStyle(document.documentElement).fontSize;
      const documentFontSize = parseInt(documentFontSizeStr, 10);
      const elementHeightRem = element.scrollHeight / documentFontSize;
      const maxHeightRem = 160 / documentFontSize;
      const isOverflowed = elementHeightRem > maxHeightRem;

      if (isOverflowed) {
        setHasOverflow(true);
      } else {
        setHasOverflow(false);
      }
    }
  };

  useEffect(() => {
    const definitionElement = definitionRef.current;

    determineOverflow(definitionElement);

    window.addEventListener('resize', () => determineOverflow(definitionElement));

    return () => window.removeEventListener('resize', () => determineOverflow(definitionElement));
  }, [definition]);

  const handleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className="w-[90%] p-3 pt-6 max-w-6xl mx-auto relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl capitalize">
      <div>
        <h1 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">{concept}</h1>
        <p ref={definitionRef} className={`block font-sans transition-all overflow-hidden text-base antialiased font-light leading-relaxed text-inherit ${hasOverflow ? 'after:content-[""] after:absolute after:bottom-0 after:h-32 after:left-0 after:w-full after:bg-gradient-to-t after:from-black after:to-black/0 after:opacity-30 after:pointer-events-none after:transition-all' : ''} ${isExpanded ? 'after:opacity-0 max-h-96 overflow-y-auto' : 'max-h-40'}`}>{definition}</p>
      </div>
      {
        hasOverflow && (
        <div className="flex flex-row justify-end pt-0">
          <button onClick={handleExpanded} className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20" type="button">{isExpanded ? 'Mostrar menos' : 'Mostrar Mas'}</button>
        </div>
        )
      }
    </article>
  );
}
