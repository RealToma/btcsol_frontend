'use client'

import { useMemo, useState } from 'react'
import { Input } from '@/components/ui/input'
import { create } from 'zustand'

import { Collapsible } from '@/components/ui/collapsible'
import { Web3Wallet } from '@/core/types/web3'

import { ResponsiveDialog } from '../../ui/responsive-dialog'
import { useConnectWallet } from './use-connect-wallet-modal'
import { WalletOption } from '@/components/layout/connect-wallet/wallet-option'

type State = {
  open: boolean
  desiredChain?: number
}
type Actions = {
  onOpenChange: (open: boolean) => void
  setDesiredChain: (chainId?: number) => void
}

export const useConnectWalletModalState = create<State & Actions>((set) => ({
  open: false,
  desiredChain: undefined,
  onOpenChange: (open) => set(() => ({ open })),
  setDesiredChain: (chainId) => set(() => ({ desiredChain: chainId })),
}))

export function ConnectWalletModal() {
  const { open, onOpenChange } = useConnectWalletModalState()
  const [view, setView] = useState<'connect' | 'compare'>('connect')

  return (
    <ResponsiveDialog.Root open={open} onOpenChange={onOpenChange}>
      <ResponsiveDialog.Content className="w-full border-none md:w-[600px] md:rounded-xl">
        {
          {
            connect: (
              <ConnectWallet onCompareWallets={() => setView('compare')} />
            ),
            compare: (
              <ConnectWallet onCompareWallets={() => setView('connect')} />
            ),
          }[view]
        }
      </ResponsiveDialog.Content>
    </ResponsiveDialog.Root>
  )
}

function ConnectWallet({ onCompareWallets }: { onCompareWallets: () => void }) {
  const { connectingWith, connectors, handleConnectWallet } = useConnectWallet()
  const [searchTerm, setSearchTerm] = useState('')

  const allConnectors = useMemo(() => {
    return connectors.flatMap((c) => c.connectors)
  }, [connectors])

  const filteredConnectors = useMemo(() => {
    return allConnectors.filter((connector) =>
      connector.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [allConnectors, searchTerm])

  return (
    <div className="overflow-auto">
      <ResponsiveDialog.Header className="space-y-1 border-b-0">
        <ResponsiveDialog.Title className="flex flex-col gap-2">
          <span className="text-center">Connect your wallet</span>
          <Input
            type="text"
            placeholder="Search wallets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-2"
          />
        </ResponsiveDialog.Title>
      </ResponsiveDialog.Header>
      <main className="space-y-6 px-5 py-6">
        <WalletConnectorsList
          connectors={filteredConnectors}
          connectingWith={connectingWith}
          onConnectWallet={handleConnectWallet}
        />
      </main>
    </div>
  )
}

function WalletConnectorsList({
  connectors,
  connectingWith,
  onConnectWallet,
}: {
  connectors: Web3Wallet.Connector[]
  connectingWith?: string
  onConnectWallet: (connectorId: string, provider: Web3Wallet.Providers) => void
}) {
  const splitConnectors = useMemo(() => {
    return [connectors.slice(0, 4), connectors.slice(4)]
  }, [connectors])

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {splitConnectors[0].map((connector) => (
          <WalletOption
            key={connector.id}
            connector={connector}
            isConnecting={connector.id === connectingWith}
            provider={connector.provider}
            onConnectWallet={onConnectWallet}
          />
        ))}
      </div>

      {splitConnectors[1].length > 0 && (
        <Collapsible.Root>
          <Collapsible.Trigger />
          <Collapsible.Content className="mt-6 space-y-2">
            {splitConnectors[1].map((connector) => (
              <WalletOption
                key={connector.id}
                connector={connector}
                isConnecting={connector.id === connectingWith}
                provider={connector.provider}
                onConnectWallet={onConnectWallet}
              />
            ))}
          </Collapsible.Content>
        </Collapsible.Root>
      )}
    </div>
  )
}
