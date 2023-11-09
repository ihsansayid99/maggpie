'use client';

import React from 'react';
import Typewriterr from 'typewriter-effect';

const Typewriter = ({ textArray }: { textArray: string[] }) => {
  return (
    <>
      <Typewriterr
        options={{
          strings: textArray,
          autoStart: true,
          loop: true,
          delay: 100,
        }}
      />
    </>
  );
};

export default Typewriter;
