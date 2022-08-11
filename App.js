import React, {useState} from 'react';
import {ethers} from 'ethers';

import {Button,View,Text} from 'react-native';

const App = () => {
  const [walletAddress, setWalletAddress] = useState('');
  async function requestAccount() {
    console.log('Requesting account...');

    // ❌ Check if Meta Mask Extension exists
    if (window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error connecting...');
      }
    } else {
      alert('Meta Mask not detected');
    }
  }
   

  return (
    <View>
    
    <Button
      title="Press me"
      onPress={requestAccount}
    />
            <Text>Wallet Address: {walletAddress}</Text>

  </View>
  );
};

export default App;
