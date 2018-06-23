import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AsyncComponent from '../Helpers/AsyncComponent';
import Header from '../Header/Header';
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
          {/*
            HOT FIX: It solves the issue when navigating routes and the scroll is not on the top
            of the page. More info -> https://github.com/ReactTraining/react-router/issues/2019#issuecomment-292711226
          */}
          <Route
            component={() => {
              // https://stackoverflow.com/a/8918062
              // NOTE: I installed the polyfill `smoothscroll-polyfill`
              window.scroll({
                behavior: 'smooth',
                left: 0,
                top: 0
              });

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
