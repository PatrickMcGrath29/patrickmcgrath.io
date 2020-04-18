# patrickmcgrath.io

This is the source code for my personal website. The codebase is written with Vue.js and Nuxt.js, and deploys to Netlify. The content of the website describes various projects that I've worked on, lists different skills that I have acquired, and also has a UI for a [URL shortener that I built](https://github.com/PatrickMcGrath29/stella).

## Getting Started

[https://patrickmcgrath.io](https://patrickmcgrath.io)

### Prerequisites

- [Yarn](https://yarnpkg.com/lang/en/)
- [Node.js](https://nodejs.org/en/)

### Setup & Installation

```
brew install yarn

git clone https://github.com/PatrickMcGrath29/patrickmcgrath.io.git
```

Modify Environment Variables (`config/dev.env.js`, `config/prod.env.js`)

### Run Development Webserver

```
yarn dev
```

## Deployment

The master branch on the GitHub repository automatically deploys to production using Netlify's build and hosting services.

I'm currently using `nuxt generate` to generate static prerendered files for all of the non-dynamic routes. A redirect rule is configured in the `netlify.toml` file to enable support for redirects back to the `index.html` on dynamic routes.

## Built With

- [Nuxt.js](https://nuxtjs.org/) - The web framework used
- [Netlify](https://www.netlify.com/) - CI/CD, Hosting

## Authors

- [PatrickMcGrath29](https://github.com/PatrickMcGrath29)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
