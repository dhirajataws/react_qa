# Project Title
FindCar is a utility to  help search cars online.

# Getting Started

FindCar displays car of week as a starting page. Car of the week is fetched from server deployed locally. can be searched based on make first and then model. Details of the car are displayed only after a model is selected. Selected make and model remains in the state.
Application is structured as frontend and backend.
Frontend is developed in React, Redux and React-thunk middleware. Webpack is used for bundle. Mocha as test runner and utilities from React used for testing.
Backend is created to expose microservices for data fetch. Backend supports CORS and developed using KOA framework using Typescript.

## Prerequisites

Node 8.6.0.
Ports 3000 for frontend and 8888 for backend.
Chrome browser v63

## Steps
1. Git clone project. It will have both frontend and backend server.

Start Backend:
2. cd  yarn start. It will start the server.
use curl http://localhost/carofweek  to test the server.

Start Frontend:
3. cd reactq && yarn install.
4. yarn start. It will start the webpack-dev-server. use http://localhost:3000 on browser to lauch the fronted.

## Tests
automated unit testing: yarn test

## Customization
Frontend port can be reconfigured in webpack.config file.

## Enhancement
1. Data fetch can be extended to consume make and models information from server.
2. UX can be improved.Like an error message or warning message can
be displayed with details button is not enabled.
3. localStorage can be implemented for storing data locally.

## Issues
1. All the pages are not getting exposed individually.
2. componentWillReceiveProps is invoked two times when the make changes.
    This logic can be improved by taking out the code for resetting model into
    reducer. One trade off while doing this is one reducer would be updating
    value meant to be changed by another reducer. This approach will make is
    little complex but would be better performance. Trade off between complexity
    and performance.