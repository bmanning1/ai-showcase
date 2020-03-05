


# DeepMind: AI Comparison App

An interactive application for browsing and comparing AI agents​. The application displays overviews of individual AIs and allows comparing two AIs.

## Table of Contents

- [Running the app](#running-the-app)
    - [Start](#npm-start)
    - [Build](#npm-run-build)
    - [Learn More](#learn-more)
- [Notes](#notes)
- [TODO](#todo)
    - [Scalable](#scalable)
    - [Features](#features)
    - [Design](#design)
    - [Feedback](#feedback)

## Running the app

Run `npm i` to install the packages.<br />
To run the app locally, run `npm run start`.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### `npm start`

Runs the app in the development mode.<br />
The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

## Notes

- PropType is in place which is similar to typescript. It gives warnings in the console if a prop type is invalid.
- The app has been coded so that it will be easy to add more categories to display/compare
- The app has been coded so that it will be easy to add more agents to display/compare
- The data is transformed to store only the data needed in the component state to save memory in the app
- User tested:
    - Spoke to a data scientist

## TODO

If there was more time spent on the project, the following areas could be improved.

### Scalable:
- Pagination so that you do not load thousands of agents at once
- Use a global store such as Redux to reduce passing down information through components
- Add linting rules such as complexity
- Commits for each feature in the git history incase of rolling back
- Test using Jest
    - Functional with stubs
    - Unit

### Features:
- Add more information in the comparison tab
    - Range chart
    - Amount of tasks completed
- Option to sort or filter category scores

### Design:
- Display the error warnings in a nicer way
- Accessibility
- Change the favicon

### Feedback:
- Get feedback from the researchers

