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
          <div></div>
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

      .main-blurb {
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
