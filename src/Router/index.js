import React from 'react'
import {HashRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import App from '../App'
import Home from '../Views/Home';
import Classify from '../Views/Classify';
import Mall from '../Views/Mall'
import Personal from '../Views/Personal';
import ActivityTemplate from '../Views/ActivityTemplate';
import AppPage from '../Views/AppPage';
import Hotlist from '../Views/Hotlist'
const router = <Router>
    <App>
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/classify" component={Classify}/>
            <Route path="/mall" component={Mall}/>
            <Route path="/personal" component={Personal}/>
            <Route path="/activityTemplate" component={ActivityTemplate}/>
            <Route path="/appPage" component={AppPage}/>
            <Route path="/hotlist" component={Hotlist}/>
            <Redirect from='/' to="/home" /> 
       </Switch>
    </App>
</Router>




export default router