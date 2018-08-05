# patrickmcgrath.io

Patrick McGrath's personal website.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Environments


Production - [patrickmcgrath.io](https://patrickmcgrath.io)

### Prerequisites


[Yarn](https://yarnpkg.com/lang/en/)

[s3cmd](https://github.com/s3tools/s3cmd)
```
For MAC:

brew install yarn
brew install s3cmd
s3cmd --configure (and input S3 access keys)
```


### Installing

Clone Application

```
git clone https://github.com/PatrickMcGrath29/patrickmcgrath.io-ui.git
```

Setup Environment Variables

```
cp .env.sample .env
and then edit with live-values
```

Run Development Webserver
```
yarn start
```

## Running the tests

The test suite is not currently setup. Plans to implement Mocha tests (probably...) with ESLint

## Deployment

This application is entirely static, stored on Amazon's S3 and served to users via Amazon's Cloudfront CDN. To deploy a new version of the website to S3 you can use the deployment script `bin/deploy`.

## Built With

* [Vue JS](#) - The web framework used

## Authors

* **Patrick McGrath** - *Lead Developer* - [PatrickMcGrath29](https://github.com/PatrickMcGrath29)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
