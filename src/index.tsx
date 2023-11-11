import ReactDOM from 'react-dom/client';

import {RouterProvider} from "react-router-dom";

import {router} from "./router";

import './style.index.css'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
           <RouterProvider router={router}/>
);

