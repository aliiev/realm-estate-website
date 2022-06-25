const Stats = () => (
  <section className="container flex justify-between lg:justify-center items-start lg:items-center gap-6 lg:gap-24 border-b border-neutral-800 mx-auto px-6 lg:px-0 py-12 lg:py-24">
    <div className="flex flex-col gap-2">
      <span className="text-2xl md:text-5xl font-medium">8.93%</span>
      <span className="text-xs md:text-base text-neutral-500">Profit Return Rate</span>
    </div>
    <span className="hidden lg:block w-px h-6 bg-neutral-500"></span>
    <div className="flex flex-col gap-2">
      <span className="text-2xl md:text-5xl font-medium">12K+</span>
      <span className="text-xs md:text-base text-neutral-500">Property In Sale & Rent</span>
    </div>
    <span className="hidden lg:block w-px h-6 bg-neutral-500"></span>
    <div className="flex flex-col gap-2">
      <span className="text-2xl md:text-5xl font-medium">20K+</span>
      <span className="text-xs md:text-base text-neutral-500">Customers</span>
    </div>
  </section>
)

export default Stats