export default function Banner() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-stone-300/70 bg-stone-900 shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80"
        alt="Event banner"
        className="h-56 w-full object-cover opacity-80 md:h-72"
      />
      <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-r from-stone-900/80 to-stone-900/35 px-6 text-stone-100 md:px-10">
        <h1 className="text-2xl font-semibold leading-tight md:text-4xl">
          where every event finds its venue
        </h1>
        <p className="mt-2 max-w-xl text-sm text-stone-200 md:text-base">
          Find the perfect venue for meetings, weddings, private parties, and more.
        </p>
      </div>
    </section>
  );
}
