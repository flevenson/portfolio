import Head from 'next/head'
import MainLayout from '../../components/mainlayout'
import Project from '../../components/project'
import * as Projects from '../../public/projects'

export default function Home() {

  const ProjectComponents = Projects.map(project => {
    return <Project />
  })

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
