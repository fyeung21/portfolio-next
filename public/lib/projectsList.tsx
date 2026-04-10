export type keyFeature = {
  imgSrc: string;
  imgAltDesc: string;
  title: string;
  description: string;
};
export type screenshot = {
  imgSrc: string;
  imgAltDesc: string;
  caption: string;
};
export type Project = {
  title: string;
  imgSrc: string;
  imgAltDesc: string;
  cardBrief: string;
  cardTech: string[];
  slug: string;
  description: string;
  url: string;
  github: string;
  technologies: string[];
  keyFeatures: keyFeature[];
  screenshots: screenshot[];
  reflection: string;
};
export type ProjectList = {
  name: Project;
};

export const projectsList = {
  "catch-oscar": {
    title: "Catch Oscar",
    imgSrc: "/dose-juice.jpg",
    imgAltDesc: "thumbnail image of catch oscar project",
    cardBrief:
      "game that has 9 holes where different neighbourhood cats could appear out of.",
    cardTech: ["JavaScript", "jQuery"],
    slug: "catch-oscar",
    description:
      "‘Catch Oscar’ is a game that has 9 holes where different neighbourhood cats could appear out of. Only one cat will show at one time and will disappear after a couple seconds.",
    url: "https://fiona-yeung.com",
    github: "https://github.com/fyeung21/catch-oscar",
    techonologies: ["HTML", "CSS", "JavaScript", "jQuery"],
    keyFeatures: [
      {
        imgSrc: "/ph-shop.jpg",
        imgAltDesc: "",
        title: "view movie details",
        description:
          "A movie database website with functions for filtering movies, login, and favouriting.",
      },
      {
        imgSrc: "/ph-shop.jpg",
        imgAltDesc: "",
        title: "favourite movies",
        description:
          "A movie database website with functions for filtering movies, login, and favouriting.",
      },
      {
        imgSrc: "/ph-shop.jpg",
        imgAltDesc: "",
        title: "something else",
        description:
          "A movie database website with functions for filtering movies, login, and favouriting.",
      },
    ],
    screenshots: [
      { imgSrc: "/ph-shop.jpg", imgAltDesc: "", caption: "start page" },
      { imgSrc: "/ph-shop.jpg", imgAltDesc: "", caption: "game board" },
    ],
    reflection:
      "<p>From this project I learned a lot about DOM manipulation, array manipulation, and string interpolation. There were also logic questions I did not know I had to clarify like what happens when randomizing produces the same result as the last result. Not only did I learn how to develop this kind of reaction game, I also learned a little about how designing a game works and how to properly communicate it.</p><h4>Future Considerations</h4><ul><li>Improve on UI and UX design</li><li>Code refactoring, for example, change some if statements to switch cases.</li><li>Countdown after unpausing</li><li>Add a Leaderboard</li><li>Small bugs to clean up</li></ul>",
  },
  "eternal-aesthetic": {
    title: "Eternal Aesthetic",
    imgSrc: "/ph-shop.jpg",
    imgAltDesc: "thumbnail image of eternal aesthetic project",
    cardBrief:
      "An aesthetician clinic site something something different neighbourhood cats could appear out of.",
    cardTech: ["NextJS", "WordPress"],
    slug: "eternal-aesthetic",
    description:
      "An aesthetician clinic site something something different neighbourhood cats could appear out of. Only one cat will show at one time and will disappear after a couple seconds.",
    url: "https://fiona-yeung.com",
    github: "https://github.com/fyeung21/catch-oscar",
    techonologies: ["NextJS", "TailwindCSS", "WordPress"],
    keyFeatures: [
      {
        imgSrc: "/dose-juice.jpg",
        imgAltDesc: "",
        title: "view movie details",
        description:
          "A movie database website with functions for filtering movies, login, and favouriting.",
      },
      {
        imgSrc: "/dose-juice.jpg",
        imgAltDesc: "",
        title: "favourite movies",
        description:
          "A movie database website with functions for filtering movies, login, and favouriting.",
      },
    ],
    screenshots: [
      {
        imgSrc: "/dose-juice.jpg",
        imgAltDesc: "",
        caption: "home page",
      },
      {
        imgSrc: "/dose-juice.jpg",
        imgAltDesc: "",
        caption: "about page",
      },
    ],
    reflection:
      "From this project I learned a lot about DOM manipulation, array manipulation, and string interpolation. There were also logic questions I did not know I had to clarify like what happens when randomizing produces the same result as the last result. Not only did I learn how to develop this kind of reaction game, I also learned a little about how designing a game works and how to properly communicate it.",
  },
  "test-something": {
    title: "test something",
    imgSrc: "/dose-juice.jpg",
    imgAltDesc: "thumbnail image of catch oscar project",
    cardBrief:
      "game that has 9 holes where different neighbourhood cats could appear out of.",
    cardTech: ["JavaScript", "jQuery"],
    slug: "test-something",
    description:
      "‘Catch Oscar’ is a game that has 9 holes where different neighbourhood cats could appear out of. Only one cat will show at one time and will disappear after a couple seconds.",
    url: "https://fiona-yeung.com",
    github: "https://github.com/fyeung21/catch-oscar",
    techonologies: ["HTML", "CSS", "JavaScript", "jQuery"],
    keyFeatures: [
      {
        imgSrc: "/ph-shop.jpg",
        imgAltDesc: "",
        title: "view movie details",
        description:
          "A movie database website with functions for filtering movies, login, and favouriting.",
      },
      {
        imgSrc: "/ph-shop.jpg",
        imgAltDesc: "",
        title: "favourite movies",
        description:
          "A movie database website with functions for filtering movies, login, and favouriting.",
      },
      {
        imgSrc: "/ph-shop.jpg",
        imgAltDesc: "",
        title: "something else",
        description:
          "A movie database website with functions for filtering movies, login, and favouriting.",
      },
    ],
    screenshots: [
      { imgSrc: "/ph-shop.jpg", imgAltDesc: "", caption: "start page" },
      { imgSrc: "/ph-shop.jpg", imgAltDesc: "", caption: "game board" },
    ],
    reflection:
      "<p>From this project I learned a lot about DOM manipulation, array manipulation, and string interpolation. There were also logic questions I did not know I had to clarify like what happens when randomizing produces the same result as the last result. Not only did I learn how to develop this kind of reaction game, I also learned a little about how designing a game works and how to properly communicate it.</p><h4>Future Considerations</h4><ul><li>Improve on UI and UX design</li><li>Code refactoring, for example, change some if statements to switch cases.</li><li>Countdown after unpausing</li><li>Add a Leaderboard</li><li>Small bugs to clean up</li></ul>",
  },
};
