import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Freddie Levenson</title>
        <link rel="icon" href="/fried-egg.svg" />
      </Head>

      <main>
        working
      </main>

      <style jsx>{`

      main {
        font-family: 'Righteous', cursive;
      }
      `}</style>
    </div>
  )
}
