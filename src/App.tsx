/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable eqeqeq */
/*
   1) grid-container
   2) row
   3) center
   4) brand
*/
import React, { Component } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

import { connect } from "react-redux";
import SigninScreen from './screens/SigninScreen';

interface IState{}

interface IProps{
   count :any;
   finalArray:any;
   image:string;
}

class App extends Component<IProps,IState> {
   // eslint-disable-next-line @typescript-eslint/no-useless-constructor
   constructor(props:IProps){
      super(props);
   }
   render(){
      return (
         <React.Fragment>
            <Router>
               <div className="grid-container">
                  <header className="row">
                     <div>
                        <NavLink to="/" exact={true} strict className="brand">shivoid</NavLink>
                     </div>
    
                     <div>
                         <NavLink to={`/cart`} exact={true} strict><i className="fa fa-shopping-cart" aria-hidden="true"></i>
                         {this.props.count>0 ? (<span className="badge-success">{this.props.count}</span>) : (<span className="badge-empty">{this.props.count}</span>)}</NavLink>
                         {/* // eslint-disable-next-line eqeqeq */}
                         {/* // eslint-disable-next-line jsx-a11y/alt-text */}
                         {this.props.image == ''? [<NavLink to="/signin" exact={true} strict>Signin</NavLink>,<i className="fa fa-user-circle-o" style={{fontSize:"20px",color:"white",padding:"10px"}}></i>]: [<NavLink to="/" exact={true} strict>Signout</NavLink>,<NavLink to="/" exact={true} strict><img src={this.props.image} className="profile_pic"></img></NavLink>]}
                     </div>
                  </header>
    
                  <main>
                     <Route path="/" component={HomeScreen} exact={true} strict></Route>
                     <Route path="/product/:id" component={ProductScreen} exact={true} strict></Route>
                     <Route path="/cart/:id?" component={CartScreen} exact={true} strict></Route>
                     <Route path="/signin" component={SigninScreen} exact={true} strict></Route>
                  </main>
    
                  <footer className="row center">
                      copyright@shivoid.in
                  </footer>
               </div>
               
            </Router>
         </React.Fragment>
      );
   };
  
};

const receive = (state:any)=>{
   return{
      count : state.cart.finalArray.length,
      finalArray : state.cart.finalArray,
      image : state.signin.user_details.image
   }
}

const send = (dispatch:any)=>{
   return{

   }
};

export default connect(receive,send)(App);