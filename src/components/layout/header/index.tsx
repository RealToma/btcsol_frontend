'use client'

import { useWallet } from '@/core/hooks/use-wallet'

import { useConnectWalletModalState } from '../connect-wallet'
import { UserWallets } from './user-wallets'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const NAV_LINKS = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Swap',
    href: '/swap',
  },
  {
    label: 'Team',
    href: '/team',
  },
  {
    label: 'Partners',
    href: '/partners',
  },
  {
    label: 'Links',
    href: '/links',
  },
]

export function Header() {
  const { isConnected } = useWallet()

  const onOpenWalletConnectChange = useConnectWalletModalState(
    (s) => s.onOpenChange,
  )

  return (
    <header className="bg-bg-white-0 mx-auto w-full max-w-5xl">
      <div className="flex items-center justify-between gap-2 py-5 md:gap-6">
        <a className="flex items-center gap-2 font-semibold" href="/">
          <img src="/assets/img/header/logo.svg" alt="logo"/>
          BTC on Solana
        </a>

        {NAV_LINKS.map((item, index) => (
          <Link href={item.href} key={index}>
            {item.label}
          </Link>
        ))}

        <button className="h-[40px] w-[196px] rounded-full bg-gradient-to-r from-[#FFB72D] via-[#B96C0F] to-[#723F01]">
          Join Our Telegram
        </button>

        <div className="flex items-center gap-2">
          {isConnected ? (
            <div className="flex gap-2">
              <UserWallets />
            </div>
          ) : (
            <>
              <button
                className="flex h-[40px] w-[196px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FFB72D] via-[#B96C0F] to-[#723F01]"
                onClick={() => onOpenWalletConnectChange(true)}
              >
                <img src="/assets/img/wallets/connect-wallet.svg" />
                Connect wallet
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
