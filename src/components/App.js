import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import routes from "../routes";

import Layout from "./Layout/Layout";
import Loader from "./Loader/Loader";
import NotFound from "./NotFound/NotFound";

const HomePage = lazy(() =>
  import("../pages/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("../pages/MoviesPage" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "../pages/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */
  )
);

const App = () => (
  <BrowserRouter>
    <Layout>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={routes.home} exact component={HomePage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route path={routes.movies} component={MoviesPage} />
          <Route component={NotFound} />

          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </Layout>
  </BrowserRouter>
);

export default App;
