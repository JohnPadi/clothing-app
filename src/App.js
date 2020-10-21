import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import {Switch, Route} from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import {auth, createUserProfileDocument} from './firebase/firebase.util';

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
		(async userAuth => {
			//this.setState({currentUser: user})
			//createUserProfileDocument(user);
			//console.log(user);
			if(userAuth){
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id, 
							...snapShot.data()
						}
					}); console.log(this.state);
				}); 
			}
			this.setState({currentUser: userAuth});
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
