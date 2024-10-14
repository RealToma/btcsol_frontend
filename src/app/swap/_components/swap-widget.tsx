'use client'

import React, { useEffect, useState } from 'react'

import ProgressBar from '../_components/progress-bar'
import TokenSelect from '../_components/token-select'

import { useConnectWalletModalState } from '@/components/layout/connect-wallet'

import { useWallet } from '@/core/hooks/use-wallet'

const steps = ['Connect Wallet', 'Select Token', 'Input Currency', 'Swap']

const SwapWidget = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [buyAmount, setBuyAmount] = useState(0)
  const [sellAmount, setSellAmount] = useState(0)
  const [buyToken, setBuyToken] = useState('')
  const [sellToken, setSellToken] = useState('')

  const { isConnected } = useWallet()

  const onOpenWalletConnectChange = useConnectWalletModalState(
    (s) => s.onOpenChange,
  )

  const handleSwitchTokens = () => {
    setBuyToken(sellToken)
    setSellToken(buyToken)
  }

  useEffect(()=>{
    if(isConnected ){
      setCurrentStep(1);
    }else{
      setCurrentStep(0);
    }
  },[isConnected])

  return (
    <div className="flex w-full max-w-[550px] flex-col gap-4 rounded-3xl bg-[#121212] p-8 shadow-[0px_0px_6.2px_0px_#000000]">
      <ProgressBar steps={steps} currentStep={currentStep} />

      <div className="relative flex justify-between rounded-2xl border-2 border-[#191919] px-6 py-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-[#FFFFFF80]">I will Buy</p>
          <input
            type="number"
            className="bg-transparent text-xl outline-none"
            value={buyAmount}
            onChange={(e) => setBuyAmount(Number(e.target.value))}
          />
          <p className="text-sm text-[#FFFFFF80]">~$0.00</p>
        </div>

        <div className="flex flex-col items-end justify-between">
          <TokenSelect value={buyToken} onChange={setBuyToken} />
          <p className="text-xs text-[#FFFFFF80]">BTCSOL</p>
        </div>

        <img
          src="/assets/img/swap/icon-switch-button.svg"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[calc(50%+8px)] cursor-pointer"
          onClick={handleSwitchTokens}
        />
      </div>

      <div className="flex justify-between rounded-2xl border-2 border-[#191919] px-6 py-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-[#FFFFFF80]">I will Get</p>
          <input
            type="number"
            className="bg-transparent text-xl outline-none"
            value={sellAmount}
            onChange={(e) => setSellAmount(Number(e.target.value))}
          />
          <p className="text-sm text-[#FFFFFF80]">~$0.00</p>
        </div>

        <div className="flex flex-col items-end justify-between">
          <TokenSelect value={sellToken} onChange={setSellToken} />
          <p className="text-xs text-[#FFFFFF80]">BTCSOL</p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-4">
          <p>1234.123 ETH</p>
          <p className="text-[#FFFFFF80]">(~$0.00)</p>
        </div>

        <div className="flex gap-2">
          <img src="/assets/img/swap/icon-more-info.svg" className="h-4 w-4" />
          <img
            src="/assets/img/swap/icon-gas-station.svg"
            className="h-4 w-4"
          />
          <p className="text-xs text-[#FFFFFF80]">$0.00</p>
        </div>
      </div>

      <button
        className="h-[40px] w-full rounded-full bg-gradient-to-r from-[#FFB72D] via-[#B96C0F] to-[#723F01]"
        onClick={() => {
          if (!isConnected) {
            onOpenWalletConnectChange(true)
          } else {
          }
        }}
      >
        {!isConnected ? 'Connect Wallet' : 'Swap'}
      </button>
    </div>
  )
}

export default SwapWidget
