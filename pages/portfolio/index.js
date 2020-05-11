import Head from 'next/head'
import MainLayout from '../../components/mainlayout'
import Project from '../../components/project'
import Projects from '../../public/projects'

export default function Home() {

  const ProjectComponents = Projects.map(project => {
    return <Project name={project.name} description={project.description} images={project.images} />
  })

  return (
    <div className="container">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/fried-egg.svg" />
      </Head>

      <MainLayout />
      <main>
          { ProjectComponents }
      </main>

      <style jsx>{`
      `}</style>
    </div>
  )
}
