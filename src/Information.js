import WeatherDashboard from "./assets/images/WeatherDashboard.png";
import DailyPlanner from "./assets/images/DailyPlanner.png";
import MarvelCrossover from "./assets/images/MarvelCrossover.png";
import OooDaBurger from "./assets/images/OooDaBurger.png";
import TheNoteTaker from "./assets/images/TheNoteTaker.png";
import TeamProfileGenerator from "./assets/images/TeamProfileGenerator.png";
import EmployeeTracker from "./assets/images/EmployeeTracker.png";

export let projects = [
  {
    id: 0,
    title: "Weather Dashboard",
    description:
      "A weather dashboard for users to search the weather forcast in their city or other locations. This application features the current day as well as the five-day forcast for the upcoming days. This includes humidity, wind speed, current date(s), high and low temperatures for that day, the uv index for that city, icons for a visual representation of the weather, and local storage for those who wants to return to the application with the same city suggestion as previously searched. I was very proud of this application because not only was I able to get everything functioning the way I wanted, I personally designed this application how I would want to see my weather updates; Looking fun, engaging, and most of all functional for everything I need and want in a weather application.",
    languages: [" HTML ", "|", " CSS ", "|", " Bootstrap "],
    gitHub: "https://github.com/Samya129/Weather-Dashboard",
    deployed: "https://samya129.github.io/Weather-Dashboard/",
    image: WeatherDashboard,
    alt: "Weather Dashboard Demo Image",
  },
  {
    id: 1,
    title: "Daily Planner",
    description:
      "An active daily planner for users with a busy schedule that allows access to their inputs throughout the day. Users are able to keep their schedules and tasks organized throughout their busy work week. This application features local storage for users to refresh the page with their saved daily tasks or schedule. It also features a present, past, and future color coded element to this application. Each color specifies what time in the day you are currently in, whether that be present day(green), past(grey), or future(red).",
    languages: [
      " HTML ",
      "|",
      " CSS powered by jQuery ",
      "|",
      " Luxon ",
      "|",
      " Moment.js",
    ],
    gitHub: "https://github.com/Samya129/DailyPlanner",
    deployed: "https://samya129.github.io/DailyPlanner/",
    image: DailyPlanner,
    alt: "Daily Planner Demo Image",
  },
  {
    id: 2,
    title: "Marvel Crossover",
    description:
      "A Marvel inspired application that allows users to search Marvel Superheroes and discover where these heroes can be seen in action as far as films. This appliation features our title, Marvel Overlaps, which by our goal merges the worlds of Marvel Comics and the Marvel Cinematic Universe. Users are able to search for their favorite heroes and learn more on their biological information, number of comic and series appearances, as well as the Marvel movies in which they have been featured in.",
    languages: [
      "HTML ",
      "|",
      " CSS powered by jQuery ",
      "|",
      " Javascript ",
      "|",
      " Foundation CSS-Framework ",
      "|",
      " FontAwesome",
    ],
    gitHub: "https://github.com/Samya129/marvel-crossover",
    deployed: "https://samya129.github.io/marvel-crossover/",
    image: MarvelCrossover,
    alt: "Marvel Crossover Demo Image",
  },
  {
    id: 3,
    title: "Ooo-da-Burger",
    description:
      "A fun and appetizing application that allows users to order your favorite burgers from the menu, eat it, order another or a different type of burger at the user's discretion, and get rid of all the evidence after you're done devouring this taste of deliciousness.",
    languages: [
      "HTML ",
      "|",
      " CSS ",
      "|",
      " ES6 ",
      "|",
      " MySQL ",
      "|",
      " Inquirer ",
      "|",
      " Express ",
      "|",
      " Handlebars",
    ],
    gitHub: "https://github.com/Samya129/Burger",
    deployed: "https://immense-lake-44688.herokuapp.com/",
    image: OooDaBurger,
    alt: "Burger Application Visual",
  },
  {
    id: 4,
    title: "The Note Taker",
    description:
      "A quick and useful note taking application that uses Express and Inquirer to successfully create, save, view, and delete a user's notes efficiency.",
    languages: [
      "Javascript ",
      "|",
      " Express ",
      "|",
      " ES6 ",
      "|",
      " Inquirer",
    ],
    gitHub: "https://github.com/Samya129/Weather-Dashboard",
    deployed: "https://samya129.github.io/Weather-Dashboard/",
    image: TheNoteTaker,
    alt: "The Note Taker Intro Page",
  },
  {
    id: 5,
    title: "Team-Profile-Generator",
    description:
      "A Node based command-line application that generates information regarding a business' engineering team while populating a HTML page pertaining to summaries of each employee's information. The color-coded cards are also included to associate each employee's job title for smooth, effortless, readability. Moreover, this application features a user's card with their prospective links to e-mail the employee directly or to direct a user to the engineer's github page.",
    languages: ["Javascript ", "|", " Node Package Manager ", "|", " ES6"],
    gitHub: "https://github.com/Samya129/Team-Profile-Generator",
    deployed:
      "https://drive.google.com/file/d/12ynJW8ILGZ4giunP75aKGL6w__G-v23U/view",
    image: TeamProfileGenerator,
    alt: "Team-Profile-Generator File Image",
  },
  {
    id: 6,
    title: "Employee-Tracker powered by MySQL",
    description:
      "A MySQL application that consists of a Content Management System (interface) that is easily accessible for non-developers to view and interact with databases that have stored data. By using inquirer along with Node and mysql, a business company can manage their employees.",
    languages: ["MySQL ", "|", " Inquirer ", "|", " Node Package Manager"],
    gitHub: "https://github.com/Samya129/MySQL-Employee-Tracker",
    deployed:
      "https://drive.google.com/file/d/1lYbAULJxS2TF-Z2f6Xm_WeX4ikGtwz5W/view",
    image: EmployeeTracker,
    alt: "Employee Tracker Demo Image",
  },
];
