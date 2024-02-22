import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Introduction from './pages/Introduction'
import SignIn from './pages/SignIn';
import EditProfile  from './pages/homePage/components/editFormSubmitBtn/EditProfile';
import VerifiyPhone from "./pages/VerifiyPhone";
import Register from './pages/register';
import Home from './pages/homePage'
import Login from './pages/Login';
import Premium from './pages/Premium';
import Contact from './pages/homePage/components/Contact';
import ProfileDetail from './pages/homePage/components/ProfileDetail' 
import MyPolicyPage from './pages/homePage/components/MyPolicyPage';
import { getLoggedInUser } from './pages/auth/auth'
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from './store/reduxStore'
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

const App = () => {
  const { pending, getUser, user } = getLoggedInUser()

  // AsyncStorage.clear()
  React.useEffect(() => {
    getUser()
  }, [])

  return (
    <Provider store={store}>
      {
        !pending ?
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={!user ? 'login' : 'home'}
          >
            <Stack.Screen options={{headerShown: false}} name='login' component={Login}/>
            <Stack.Screen options={{headerShown: false}} name="home" component={Home} />
            <Stack.Screen
              name="introduction"
              component={Introduction}
              options={{title: 'Welcome', headerShown: false}}
            />
            <Stack.Screen options={{headerShown: false}} name="getrare" component={Premium} />
            <Stack.Screen options={{headerShown: false}} name="contact" component={Contact} />
            <Stack.Screen options={{headerShown: false}} name="mypolicy" component={MyPolicyPage} />  
            <Stack.Screen options={{headerShown: false}} name="profileDetail" component={ProfileDetail} />
            <Stack.Screen options={{headerShown: false}} name="signin" component={SignIn} />
            <Stack.Screen options={{headerShown: false}} name="verify_phone" component={VerifiyPhone} />
            <Stack.Screen options={{headerShown: false}} name="register" component={Register} />
            <Stack.Screen options={{headerShown: false}} name="editProfile" component={EditProfile} />

          </Stack.Navigator>
        </NavigationContainer> :
        <Text>Loding</Text>
      }
    </Provider>
  );
};

export default App