import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header';
import Navegation from './navegation/navegation';
import { HashRouter} from 'react-router-dom';


const Root = () => {
  return (
    <div>
      <HashRouter>
        <div>
          <Header />
          <div>
            <Navegation/>

          </div>
        </div>
      </HashRouter>
    </div>
  );
};


export default Root;
