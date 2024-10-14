const Partners = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold md:text-5xl">Partners</h1>
      <div className="grid w-full grid-cols-6 justify-between gap-[56px]">
        {Array(18)
          .fill(null)
          .map((_, index) => {
            return (
              <p key={index} className="flex">
                <img src="/assets/img/partners/partners.svg" />
                Sample
              </p>
            )
          })}
      </div>
    </>
  )
}
export default Partners
