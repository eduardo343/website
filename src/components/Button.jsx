import React from 'react';

export default function Button({ text }) {
  return (
    <div class='flex flex-wrap justify-center '>
      <a href='#' class='relative'>
        <button class='absolute top-0 left-0 mt-2 ml-3 h-full w-full rounded-md bg-BC-blue'></button>
        <span class='fold-bold relative inline-block h-full w-full rounded-md border-2 border-BC-yellow bg-BC-yellow px-3 py-3 text-base font-bold text-BC-blue font-body'>
          {text}
        </span>
      </a>
    </div>
  );
}
