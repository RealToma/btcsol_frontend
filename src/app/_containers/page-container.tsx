'use client'

import JoinUs from './join-us'
import Leadership from './leadership'
import Partners from './partners'

const HomePageContainer = () => {
  return (
    <main className="flex w-full flex-col gap-40">
      <section className="relative w-full pt-16">
        <img
          src="/assets/img/bg-gradient/ellipse_49.svg"
          className="absolute left-0 top-0 -translate-y-[100px] -z-10"
        />
        <img
          src="/assets/img/bg-gradient/ellipse_43.svg"
          className="absolute bottom-0 right-0 -z-10"
        />
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-20">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col gap-10">
              <h1 className="text-center text-2xl font-bold md:text-5xl">
                Bitcoin on Solana
              </h1>
              <div className="flex gap-3">
                <button className="h-[40px] w-[170px] rounded-full bg-gradient-to-r from-[#FFB72D] via-[#B96C0F] to-[#723F01]">
                  BTCSOL Swap
                </button>
                <button className="h-[40px] w-[170px] rounded-full border border-white">
                  Community
                </button>
              </div>
            </div>
            <img src="/assets/img/top/logo.svg" />
          </div>
          <div className="flex w-full justify-around">
            <div className="flex flex-col items-center">
              <p className="text-4xl md:text-7xl">3.2M+</p>
              <p className="text-base md:text-2xl">Bitcoin volume</p>
              <p className="text-sm text-[#898989] md:text-xl">24 Hours</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-4xl md:text-7xl">5.2M+</p>
              <p className="text-base md:text-2xl">Solana Volume</p>
              <p className="text-sm text-[#898989] md:text-xl">24 Hours</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-4xl flex-col items-center">
        <h1 className="flex flex-col gap-5 text-center text-2xl font-bold md:text-5xl">
          Harnessing the Power and Volume of All Chains
          <p className="text-sm font-normal">
            Through LayerZero technology, BTCSOL is able to tap into the entire
            crypto market to capture volume and drive that back into our token.
          </p>
        </h1>
      </section>

      <section className="relative w-full">
        <img
          src="/assets/img/bg-gradient/ellipse_45.svg"
          className="absolute left-0 top-0 -translate-y-1/2"
        />
        <img
          src="/assets/img/bg-gradient/ellipse_48.svg"
          className="absolute bottom-0 right-0 translate-y-1/2"
        />

        <div className="mx-auto flex max-w-4xl flex-col items-center gap-20" id="about">
          <h1 className="flex flex-col gap-5 text-center text-2xl font-bold md:text-5xl">
            BTC meets SOL
            <p className="text-sm font-normal">
              Seamlessly blending the foundational strengths of Bitcoin with the
              unparalleled speed and affordability of the Solana blockchain.
              This groundbreaking culture token is engineered to deliver maximum
              value and exponential growth, setting a new standard in the crypto
              ecosystem.
            </p>
          </h1>

          <div className="w-full">
            <div className="float-right flex max-w-xs flex-col gap-5">
              <p className="flex flex-col gap-2 text-xl font-bold md:text-4xl">
                The Ultimate Culture Token
                <span className="text-sm font-normal">
                  Our built-in interoperability with LayerZero empowers BTCSOL
                  to tap into liquidity across major blockchain networks,
                  including Ethereum, Arbitrum, Optimism, Base, BNB Chain,
                  Avalanche, Polygon, and more. This cross-chain functionality
                  not only enhances liquidity but also facilitates seamless
                  transactions and broader adoption, positioning Bitcoin on
                  Solana as a versatile and highly accessible asset for a wide
                  range of users.
                </span>
              </p>
              <button className="h-[40px] w-[134px] rounded-full bg-gradient-to-r from-[#FFB72D] via-[#B96C0F] to-[#723F01]">
                Buy Now
              </button>
            </div>
          </div>
          <div className="w-full" id="swap">
            <div className="flex max-w-xs flex-col gap-5">
              <p className="flex flex-col gap-2 text-xl font-bold md:text-4xl">
                BTCSOL Swap
                <span className="text-sm font-normal">
                  Our swap allows users to perform cross-chain swaps, enabling
                  the conversion of various cryptocurrencies into BTCSOL and
                  vice versa. The system leverages LayerZero&apos;s cross-chain
                  communication to utilize external liquidity pools and
                  integrates our tokens liquidity for efficient swaps between
                  SOL and BTCSOL tokens.
                </span>
              </p>

              <div className="flex gap-3" >
                <button className="h-[40px] w-[170px] rounded-full bg-gradient-to-r from-[#FFB72D] via-[#B96C0F] to-[#723F01]">
                  BTCSOL Swap
                </button>
                <button className="h-[40px] w-[170px] rounded-full border border-white">
                  Jupiter Swap
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-16" id="team">
        <Leadership />
      </section>

      <section className="relative w-full">
        <img
          src="/assets/img/bg-gradient/ellipse_46.svg"
          className="absolute left-0 top-0 -translate-y-1/2"
        />
        <img
          src="/assets/img/bg-gradient/ellipse_47.svg"
          className="absolute bottom-0 right-0 translate-y-1/2 -z-10"
        />

        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10">
          <Partners />
        </div>
      </section>

      <section className="mx-auto mb-40 flex w-full max-w-4xl flex-col items-center gap-5">
        <JoinUs />
      </section>
    </main>
  )
}

export default HomePageContainer
