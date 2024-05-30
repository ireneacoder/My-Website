import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './nav bar/nav';
import App from './app/app';
import './index.css'
import Routing from './routing/routing';
import Healthyfi from './healthyfi app/healthyfi';
import '@coreui/coreui/dist/css/coreui.min.css'
import { ParallaxProvider } from 'react-scroll-parallax';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ParallaxProvider>
    
    <Routing/>

    </ParallaxProvider>    
  </>
    
  
);



