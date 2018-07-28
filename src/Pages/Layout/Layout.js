import React, { PureComponent } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AsyncComponent from '../Utils/AsyncComponent';
import Header from './Header/Header';
import Isna from './Isna/Isna';
import * as styles from './Layout.module.css';

class Layout extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div
          className={`${styles.bgGrayAlternative} ${styles.paddingTop68} ${
            styles.stretch
          } black-alternative sans-serif`}
        >
          <Header />
          <Route
            component={() => {
              /*
                Return the scroll to the top of the page when navigating
                https://github.com/ReactTraining/react-router/issues/2019#issuecomment-292711226
              */
              window.scroll({
                behavior: 'smooth',
                left: 0,
                top: 0
              });

              if (process.env.NODE_ENV === 'production') {
                ReactGA.pageview(window.location.href);
              }

              return null;
            }}
          />
          <Switch>
            <Route
              exact
              path="/"
              component={AsyncComponent({
                loader: () => import('../Home/HomePage')
              })}
            />
            <Route
              exact
              path="/blog.html"
              component={AsyncComponent({
                loader: () => import('../Blog/BlogListPage')
              })}
            />
            <Route
              exact
              path="/calendario.html"
              component={AsyncComponent({
                loader: () => import('../Calendar/CalendarPage')
              })}
            />
            <Route
              exact
              path="/articulos/:name.html"
              component={AsyncComponent({
                loader: () => import('../Blog/BlogArticlePage'),
                render(loaded, props) {
                  const Article = loaded.default;
                  return <Article name={props.match.params.name} />;
                }
              })}
            />
            <Route
              exact
              path="/coc.html"
              component={AsyncComponent({
                loader: () => import('../CodeOfConduct/CodeOfConductPage')
              })}
            />
            <Route
              exact
              path="/servicios.html"
              component={AsyncComponent({
                loader: () => import('../Status/StatusPage')
              })}
            />
            <Route
              component={AsyncComponent({
                loader: () => import('../NotFound/NotFoundPage')
              })}
            />
          </Switch>
          <Isna />
        </div>
      </BrowserRouter>
    );
  }
}

export default Layout;
