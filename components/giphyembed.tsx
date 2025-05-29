'use client'
import React from 'react';

const GiphyEmbed = () => {
  return (
    <div className="w-full pb-[100%] relative">
      <iframe
        src="https://giphy.com/embed/UQ1EI1ML2ABQdbebup"
        width="100%"
        height="100%"
        className="absolute inset-0 w-full h-full"
        frameBorder="0"
        allowFullScreen
        title="Cat Pixel Bongo GIF"
      ></iframe>
      <p className="mt-2 text-sm text-neutral-400 text-center">
        <a
          href="https://giphy.com/stickers/cat-pixel-bongo-UQ1EI1ML2ABQdbebup"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          via GIPHY
        </a>
      </p>
    </div>
  );
};

export default GiphyEmbed;
