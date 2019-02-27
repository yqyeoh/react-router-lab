import React from 'react'
import NavLinks from '../NavLinks/NavLinks'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import TwitterFeed from '../TwitterFeed/TwitterFeed';
import TacosFeed from '../TacosFeed/TacosFeed'
import TacoDetail from '../TacoDetail/TacoDetail'

function MyRouter() {
    const data="Hello World"
  return (
    <div>
        <BrowserRouter>
        <React.Fragment>
            <NavLinks/>
            <Switch>            
            <Route path='/tacos/:id/:userid' component={TacosFeed}/>
            <Route path='/twitter' render={(props)=><TwitterFeed data={data} {...props}/>}/>
            <Route path='/tacos' component={TacosFeed}/>
            <Route path='/' component={HomePage}/>
            </Switch>
        </React.Fragment>
        </BrowserRouter>
    </div>
  )
}

export default MyRouter
