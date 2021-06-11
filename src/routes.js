import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
    </BrowserRouter>
);

export default Routes;