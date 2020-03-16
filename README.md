# patrickmcgrath.io

This is the source code for my personal website. The codebase is written in VueJs, uses a prerender plugin that generates static HTML for the homepage to improve SEO, and deploys to Netlify. The content of the website describes various projects that I've worked on, lists different skills that I have acquired, and also has a UI for a [URL shortener that I built](https://github.com/PatrickMcGrath29/stella).

## Getting Started

### Environments

Production - [patrickmcgrath.io](https://patrickmcgrath.io)

### Prerequisites


- [Yarn](https://yarnpkg.com/lang/en/)

### Setup & Installation

```
brew install yarn
```


Clone Application

```
git clone https://github.com/PatrickMcGrath29/patrickmcgrath.io.git
```

Run Development Webserver
```
yarn start
```

## Deployment

The master branch on the GitHub repository automatically deploys to production using Netlify's build and hosting services.

At buildtime a prerendering plugin will generate static assets for most of the website in the `dist` directory, which enable better search engine indexing of the website while improving its performance on older browsers.

## Built With

* [Vue JS](https://vuejs.org/) - The web framework used
* [Netlify](https://www.netlify.com/) - CI/CD, Hosting

## Authors

* [PatrickMcGrath29](https://github.com/PatrickMcGrath29)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
