import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Introduction from './pages/Introduction'
import SignIn from './pages/SignIn';
import VerifiyPhone from "./pages/VerifiyPhone";
import Register from './pages/register';
import Home from './pages/homePage'
import Login from './pages/Login';
import Premium from './pages/Premium';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name='login' component={Login}/>
        <Stack.Screen
          name="introduction"
          component={Introduction}
          options={{title: 'Welcome', headerShown: false}}
        />
        <Stack.Screen options={{headerShown: false}} name="home" component={Home} />
        <Stack.Screen options={{headerShown: false}} name="getrare" component={Premium} />
        <Stack.Screen options={{headerShown: false}} name="signin" component={SignIn} />
        <Stack.Screen options={{headerShown: false}} name="verify_phone" component={VerifiyPhone} />
        <Stack.Screen options={{headerShown: false}} name="register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App