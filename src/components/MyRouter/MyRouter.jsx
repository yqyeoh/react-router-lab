import React from 'react'
import NavLinks from '../NavLinks/NavLinks'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import TwitterFeed from '../TwitterFeed/TwitterFeed';
import TacosFeed from '../TacosFeed/TacosFeed'
import Unauthorized from '../Unauthorized/Unauthorized'
import TacoDetail from '../TacoDetail/TacoDetail'

function MyRouter() {
    const data="Hello World"
  return (
    <div>
        <BrowserRouter>
        <React.Fragment>
            <NavLinks/>
            <Switch>            
            <Route path='/twitter' render={(props)=><TwitterFeed data={data} {...props}/>}/>
            <Route path='/tacos/:id/:userid' component={TacosFeed}/>
            <Route path='/tacos' render={props=><TacosFeed userIsLoggedIn={false} {...props}/>}/>
            <Route path='/unauthorized' component={Unauthorized}/>
            <Route path='/' exact component={HomePage}/>
            <Redirect to='/'/>
            
            </Switch>
        </React.Fragment>
        </BrowserRouter>
    </div>
  )
}

export default MyRouter
