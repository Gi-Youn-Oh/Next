import Image from 'next/image'
import os from 'os' // 노드 API
import Counter from '@/components/Counter'

export default function Home() {
  console.log('안녕');
  console.log(os.hostname()); 
  return (
  <div>
    <h1>메인 페이지 버전 3</h1>
    <Counter />
    <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" alt="shop" width={400} height={400} />
  </div>
  )
}
