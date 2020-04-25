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
        <div className='main-section'>
          <div className='blurb'>
            <p>Welcome to my portfolio site. I am a developer residing in Denver, CO specializing in Front End website development. Coming from a background in Fine Art I have found software engineering to be a fulfilling outlet for my creativity, giving me an endless canvas to bring my ideas to life. My background gives me both a keen eye for design and an ability to think outside the box when searching for solutions.</p>
            <p>I enjoy using my skills to help others and look forward to new opportunities to collaborate. I'm always looking for a project to sink my teeth into so please reach out on my contact page if you have a project I can help with. Check out the portfolio tab to see some examples of past projects I've worked on. Thanks for visiting!</p>
          </div>
          <img className='denver' src='denver-skyline-2.jpeg' />
        </div>
        <div className='icon-holder'>
          <div className='i-use'>
            <p>Tools I Use</p>
            <div className='icons'>
              <img src='react.svg' />
              <img src='redux.svg' />
              <img src='css3.svg' />
              <img src='html-5.svg' />
              <img src='nodejs.svg' />
              <img src='github.svg' />
              <img src='postgresql.svg' />
              <img src='figma.svg' />
            </div>
          </div>
          <div className='learning'>
            <p>Tools I am Learning</p>
            <div className='icons'>
              <img src='angularjs.svg' />
              <img src='amazon-web-services.svg' />
              <img src='vue-js.svg' />
              <img src='svelte.svg' />
              <img src='typescript.svg' />
              <img src='sass.svg' />
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`

      main {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .main-section {
        width: 70vw;
        height: 89.5vh;
        display: flex;
        flex-directon: column;
        align-items: center;
        font-family: 'Raleway', sans-serif;
        color: #7B3031;
        font-weight: 600;
        font-size: 1.3rem;
        flex-direction: column;
        justify-content: space-between;
      }

      .blurb {
        height: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 40px;
        line-height: 1.6rem;
      }

      .denver {
        width: 100%;
      }

      .icon-holder {
        display: flex;
        background-color: #7B3031;
        width: 30vw;
        height: 89.5vh;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        justify-content: space-around;
        font-family: 'Raleway', sans-serif;
        font-size: 2rem;
      }

      .i-use, .learning {
        display: flex;
        height: 50%;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
      }

      .i-use p, .learning p {
        color: #FFE279;
      }

      .icons {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: wrap;
      }

      .learning .icons {
        width: 85%;
      }

      .icons img {
        height: 80px;
        padding: 5px;
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
