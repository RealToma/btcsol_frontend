const JoinUs = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold md:text-5xl">Join us</h1>
      <div className="flex gap-6 text-sm font-light">
        <p className="flex flex-col items-center gap-2 text-center">
          <img src="/assets/img/join-us/telegram.svg" />
          Telegram
        </p>
        <p className="flex flex-col items-center gap-2 text-center">
          <img src="/assets/img/join-us/dex-screener.svg" />
          Dex
          <br />
          Screener
        </p>
        <p className="flex flex-col items-center gap-2 text-center">
          <img src="/assets/img/join-us/x.svg" />X
        </p>
        <p className="flex flex-col items-center gap-2 text-center">
          <img src="/assets/img/join-us/btcsol-swap.svg" />
          BTCSOL
          <br />
          Swap
        </p>
        <p className="flex flex-col items-center gap-2 text-center">
          <img src="/assets/img/join-us/jupiter-swap.svg" />
          Jupiter
          <br />
          Swap
        </p>
      </div>
    </>
  )
}

export default JoinUs
