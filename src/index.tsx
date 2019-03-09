import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css';
import 'typeface-roboto';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {lightTheme} from './theme';
import {store} from './config';
import {Provider} from 'react-redux';
import AppRouter from './router';
import Loading from './components/Loading';
import * as serviceWorker from './serviceWorker';

createGlobalStyle`
    *,*::after,*::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 16px;
    }
    body {
        font-size: 1rem;
        margin: 0;
        padding: 0;
    }
`;

ReactDOM.render(<Loading />, document.getElementById('root'));

const ComposedApp = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </ThemeProvider>
  );
};

ReactDOM.render(<ComposedApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
