import { bscTestnet, sepolia } from "wagmi/chains";

export const CHAIN_ID = {
  MAINNET: 1,
  SEPOLIA: 11155111,
  OPTIMISM: 10,
  OPTIMISM_SEPOLIA: 11155420,
  ARBITRUM_ONE: 42161,
  ARBITRUM_SEPOLIA: 421614,
  POLYGON: 137,
  POLYGON_MUMBAI: 80001,
  BSC: 56,
  BSC_TESTNET: 97,
  OPBNB: 204,
  AVALANCHE: 43114,
  BASE: 8453,
  BLAST: 81457,
  LINEA: 59144,
  FANTOM: 250,
  ZKSYNC: 324,
} as const

export const SUPPORT_CHAINS = [sepolia, bscTestnet] as const

export const PUBLIC_NODES: Record<
  (typeof SUPPORT_CHAINS)[number]['id'],
  string[] | readonly string[]
> = {
  [sepolia.id]: sepolia.rpcUrls.default.http,
  [bscTestnet.id]: bscTestnet.rpcUrls.default.http,
}
