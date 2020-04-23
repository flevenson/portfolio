import Head from 'next/head'
import MainLayout from '../components/mainlayout'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Freddie's Portfolio</title>
        <link rel="icon" href="/fried-egg.svg" />
      </Head>
      <MainLayout />
      <main>
        <div className='main-blurb'>
          <p>Hello and welcome to my portfolio site. I am a Front End Web Developer and Designer and love using my creativity to bring an idea to life. I recently started Over Easy Web Solutions, a company focused on Full Stack Website development and design. This website is here to give you an introduction to me and to show you some of my work. </p>
          <p>Beyond software development I am a live music fanatic, vinyl collector, and artist. I recently started teaching myself yoga and guitar and have been loving the new creative outlets. I bike everywhere I go and really enjoy the excercise, fresh air, and being outside so much. I've been living in Colorado for 9 years after moving from New York and found it hard to leave. </p>
          <p>Thanks for checking out my website, I'd love the opportunity to work together and bring your idea out into the world. Please check out my projects and feel free to reach out anytime if you have an idea or project you'd like my help with.</p>
        </div>
        <div className='pic-holder'>
          <img className='freddie-pic' src='freddiePic.png' />
        </div>
      </main>

      <style jsx>{`

      main {
        display: flex;
        align-items: center;
        justify-content: space-around;
      }

      .main-blurb, .pic-holder {
        width: 50vw;
        height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .main-blurb {
        font-family: 'Raleway', sans-serif;
        color: #7B3031;
        font-weight: 600;
        font-size: 1.3rem;
        padding-left: 40px;
        flex-direction: column;
        justify-content: space-evenly;
      }


      .freddie-pic {
        border: 4px solid #07A5FF;
      }

      .container {
        background-color: #FFE279;
        height: 100vh;
      }
      `}</style>
    </div>
  )
}
