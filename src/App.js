import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import {Switch, Route, Redirect} from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCurrentUser} from './redux/user/userSelectors';
import Checkout from './pages/Checkout/Checkout';
//import {selectCollectionsForPreview} from './redux/shop/shopSelectors';
import {checkUserSession} from './redux/user/userActions';

class App extends React.Component{
	//constructor isn't needed anymore due to redux
	/*constructor(){
		super();
		this.state = {
	 		currentUser: null
		}
	}
	*/

	unsubscribeFromAuth = null

	componentDidMount(){
		const {checkUserSession} = this.props;
		checkUserSession();
	}

	componentWillUnmount(){
		this.unsubscribeFromAuth();
	}

	render(){
		return (
    		<div>
    			<Header/>
      			<Switch>
      				<Route exact path='/' component={Homepage}/>
      				<Route path='/shop' component={Shop}/>
      				<Route exact path='/checkout' component={Checkout}/>
      				<Route exact path='/signin' render={
      					() => this.props.currentUser ? (
      						<Redirect to='/'/>
      					) : (
      						<SignInAndSignUp/>
      					)
      				}
      				/>
     			 </Switch>
   			</div>
  );		
	}
  
}

const mapStateToProps = /*({user})*/ createStructuredSelector({
	currentUser: selectCurrentUser //user.currentUser
	//collectionsArray: selectCollectionsForPreview(state)
});

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
