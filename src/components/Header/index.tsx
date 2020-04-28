import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { pathname } = useLocation();

  const routes = [
    { name: 'Listagem', link: '/' },
    { name: 'Importar', link: '/import' },
  ];

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          {routes.map(route => (
            <Link
              key={route.link}
              to={route.link}
              className={route.link === pathname ? 'active' : ''}
            >
              {route.name}
            </Link>
          ))}
        </nav>
      </header>
    </Container>
  );
};

export default Header;
