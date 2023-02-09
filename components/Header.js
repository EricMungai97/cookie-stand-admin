import Link from "next/link";
export default function Header() {
  return (
    <header className='bg-violet-400 text-2xl text-white font-sans-bold p-4 flex justify-between'>
      <h1>Cookie Stand Admin</h1>
      <Link href="./Overview" className="rounded-lg border-2 bg-violet-300 p-1">Overview</Link>
    </header>
  );
}
