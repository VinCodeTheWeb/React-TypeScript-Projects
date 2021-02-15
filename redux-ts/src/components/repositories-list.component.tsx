import React, { useState } from 'react';

import { useActions } from '../hooks/useActions'

const RepositoriesList: React.FC = () => {
  const { searchRepositories } = useActions();
  const [text, setText] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(text)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
}

export { RepositoriesList };
