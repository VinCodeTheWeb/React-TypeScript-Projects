import React from 'react';

interface HeaderProps {
  title?: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <header className='header'>
    <h1 data-test='component-header' className='header__title'>{title}</h1>
  </header>
)

Header.defaultProps = {
  title: 'Header'
}

export { Header };
