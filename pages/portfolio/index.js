import Head from 'next/head'
import MainLayout from '../../components/mainlayout'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/fried-egg.svg" />
      </Head>

      <MainLayout />
      <main>
          <p>Portfolio page not set up</p>
      </main>

      <style jsx>{`
      `}</style>
    </div>
  )
}
