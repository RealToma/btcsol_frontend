'use client'

import React, { ReactNode, useState, Suspense, useEffect } from 'react'
import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify'

import { ConnectWalletModal } from '@/components/layout/connect-wallet'
import { BlockchainProvider } from '@/components/blockchain-provider'
import { getQueryClient } from '@/core/lib/tanstack-query'
import { LoadingProvider, useLoading } from './loading-provider'
import 'react-toastify/dist/ReactToastify.css'

type ProvidersProps = {
  children: ReactNode
}

function InitialLoadingSimulator() {
  const { setIsLoading } = useLoading()

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // Show loading screen for 3 seconds

    return () => clearTimeout(timer)
  }, [setIsLoading])

  return null
}

export default function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(() => getQueryClient())

  return (
    <BlockchainProvider>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: '#9957FF',
            accentColorForeground: 'white',
            borderRadius: 'small',
            fontStack: 'system',
            overlayBlur: 'small',
          })}
          appInfo={{
            appName: 'BTCSOL',
          }}
        >
          <LoadingProvider>
            <InitialLoadingSimulator />
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
            <ConnectWalletModal />
            <ReactQueryDevtools initialIsOpen={false} />
          </LoadingProvider>
        </RainbowKitProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          closeOnClick={true}
          pauseOnHover={true}
        />
      </QueryClientProvider>
    </BlockchainProvider>
  )
}
