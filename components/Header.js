import Link from "next/link";
import { useAuth } from '../contexts/auth';
export default function Header() {
  const { user, logout } = useAuth();
  return (
    <header className='bg-violet-400 text-2xl text-white font-sans-bold p-4 flex justify-between items-center'>
  <h1 className="text-2xl font-extrabold ml-40">Cookie Stand Admin</h1>
  <div className="flex">
    {user && (
      <>
      <h2 className="text-sm rounded border-0 bg-violet-300 p-1 mr-4" >{user.username}</h2>
      <a href=" " className="rounded-lg border-2 bg-violet-400 p-1 mr-4" onClick={logout}>
        Sign Out
      </a>
      </>
    )}
    <Link href="./Overview" className="rounded-lg border-2 bg-violet-300 p-1">Overview</Link>
  </div>
</header>
  );
}
