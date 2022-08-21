import React from 'react';
import styled from 'styled-components';
import ReactCountryFlag from 'react-country-flag';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import imago from './imago.svg';

const Flag = styled(ReactCountryFlag)`
  margin-right: 10px;
`;

const Logo = styled.img`
  width: 60%;
`;

// two column layout
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  & > div {
    &:first-child {
      text-align: right;
    }

    width: 50%;
    padding: 40px;
  }
`;

const countries = [
  ['mx', 'Mexico'],
  ['ar', 'Argentina'],
  ['br', 'Brazil'],
  ['cl', 'Chile'],
  ['pa', 'Panama'],
  ['pe', 'Peru'],
  ['sv', 'El Salvador'],
];

export const Home = () => {
  return (
    <Container>
      <div>
        <Logo src={imago} alt="Oasis NFT" />
      </div>
      <div>
        {countries.map(([code, name]) => (
          <>
            <Button variant="text" color="primary" LinkComponent={Link} to={`/{code}`}>
              <Flag svg countryCode={code} /> {name}
            </Button>
            <br />
          </>
        ))}
      </div>
    </Container>
  );
};
