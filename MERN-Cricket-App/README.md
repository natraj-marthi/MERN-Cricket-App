# react-redux-examples
React app with redux and jest

## Subtopics

* Day 1
  * Hello World
  * Adding Bootstrap and base styles
  * Printing data from arrays, lists
* Day 2
  * Components - Creation, Lifecycle, JSX in Components
  * Passing data to components using props
* Day 3
  * Routing
  * Conditional Rendering
  * Services using Axios
* Day 4
  * Forms
* Day 5
  * Redux
* Day 6
  * State management with JWT and Session management
  * Handling routing with state (ACL)

## Installing yarn

```bash
  npm install -g yarn
```

## Creating new react application 

```npx create-react-app hello-world```

>This Creates a new react application


## Starting application

```bash
  cd hello-world
  yarn start
```

>The app will now run on localhost:3000

## Day 1

### Hello World

Go to App.js and edit the ```<p>``` tag to display ```Hello World! from App.js```

### Adding Bootstrap for styling

Run the command  ```yarn add bootstrap reactstrap```

Go to index.js and add the following import before index.css import.

```javascript
  import 'bootstrap/dist/css/bootstrap.min.css';
```

Create a new folder under /src called components and under components create your custom header component which will contain the application [header](https://reactstrap.github.io/components/navbar/).

Now import the header file in App.js.

## Day 3

### Adding routes to application

We can implement routes using the *[react-router](https://reacttraining.com/react-router/web/guides/quick-start)* library.

```yarn add react-router-dom```

In App.js add the following lines:

```javascript
  class App extends Component {
    render() {
      return (
        <Router>
          <div className="App">
          <NavBar/>
          <Route  path="/" exact component={Home}/>
          <Route  path="/players" component={Players}/>
          <Footer/>
          </div>
        </Router>
      );
    }
  }
```

### Installing MongoDB

Install mongoDB (ver 4.0.4) from [here](https://www.mongodb.com/download-center/community). Select the MSI package instead of ZIP

After downloading, install with recommended settings. Once, the installation is complete, set path in environment variables and create a folder /data/db in C drive.

Once the path is set, run the command

```bash
mongod
```

The mongodb server should be up and running now.

### Installing Robo3T

Download and install [Robo3T](https://robomongo.org/download). Make sure to download only, **Robo3t** and not studio3t.


### Installing axios

Axios is a framework that provides promise based Ajax request api,
That can connect to back end server and fetch data

```bash
  yarn add axios
```