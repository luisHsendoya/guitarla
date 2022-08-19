import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';


export default function Home() {
  return (
    <Layout title='Home'>
      <Link href={'/nosotros'}>About Us</Link>

    </Layout>
  )
}
