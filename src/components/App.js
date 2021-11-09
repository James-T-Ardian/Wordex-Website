import React from 'react'
import ApiInterface from './ApiInterface/ApiInterface'
import Navbar from './Navbar/Navbar'
import WebsiteTitle from './WebsiteTitle/WebsiteTitle'
import Home from './Home/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './General.css'

// Basically the <body> 
const App = () => {


  
  return (
    <Router>
      <Navbar />
        <WebsiteTitle />
      <Switch>
        <Route exact path="/Wordex-Website">
          <Home/>
        </Route>
        <Route path="/Wordex-Website/synonyms">
          <ApiInterface find="synonyms"/>
        </Route>
        <Route path="/Wordex-Website/antonyms">
          <ApiInterface find="antonyms"/>
        </Route>
        <Route path="/Wordex-Website/rhymes">
          <ApiInterface find="rhymes"/>
        </Route>
        <Route path="/Wordex-Website/examples">
          <ApiInterface find="examples"/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App