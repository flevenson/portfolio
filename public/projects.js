const Projects = [
    {
        name: "Wrench-A-Part Check-in Sites",
        description: "For this project I collaborated with another developer to create 3 web interfaces for a client in Texas. They are a self-service salvage yard that allows you to check out a forklift and pick out your own parts. I used Figma to design 3 brand new interfaces for the client from the ground up. I created a check-in interface for customers to use when they come to the salvage yard, similar to checking in at the airport. After gathering the customers information the check in is sent to the database and the cashier sees these checkins come in live over websockets on the cashier's interface. Lastly we created an admin interface which allows the management to see and interact with customers, edit their contact info, and send text-blasts via the twilio api.",
        images: ["wrench-1.png", "wrench-2.png", "wrench-3.png"]
    },
    {
        name: "TruckTrackr",
        description: "TruckTrackr was a group project which was concieved as a solution to the problem of communication between food-trucks and those who would hire them in Denver. I worked with another front-end developer and two back-end developers to create a website where Food-Trucks and Breweries could create accounts and keep an up-to-date calendar with dates they are available, occupied, or seeking a booking. Our hope was to streamline the interaction between the two types of businesses, making communication easier and last-minute bookings/cancellations a problem of the past. The front-end we created used React.JS with Redux and the Back End was built with Ruby On Rails.",
        images: ["truck-trackr-1.png"]
    },    {
        name: "BeerBrainBattle",
        description: "This application was my first attempt at making a game using React.JS and the OpenTDB trivia API. I wanted to make a local version of the HQ trivia app, where you could play with friends or people at the bar and challenge each other for the next round of drinks or wager whatever you'd like. The idea was to make a last-person-standing trivia game where everyone got the opportunity to guess the answer and after each round anyone who got the question wrong was eliminated. The project was fun, rewarding, and making something that anyone could pick up and play with their friends gave me an awesome end product that anyone could enjoy. This project was designed and built independently.",
        images: ["beer-brain-1.png", "beer-brain-2.jpg"]
    },
]

export default Projects