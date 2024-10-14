'use client'

export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[900px] items-center justify-between border-t border-[#FFFFFF26] py-9">
      <p className="flex gap-3 font-semibold">
        <img src="/assets/img/footer/logo.svg" />
        BTC on Solana
      </p>
      <div className="flex gap-[10px]">
        <img
          src="/assets/img/footer/telegram.svg"
          className="h-[12px] w-[14px]"
        />
        <img src="/assets/img/footer/x.svg" className="h-[14px] w-[15px]" />
      </div>
      <p className="text-sm text-[#FFFFFF80]">©2024</p>
    </footer>
  )
}
