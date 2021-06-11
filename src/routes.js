import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Sapatos from './pages/sapatos';
import Camisetas from './pages/camisetas';
import Calca from './pages/calcas';
import Header from './components/header';
import Footer from './components/footer';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sapatos" component={Sapatos} />
            <Route path="/camisetas" component={Camisetas} />
            <Route path="/calcas" component={Calca} />
        </Switch>
        <Footer />
    </BrowserRouter>
);

export default Routes;