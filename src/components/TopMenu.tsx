import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <header className="border-b border-stone-300 bg-stone-50/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
        <TopMenuItem title="Booking" pageRef="/booking" />
        <img src="/img/logo.png" alt="website logo" className="h-10 w-10 rounded-full object-cover" />
      </div>
    </header>
  );
}
