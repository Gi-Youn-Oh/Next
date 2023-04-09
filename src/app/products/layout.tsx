import styles from './layout.module.css'
import Link from 'next/link'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '상품 페이지',
  description: '의류 상품 페이지 메인',
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode 
}) {
  return (
    <>
        <nav className={styles.nav}>
            <Link href="/products/men">남성옷</Link>
            <Link href="/products/women">여자옷</Link>
        </nav>
        <section className={styles.product}>
            {children}
        </section>
    </>
  )
}
