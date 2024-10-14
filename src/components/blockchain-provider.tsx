import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react'
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TrustWalletAdapter,
} from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'
import { ReactNode, useMemo } from 'react'
import { WagmiProvider } from 'wagmi'
import { wagmiConfig } from "@/core/lib/wagmi";

type BlockchainProviderProps = {
  children: ReactNode
}

export const BlockchainProvider = ({
  children,
}: BlockchainProviderProps) => {
  const network = WalletAdapterNetwork.Devnet
  const endpoint = useMemo(() => clusterApiUrl(network), [network])

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new TrustWalletAdapter(),
      new SolflareWalletAdapter({ network }),
    ],
    [network],
  )

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WagmiProvider config={wagmiConfig}>
        <WalletProvider wallets={wallets} autoConnect>
          {children}
        </WalletProvider>
      </WagmiProvider>
    </ConnectionProvider>
  )
}
