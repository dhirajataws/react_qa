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
Tested on Chrome browser v63

## Steps
### Frontend
1. git clone https://github.com/dhirajataws/react_qa.git
2. cd reactq && yarn install.
3. yarn start. It will start the webpack-dev-server.
4. type http://localhost:3000 on browser to lauch the frontend.

### Backend

Start Backend:
1.	git clone https://github.com/dhirajataws/react_qa_backend.git
2. cd react_qa_backend && npm install
3. yarn start.
use curl http://localhost/carofweek  to test the server.

## Tests
automated unit testing: yarn test

## Customization
Frontend port can be reconfigured in webpack.config file.

## Enhancement
1. Data fetch can be extended to consume make and models information from server.
2. UX can be improved.
3. localStorage can be implemented for storing data locally.

## Issues
1. All the pages are not getting exposed individually.