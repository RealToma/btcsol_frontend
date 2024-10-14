import React, { useState } from 'react'
import Image from 'next/image'

const tokens = [
  { id: 'btcsol', name: 'BTCSOL', logo: '/assets/img/tokens/btcsol.svg' },
  { id: 'eth', name: 'ETH', logo: '/assets/img/tokens/btcsol.svg' },
  { id: 'usdc', name: 'USDC', logo: '/assets/img/tokens/btcsol.svg' },
  { id: 'sol', name: 'SOL', logo: '/assets/img/tokens/btcsol.svg' },
]

interface TokenSelectProps {
  value: string
  onChange: (value: string) => void
}

const TokenSelect: React.FC<TokenSelectProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const selectedToken = tokens.find((t) => t.id === value)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-4 rounded-full bg-[#191919] px-4 py-2 text-white"
      >
        {selectedToken ? (
          <>
            <Image
              src={selectedToken.logo}
              alt={selectedToken.name}
              width={24}
              height={24}
              className="mr-2"
            />
            <span>{selectedToken.name}</span>
          </>
        ) : (
          <span>Select</span>
        )}
        <img src="/assets/img/swap/icon-arrow-down.svg" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-[10] mt-1 w-[160px] rounded-md bg-[#191919] p-4 shadow-lg">
          {tokens.map((token) => (
            <button
              key={token.id}
              className="flex w-full items-center p-2 text-left hover:bg-[#252525]"
              onClick={() => {
                onChange(token.id)
                setIsOpen(false)
              }}
            >
              <Image
                src={token.logo}
                alt={token.name}
                width={24}
                height={24}
                className="mr-2"
              />
              <span>{token.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default TokenSelect
