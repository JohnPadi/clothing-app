import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import {Switch, Route} from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import {auth} from './firebase/firebase.util';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null

	componentDidMount(){
		this.unsubscribeFromAuth = auth.onAuthStateChanged
		(user => {
			this.setState({currentUser: user})
			console.log(user);
		});
	}

	componentWillUnmount(){
		this.unsubscribeFromAuth();
	}

	render(){
		return (
    		<div>
    			<Header currentUser={this.state.currentUser}/>
      			<Switch>
      				<Route exact path='/' component={Homepage}/>
      				<Route exact path='/shop' component={Shop}/>
      				<Route exact path='/signin' component={SignInAndSignUp}/>
     			 </Switch>
   			</div>
  );		
	}
  
}

export default App;
