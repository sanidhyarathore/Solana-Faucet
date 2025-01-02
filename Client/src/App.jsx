import './App.css';
import Airdrop from './components/Airdrop';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

import '@solana/wallet-adapter-react-ui/styles.css';


function App() {
  const endpoint = "https://solana-devnet.g.alchemy.com/v2/wtp7XKCz0CbtY5HEJE4ntow9f2oA96mn"

  return (
    <div className='max-w-screen-xl mx-auto p-8 text-center'>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <h1 className='text-[#a99df1]'>Solana Faucet</h1>
            <div className='flex gap-10'>
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>
            <Airdrop />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>

    </div>
  );
}

export default App;
