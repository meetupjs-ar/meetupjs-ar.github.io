import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CodeOfConduct from '../CodeOfConduct/CodeOfConduct';
import Header from '../Header/Header';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import * as styles from './Layout.module.css';

class Layout extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div
          className={`${styles.bgGrayAlternative} ${
            styles.paddingTop68
          } black-alternative sans-serif`}
        >
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/coc.html" component={CodeOfConduct} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Layout;
