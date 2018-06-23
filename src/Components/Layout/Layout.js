import React, { PureComponent } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import AsyncComponent from '../Helpers/AsyncComponent';
import Isna from '../Isna/Isna';
import * as styles from './Layout.module.css';

class Layout extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div
          className={`${styles.bgGrayAlternative} ${styles.paddingTop68} ${
            styles.stretch
          } black-alternative lh-copy sans-serif`}
        >
          <Header />
          <Route
            component={() => {
              /*
                Return the scroll to the top of the page when navigating
                https://github.com/ReactTraining/react-router/issues/2019#issuecomment-292711226
              */
              window.scroll({
                behavior: 'smooth', // I installed `smoothscroll-polyfill`
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
                loader: () => import('../Home/Home')
              })}
            />
            <Route
              exact
              path="/blog.html"
              component={AsyncComponent({
                loader: () => import('../Blog/List')
              })}
            />
            <Route
              exact
              path="/calendario.html"
              component={AsyncComponent({
                loader: () => import('../Calendar/Calendar')
              })}
            />
            <Route
              exact
              path="/articulos/:name.html"
              component={AsyncComponent({
                loader: () => import('../Blog/Article'),
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
                loader: () => import('../CodeOfConduct/CodeOfConduct')
              })}
            />
            <Route
              exact
              path="/servicios.html"
              component={AsyncComponent({
                loader: () => import('../Status/Status')
              })}
            />
            <Route
              component={AsyncComponent({
                loader: () => import('../NotFound/NotFound')
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
