export default function MainLayout() {
    return(
        <div>
            <div className='nav-bar'>
                <div className='home-icons'>
                    <a href="/">
                        <img className='guy-computer' src='online.svg'/>
                        <img className='fried-egg' src='fried-egg.svg'/>
                    </a>
                </div>
                <div className='heading-holder'>
                    <p className='heading'> Freddie Levenson </p>
                </div>
                <div className='nav-buttons'>
                    <a href="/portfolio">
                        <button>Portfolio</button>
                    </a>
                    <a href="/contact">
                        <button>Contact</button>
                    </a>
                </div>
            </div>
            <div className='nav-underline'></div>
         <style jsx>{`

            .nav-bar {
                background-color: #9CA5A2;
                display: flex;
                flex-direction: row;
                align-items: center;
                height: 10vh;
                padding: 20px;
                justify-content: space-between;
            }

            .nav-underline {
                height: 4px;
                background-color: #07A5FF;
            }

            .heading-holder {
                width: 60vw;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .heading {
                font-family: 'Carter One', cursive;
                font-size: 3rem;
                color: #7B3031;

            }

            .home-icons {
                width: 20vw;
                display: flex;
                justify-content: flex-start;
                flex-direction: row;
                align-items: center;
            }

            .guy-computer, .fried-egg {
                height: 60px;
            }

            .nav-buttons {
                width: 20vw;
                display: flex;
                justify-content: flex-end;
                flex-direction: row;
                align-items: center;
            }

            .nav-buttons button {
                border: none;
                background-color: transparent;
                font-family: 'Raleway', sans-serif;
                font-weight: 600;
                font-size: 1.3rem;
                color: #FE9892;
                cursor: pointer;
            }

        `}</style>
        </div>
    )
}