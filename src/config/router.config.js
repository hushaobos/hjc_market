export const routeConfig = [
  { path: '/',
    component: './APP',
    indexRoute: { component: './APP' }
  }
];
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { 
//   Router, 
//   Route,
//   browserHistory
// } from 'react-router';
// import {BrowserRouter,} from 'react-router-dom';

// const About = () => {
//   return(
//      <h3>About</h3>
//   )
// }

// const Inbox = () => {
//     return (
//       <div>
//         <h2>Inbox</h2>
//         {this.props.children || "Welcome to your Inbox"}
//       </div>
//     )
// }

// const Message = () =>{
//     return <h3>Message {this.props.params.id}</h3>
// }
// export const routeConfig = () => {return <Router history={browserHistory}>
//     <Route path="/" component={App}>
//       <Route path="about" component={About} />
//       <Route path="inbox" component={Inbox}>
//         <Route path="messages/:id" component={Message} />
//       </Route>
//     </Route>
//   </Router>}