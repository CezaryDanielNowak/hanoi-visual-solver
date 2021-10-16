import React, { useState } from 'react';

import './HanoiStacks.css';

export default function HanoiStacks({ stackA /* source */, stackB /* destination */, stackC, /* auxiliary */ }) {
  return (
    <div className="HanoiStacks">
      <HanoiStack stack={ stackA } />
      <HanoiStack stack={ stackB } />
      <HanoiStack stack={ stackC } />
    </div>
  );
}

function HanoiStack({ stack }) {
  return (
    <div className="HanoiStack">
      { stack.map((size) => {
        const backgroundColor = `rgb(${255 - size * 15}, ${255 - size * 15}, ${255 - size * 15})`;
        const width = size * 30;

        return (
          <div key={ `block-${size}` } style={{ width, backgroundColor }}></div>
        )
      }) }
    </div>
  );
}