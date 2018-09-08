# react-d3-starter

A starter project aimed for data visualization with [React](http://facebook.github.io/react/), [D3](http://d3js.org) and [Webpack](https://webpack.github.io).

## Why another starter?

There are already tons of React starters on Github. But most of them are too complex for a beginner. Also, making React, Webpack and D3 to work together would be tricky for someone who is learning these libraries (That's the case for me at least).

That's why react-d3-starter exists: a truly simple starter project that a beginner can understand and begin to work on his/her great ideas.

## Thanks

Thanks to [Nicolas Hery](https://github.com/nicolashery)'s post *[Integrating D3.js visualizations in a React app](http://nicolashery.com/integrating-d3js-visualizations-in-a-react-app/)* and [Christian Alfoni](http://www.christianalfoni.com/) & [Juho Vepsäläinen](http://survivejs.com/)'s *[React Webpack cookbook](https://christianalfoni.github.io/react-webpack-cookbook/index.html)*.

This project would not be possible without these tutorials. They are great posts to learn more about React, D3 and Webpack.

## Usage

Supposed you already installed [Node.js](https://nodejs.org).

Clone the project, and:

    $ npm install
    $ npm run dev

 Then open [http://localhost:8080/](http://localhost:8080/) in a modern browser and start your development. All changes would be recompiled and the web page would be refreshed automatically.

 To deploy your project, run:

    $ npm run deploy

And then host files in `dist/`.

## Project Structure

This is the project structure after a `webpack` build:

    .
    ├── app/                // Source codes in here
    │   ├── chart.jsx       // A React component that uses a D3 class to draw something
    │   ├── d3_circle.js    // A "stateless" D3 class
    │   ├── index.html      // The entrance page, the "single page" in this single page app
    │   └── main.js         // The javascript main entrance
    ├── build/              // Files generated by `webpack`
    │   ├── bundle.js       // Javascript codes and dependencies generated by Webpack
    │   └── index.html      // The index.html copied from `app/`
    ├── dist/               // Distribution version generated by `npm run deploy`
    ├── node_modules/
    │   └── ...
    ├── .eslintrc
    ├── .gitignore
    ├── package.json
    ├── README.md
    ├── webpack.config.js   // Webpack's configuration file
    └── webpack.production.config.js   // Webpack's configuration file for deployment