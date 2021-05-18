import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import ListView from '../listview/ListView'
import DetailsView from '../detailsview/DetailsView'

function App() {
    
    return (
        <diV>
            <div>
                <Link to='/'>List View</Link>
            </div>

            <Switch>
                <Route path="/details" component={DetailsView} />
                <Route path="/" component={ListView} />
            </Switch>
        </diV>
    )
}

export default App
