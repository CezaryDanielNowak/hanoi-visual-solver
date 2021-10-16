import React, { useState, Fragment } from 'react';

import './App.css';
import HanoiStacks from './HanoiStacks';

function App() {
  const [ stackA, setStackA ] = useState([]); /* source */
  const [ stackB, setStackB ] = useState([]); /* destination */
  const [ stackC, setStackC ] = useState([]); /* auxiliary */

  const [ blocksNumber, setBlocksNumber ] = useState(3);
  const [ isStarted, setIsStarted ] = useState(false);

  return (
    <div className="App">
      <pre>
        { JSON.stringify(stackA) }
      </pre>
      <pre>
        { JSON.stringify(stackB) }
      </pre>
      <pre>
        { JSON.stringify(stackC) }
      </pre>

      {  isStarted
        ? <HanoiStacks stackA={ stackA } stackB={ stackB } stackC={ stackC } />
        : (
          <Fragment>
            <label>
              How many blocks?
              <br />
              <input
                type="number"
                value={ blocksNumber }
                onChange={ (e) => {
                  setBlocksNumber(e.target.value);
                } }
              />
            </label>

            <button
              onClick={ () => {
                solveHanoi(blocksNumber, [ stackA, setStackA ], [ stackB, setStackB ], [ stackC, setStackC ]);
                setIsStarted(true);
              }
            }>
              Start solving
            </button>
          </Fragment>
        )}

    </div>
  );
}

function solveHanoi(blocksNumber, [ stackA, setStackA ], [ stackB, setStackB ], [ stackC, setStackC ]) {
  fillSourceStack(blocksNumber, setStackA);
  console.log(stackA, stackB, stackC)
}
function fillSourceStack(blocksNumber, setStackA) {
  setStackA(
    Array.from({ length: blocksNumber })
      .map((_, i) => i+ 1 )
  )
}

export default App;
