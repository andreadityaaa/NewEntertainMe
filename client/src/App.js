import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import {client} from './config/client'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Home} from './pages/Home'
import {Movies} from './pages/Movies'
import {TVSeries} from './pages/TVSeries'
import {AddMovie} from './pages/AddMovie'

function App() {
  
  const styles = {
    body: {
      paddingLeft: 100, 
      paddingTop: 50, 
      paddingBottom: 40,
      marginLeft: 0,
      backgroundSize: 'cover',
      overflow: 'hidden',
      backgroundImage: `url(https://www.slashgear.com/wp-content/uploads/2020/04/star-wars-backgrounds-25.jpg)`
    },
    wrapper: {
      marginRight:0, 
      minHeight:'100vh', 
      fontFamiliy: 'Roboto Condensed'
    }
  }
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="row" style={styles.wrapper}>
          <div className="col" style={styles.body}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/movies" component={Movies} />
              <Route exact path="/tvseries" component={TVSeries} />
              <Route exact path="/addMovie" component={AddMovie} />
            </Switch>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;