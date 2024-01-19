import {
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
// import AuthNavigation from './src/navigation/AuthNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Auth/Login';
import Register from './screens/Auth/Signup';
import ForgotPassword from './screens/Auth/ForgotPassword';
import Home from './screens/Main/Home';
import Cart from './screens/Main/Cart/Cart';
import BottomTab from './screens/BottomTab';
import Profile from './screens/Main/Profile/Profile';
import MyOrders from './screens/Main/Profile/MyOrders/MyOrders';
import OrderDetails from './screens/Main/Profile/MyOrders/OrderDetails';
import Settings from './screens/Main/Profile/Settings/Settings';
import ProductDesc from './screens/Main/ProductDesc/ProductDesc';
import Favourite from './screens/Main/Favourite/Favourite';
import Checkout from './screens/Main/Checkout/Checkout';
import SuccessPage from './screens/Main/SuccessPage/SuccessPage';
import Addresses from './screens/Main/Checkout/Addresses';
import AddAddress from './screens/Main/Checkout/AddAddress';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AnimatedSplash from 'react-native-animated-splash-screen';
import {Images} from './Assets';
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const Stack = createStackNavigator();
  useEffect(() => {
    const timeOut = setTimeout(() => setIsLoaded(true), 2000);
    return () => clearTimeout(timeOut);
  }, []);
  return (
    <>
      <AnimatedSplash
        translucent={true}
        logoImage={Images.Logo}
        isLoaded={isLoaded}
        logoHeight={0.9 * Dimensions.get('screen').width}
        backgroundColor="white"
        logoWidth={0.9 * Dimensions.get('screen').width}>
        <SafeAreaProvider>
          <View
            style={{
              flex: 1,
            }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
            <NavigationContainer>
              <Stack.Navigator initialRouteName="login">
                <Stack.Screen
                  options={{
                    headerShown: false,
                  }}
                  name="login"
                  component={Login}
                />
                <Stack.Screen
                  options={{
                    headerShown: false,
                  }}
                  name="register"
                  component={Register}
                />
                <Stack.Screen
                  options={{
                    headerShown: false,
                  }}
                  name="forgot"
                  component={ForgotPassword}
                />
                <Stack.Screen
                  options={{
                    headerShown: false,
                    animation: 'slide_from_left',
                  }}
                  name="home"
                  component={Home}
                />
                <Stack.Screen
                  options={{
                    headerShown: true,
                    title: '',
                    headerBackground: () => (
                      <Text className=" m-0 bg-white shadow-2xl shadow-black h-full "></Text>
                    ),
                    animation: 'slide_from_left',
                  }}
                  name="productDesc"
                  component={ProductDesc}
                />
                <Stack.Screen
                  options={{
                    headerShown: true,
                    title: '',
                    headerBackground: () => (
                      <Text className=" m-0   h-full "></Text>
                    ),
                    animation: 'slide_from_bottom',
                  }}
                  name="cart"
                  component={Cart}
                />
                <Stack.Screen
                  options={{
                    headerShown: true,
                    title: '',
                    headerTitleAlign: 'center',
                    headerBackground: () => (
                      <Text className=" m-0   h-full "></Text>
                    ),
                    animation: 'slide_from_bottom',
                  }}
                  name="favourite"
                  component={Favourite}
                />
                <Stack.Screen
                  options={{
                    headerShown: true,
                    title: '',
                    headerBackground: () => (
                      <Text className=" m-0   h-full "></Text>
                    ),
                    animation: 'slide_from_bottom',
                  }}
                  name="profile"
                  component={Profile}
                />
                <Stack.Screen
                  options={{
                    headerShown: true,
                    title: '',
                    headerBackground: () => (
                      <Text className=" m-0   h-full "></Text>
                    ),
                    animation: 'slide_from_bottom',
                  }}
                  name="orders"
                  component={MyOrders}
                />
                <Stack.Screen
                  options={{
                    headerShown: true,
                    title: '',
                    headerBackground: () => (
                      <Text className=" m-0 bg-transparent h-full "></Text>
                    ),
                    animation: 'slide_from_bottom',
                  }}
                  name="orderDetails"
                  component={OrderDetails}
                />
                <Stack.Screen
                  options={{
                    headerShown: true,
                    title: '',
                    headerBackground: () => (
                      <Text className=" m-0 bg-transparent h-full "></Text>
                    ),
                    animation: 'slide_from_bottom',
                  }}
                  name="settings"
                  component={Settings}
                />
                <Stack.Screen
                  options={{
                    headerShown: true,
                    title: 'Checkout',
                    headerTitleAlign: 'center',
                    headerBackground: () => (
                      <Text className=" m-0 bg-white shadow-2xl shadow-black h-full "></Text>
                    ),
                    animation: 'slide_from_bottom',
                  }}
                  name="checkout"
                  component={Checkout}
                />
                <Stack.Screen
                  options={{
                    headerShown: true,
                    title: 'Shipping Address',
                    headerTitleAlign: 'center',
                    headerBackground: () => (
                      <Text className=" m-0 bg-white shadow-2xl shadow-black h-full "></Text>
                    ),
                    animation: 'slide_from_bottom',
                  }}
                  name="address"
                  component={Addresses}
                />
                <Stack.Screen
                  options={{
                    headerShown: true,
                    title: 'Adding Shipping Address',
                    headerTitleAlign: 'center',
                    headerBackground: () => (
                      <Text className=" m-0 bg-white shadow-2xl shadow-black h-full "></Text>
                    ),
                    animation: 'slide_from_bottom',
                  }}
                  name="add-address"
                  component={AddAddress}
                />
                <Stack.Screen
                  options={{
                    headerShown: false,
                    title: '',
                    animation: 'slide_from_bottom',
                  }}
                  name="success"
                  component={SuccessPage}
                />
              </Stack.Navigator>
              <BottomTab />
            </NavigationContainer>
          </View>
        </SafeAreaProvider>
      </AnimatedSplash>
    </>
  );
};

export default App;
