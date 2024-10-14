import { SUPPORT_CHAINS } from '@/core/constants/chains'
import { Web3Wallet } from '@/core/types/web3'

type ShortenAddress = (
  address: string,
  length?: number,
  rightLength?: number,
) => string

const LATEST_STORAGE_KEY = 'btcsol-lastest-id'

export const shortenAddress: ShortenAddress = (
  address,
  length = 6,
  rightLength = length,
) =>
  [
    address.slice(0, length),
    rightLength > 0 ? address.slice(rightLength * -1) : '',
  ].join('...')

export function getChainById(id: number) {
  return SUPPORT_CHAINS.find((chain) => chain.id === id)
}

export function createTxObject({
  tx,
  chainId,
}: {
  tx: { hash: string }
  chainId: number
}) {
  const chain = getChainById(chainId)

  return {
    transactionHash: tx.hash,
    transactionUrl: new URL(
      `/tx/${tx.hash}`,
      chain?.blockExplorers?.default.url ?? '',
    ).toString(),
  }
}

export function getConnectorIcon(id: string): string | undefined {
  return {
    // EVM
    ['io.metamask']: '/assets/img/wallets/metamask.svg',
    metaMask: '/assets/img/wallets/metamask.svg',
    metaMaskSDK: '/assets/img/wallets/metamask.svg',
    coinbaseWalletSDK: '/assets/img/wallets/coinbase.svg',
    walletConnect: '/assets/img/wallets/walletconnect.svg',
    'app.phantom': '/assets/img/wallets/phantom.svg',

    // Solana
    trust: '/assets/img/wallets/trustwallet.svg',
  }[id]
}

export function getLatestWalletId(
  provider: Web3Wallet.Providers = 'evm',
): string {
  return typeof localStorage !== 'undefined'
    ? localStorage.getItem(`${LATEST_STORAGE_KEY}-${provider}`) || ''
    : ''
}

export function addLatestWalletId(
  provider: Web3Wallet.Providers = 'evm',
  walletId: string,
): void {
  localStorage.setItem(`${LATEST_STORAGE_KEY}-${provider}`, walletId)
}

export function removeLatestWalletId(
  provider: Web3Wallet.Providers = 'evm',
): void {
  localStorage.removeItem(`${LATEST_STORAGE_KEY}-${provider}`)
}

type SortAndKeepLatestConnectorFirstParams = {
  connectors: Web3Wallet.Connector[]
  recommendedConnectors?: string[]
  provider?: Web3Wallet.Providers
}

export function sortAndKeepLatestConnectorFirst({
  connectors,
  provider,
  recommendedConnectors,
}: SortAndKeepLatestConnectorFirstParams) {
  const latestConnector = getLatestWalletId(provider)

  let newConnectors = connectors

  if (!!recommendedConnectors) {
    newConnectors = newConnectors.sort((a, b) => {
      if (recommendedConnectors.includes(a.id)) return -1
      if (recommendedConnectors.includes(b.id)) return 1
      return 0
    })
  }

  if (!!latestConnector) {
    newConnectors.sort((a, b) => {
      if (a.id === latestConnector) return -1
      if (b.id === latestConnector) return 1
      return 0
    })
  }

  return newConnectors
}
