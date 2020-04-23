import Head from 'next/head'
import MainLayout from '../../components/mainlayout'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/fried-egg.svg" />
      </Head>

      <MainLayout />
      <main>
          <p>Contact not setup</p>
      </main>

      <style jsx>{`
      `}</style>
    </div>
  )
}
