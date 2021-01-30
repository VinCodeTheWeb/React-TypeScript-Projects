import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [text, setText] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);

  const increment = (): void => setCounter(counter => counter + 1);
  const decrement = (): void => setCounter(counter => counter - 1);
  const focusTextInput = (): void => inputRef.current?.focus()
  
  useEffect((): void => {
    focusTextInput()
  }, [])

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h1>Input: {text}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={focusTextInput}>Focus Text Input</button>
      <form action="">
      <input ref={inputRef} type="text" onChange={e => setText(e.target.value) } value={text}/>
      </form>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
