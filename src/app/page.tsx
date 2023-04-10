import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import os from 'os' // 노드 API
import Counter from '@/components/Counter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log('안녕');
  console.log(os.hostname()); 
  return (
  <div>
    <h1>메인 페이지</h1>
    <Counter />
  </div>
  )
}
