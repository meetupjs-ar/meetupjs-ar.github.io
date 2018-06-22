import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AsyncComponent from '../AsyncComponent/AsyncComponent';
import Header from '../Header/Header';
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
              component={AsyncComponent({
                loader: () => import('../NotFound/NotFound')
              })}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Layout;
