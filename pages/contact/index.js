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
        <div className='about'>
          <img className='freddie' src='freddiePic.png' />
          <div className='blurb-holder'>
            <h2>About Me</h2>
            <p>I moved to Colorado 9 years ago to pursue an education in Fine Arts at the Rocky Mountain College of Art + Design. After living the "starving artist lifestyle" and bouncing from day-job to day-job I decided to attend the Turing School of Software + Design, hoping to utilize my creative background and pivot my career into software development. I fell in love with JavaScript and the never ending possibilities of coding. I enjoy the challenge that is presented with each project and the reward of learning and growing through the code.</p>
            <p>Outside of software development I am a man of many hobbies. As a music lover you'll regularly find me attending a live show or digging through crates at a record store. I take full advantage of the beautiful outdoors of Colorado and try to get to the mountains to hike or ski as often as possible. I bike everywhere I go and often go on long rides out to the Cherry Creek Resevoir. I recently started teaching myself guitar and yoga and have loved the new creative outlets. I also have a passion for craft beer and still work in a taproom because I love sharing that passion with others.</p>
          </div>
        </div>
        <div className='contact-info'>
          <h2>Contact Info</h2>
          <div className='contact-holder'><p>Email:</p> <a href="mailto:freddielev@gmail.com">freddielev@gmail.com</a></div>
          <div className='contact-holder'><p>Phone:</p><p>720-338-5004</p></div>
          <div className='find-me'>
            <h2> Find Me On</h2>
            <div className='logo-holder'>
              <a href='https://www.linkedin.com/in/freddie-levenson'><img src='linkedin.svg' /></a>
              <a href='https://www.github.com/flevenson'><img src='github.svg' /></a>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`

      main {
        background-color: #FFE279;
        height: 89.5vh;
        display: flex;
        align-items: center;
      }

      .about {
        height: 89.5vh;
        width: 75%;
        color: #7B3031;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        font-family: 'Raleway', sans-serif;
        padding: 30px;
      }

      .freddie {
        border: 4px solid #07A5FF;
        height: 300px;
      }

      .blurb-holder {
        width: 95%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        line-height: 1.4rem;
      }

      .contact-info {
        font-family: 'Raleway', sans-serif;
        color: #7B3031;
        background-color: #FE9892;
        height: 89.5vh;
        width: 25%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
      }

      h1 {
        font-size: 3.5rem;
        font-weight: 600;
      }

      .find-me {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 40%;
      }

      h2 {
        font-size: 2.5rem;
        font-weight: 600;
      }

      .contact-holder {
        display: flex;
        justify-content: space-between;
        width: 75%;
      }

      `}</style>
    </div>
  )
}
