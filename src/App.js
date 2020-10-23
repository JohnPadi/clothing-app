import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import {Switch, Route} from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import {auth, createUserProfileDocument} from './firebase/firebase.util';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/userActions';

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
		const {setCurrentUser} = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged
		(async userAuth => {
			//this.setState({currentUser: user})
			//createUserProfileDocument(user);
			//console.log(user);
			if(userAuth){
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapShot => {
					setCurrentUser({
							id: snapShot.id, 
							...snapShot.data()
						}); 
				}); 
			}
			setCurrentUser(userAuth);
		});
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
      				<Route exact path='/shop' component={Shop}/>
      				<Route exact path='/signin' component={SignInAndSignUp}/>
     			 </Switch>
   			</div>
  );		
	}
  
}
const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
