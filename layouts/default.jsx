import Head from 'next/head'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>FootballFriend | {title}</title>
        <meta name="description" content="The simple football directory." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
