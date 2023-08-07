import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
    //document.getElementById('root'); - для работы этого надо поставит запятую после <App/>
    //и делаем import 'react-dom', вместо 'react-dom/client'
);

