# patrickmcgrath.io

Patrick McGrath's personal website.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Environments

Production - [patrickmcgrath.io](https://patrickmcgrath.io)

### Prerequisites


[Yarn](https://yarnpkg.com/lang/en/)

```
brew install yarn
```

### Installing

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

At buildtime a prerendering plugin will generate static assets for most of the website in the dist directory, which enable better search engine indexing of the website while improving its performance on older browsers.

## Built With

* [Vue JS](https://vuejs.org/) - The web framework used
* [Netlify](https://www.netlify.com/) - CI/CD, Hosting

## Authors

* [PatrickMcGrath29](https://github.com/PatrickMcGrath29)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
