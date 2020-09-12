import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from '@react-navigation/native';

import WalkThroughScreen from "../screens/BaseActivity/walkthrough/index";
import MainActivity from '../screens/MainActivity/index';
import AdminMainActivity from '../screens/MainActivity/index_admin';
import Index from '../screens/BaseActivity/index';
import Signin from '../screens/BaseActivity/Signin/index';
import Signup from '../screens/BaseActivity/SignUp/index';
import '../stores/global';

const BaseActivity =
	createStackNavigator(
		{
		  	// WalkThroughScreen: { screen: WalkThroughScreen },
		  	SigninScreen: { screen: Signin },
		  	SignUpScreen: { screen: Signup },
			Index: { screen: Index },
			MainActivityScreen: { screen: MainActivity},
			AdminMainActivity: { screen: AdminMainActivity}
		},
		{
		    headerMode: "none",
		    navigationOptions: {
			    gesturesEnabled: false
		    }
		}
	)

const PrimaryNav = 
    // hasLogin == false ? 
	createStackNavigator(
		{
		    BaseActivity: { screen: BaseActivity }
		},
		{
		    headerMode: "none",
		    initialRouteName: "BaseActivity",
		    gesturesEnabled: false
		}
	)

const App = createAppContainer(PrimaryNav);

export default App;