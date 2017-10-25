import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header';
import Navegation from './navegation/navegation';
import { HashRouter, Route} from 'react-router-dom';
import VisualizationsOne from './visualizations/one/visualizations_one';


const Root = () => {
  return (
    <div>
      <HashRouter>
        <div>
          <Header />
          <div>
            <Navegation/>
            <Route exact path="/visualizations/1" component={VisualizationsOne}/>
          </div>
        </div>
      </HashRouter>
    </div>
  );
};


export default Root;
