import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../pages/contexts/auth';
import CookieStandAdmin from '@/components/CookieStandAdmin';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { user, login } = useAuth();
  return (
    <div className='bg-fuchsia-100 h-screen w-screen'>
      <Head />
      <Header />
      {user ?<CookieStandAdmin />:<LoginForm onLogin={login} />}</div>
  )
}
