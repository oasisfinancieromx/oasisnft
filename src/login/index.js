import React, { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import Button from '@mui/material/Button';
import WalletConnectProvider from "@walletconnect/web3-provider";
import styled from 'styled-components';

import imago from '../assets/imago.svg';

import { ui } from '../lib/firebase';

const Logo = styled.img`
  width: 320px;
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const walletConnectProvider = new WalletConnectProvider({
  infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
});

export const Login = () => {
  useEffect(() => {
    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
    });
  } , []);

  const connectWallet = async () => {
    await walletConnectProvider.enable();
  };

  return (
    <>
      <Container>
        <Logo src={imago} alt="Oasis NFT" />
        <h1>Sign In</h1>
        <div style={{ textAlign: 'center' }}>
          <Button variant="outlined" onClick={() => connectWallet()}>
            Connect your Wallet
          </Button>
          <p>- or -</p>
        </div>
        <div id="firebaseui-auth-container"></div>
      </Container>
    </>
  );
};
