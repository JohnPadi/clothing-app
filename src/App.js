import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import {Switch, Route, Redirect} from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import {auth, createUserProfileDocument} from './firebase/firebase.util';
import {connect} from 'react-redux';
//import { createStructuredSelector } from 'reselect';
import {setCurrentUser} from './redux/user/userActions';
import {selectCurrentUser} from './redux/user/userSelectors';
import Checkout from './pages/Checkout/Checkout';
//import {selectCollectionsForPreview} from './redux/shop/shopSelectors';

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
			//addCollectionAndDocuments('collections', collectionsArray);
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

const mapStateToProps = (state)/*({user})*/ => ({
	currentUser: selectCurrentUser(state) //user.currentUser
	
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
