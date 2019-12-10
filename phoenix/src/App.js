import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

const Nav = lazy(() => import('./components/nav/nav'))
const Home = lazy(() => import('./components/home/home'));
const Dashboard = lazy(() => import('./components/dashboard'));
const Lesson = lazy(() => import('./components/lesson'));

function App() {
  return (
    <Switch>
      <Suspense fallback={<h3>Please wait...</h3>}>
        <Nav />
        <Route exact path='/' component={Home} />
        <Route path='/:user_id/dashboard' component={Dashboard} />
        <Route path='/create-content' component={Lesson} />
      </Suspense>
    </Switch>
  );
}

export default App;
