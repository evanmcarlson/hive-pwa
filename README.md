# Hi from the Hive 👋

This is the working repository for the Innovation Hive makerspace at the University of San Francisco. The repository contains a progressive web app using the React library. The web application acts as the first point of contact for students to explore and utilize the transformational space. View the [live deployment](http://usfca.hive.s3-website-us-west-1.amazonaws.com) now.


## Getting started

We chose to use [Yarn](https://yarnpkg.com) for package management during development. If you don't have yarn, install it via command line using `curl -o- -L https://yarnpkg.com/install.sh | bash`

Once you have forked, cloned or downloaded the repository, follow these steps to develop on it locally:

### `yarn`

Resolves packages, install dependencies.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The contents of the 'build' folder are ready to be deployed!

We have used Github Actions for CI/CD with this repository to upload contents of build folder to an AWS S3 bucket.


### Resources

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Making a [Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app).
