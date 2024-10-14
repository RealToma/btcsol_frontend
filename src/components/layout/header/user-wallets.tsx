'use client'

import {
  RiAddLine,
  RiArrowDownSLine,
  RiLogoutCircleRLine,
} from '@remixicon/react'
import { useState } from 'react'

import { useWallet } from '@/core/hooks/use-wallet'
import { Web3Wallet } from '@/core/types/web3'

import { useConnectWalletModalState } from '../connect-wallet'
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function UserWallets() {
  const [open, onOpenChange] = useState(false)

  const { wallets, disconnect } = useWallet()
  const onOpenConnectWallet = useConnectWalletModalState((s) => s.onOpenChange)

  if (!wallets[0]) return null

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button
          aria-label="Open wallet details"
          className="px-2.5 sm:pr-3"
        >
          <span className="hidden sm:block">{wallets[0].displayName}</span>
          <RiArrowDownSLine />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="end"
        sideOffset={8}
        className="w-[260px] space-y-1 overflow-hidden px-4 py-3"
      >
        <span className="p-2">
          Connected Wallets
        </span>

        {wallets.map(({ connector, displayName, provider }) => {
          return (
            <div
              className="flex h-10 items-center gap-2"
              key={`wallet-${provider}`}
            >
              <span className="flex-1">
                {displayName}
              </span>
              <button
                type="button"
                className="flex items-center justify-center"
                onClick={() => disconnect(provider as Web3Wallet.Providers)}
              >
                <RiLogoutCircleRLine className="size-4 text-state-error" />
              </button>
            </div>
          )
        })}

        <Button
          className="w-full border-0"
          onClick={() => onOpenConnectWallet(true)}
        >
          <RiAddLine />
          <span className="inline-block flex-1 text-start">
            Connect or change wallet
          </span>
        </Button>
      </PopoverContent>
    </Popover>
  )
}
