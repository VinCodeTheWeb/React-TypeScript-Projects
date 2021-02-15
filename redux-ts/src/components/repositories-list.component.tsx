import React, { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

import { useActions } from '../hooks/useActions'

const RepositoriesList: React.FC = () => {
  const { searchRepositories } = useActions();
  const [text, setText] = useState('');
  const { data, error, loading } = useTypedSelector((state) => state.repositories);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(text);
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!loading && !error && <ul>{data.map((name) => <li key={name}>{name}</li>)}</ul>}
    </div>
  );
}

export { RepositoriesList };
