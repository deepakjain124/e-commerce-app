import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Heart from 'react-native-vector-icons/AntDesign';
import HomeIcon from 'react-native-vector-icons/Entypo';
import CartIcon from 'react-native-vector-icons/AntDesign';
import Bag from 'react-native-vector-icons/Ionicons';
import Profile from 'react-native-vector-icons/FontAwesome';
import {useNavigation, useRoute} from '@react-navigation/native';
const BottomTab = () => {
  const [scrrenName, setScreenName] = useState('home');
  const navigation = useNavigation();
  //   const route = useRoute();

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      // Get the current screen name from the route object
      const currentScreen = navigation.getCurrentRoute().name;
      setScreenName(currentScreen);
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <View className={`absolute ${scrrenName==="login" || scrrenName==="register" || scrrenName==="forgot"?"hidden":"block"} w-full bg-white py-3 bottom-0`}>
      <View className="flex flex-row justify-around items-center">
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <View className="flex-col flex justify-center items-center">
            <HomeIcon
              name="home"
              size={20}
              color={scrrenName === 'home' ? '#DB3022' : 'black'}
            />
            <Text
              className={`${
                scrrenName === 'home' ? 'text-primary' : 'text-black'
              }  text-center text-sm`}>
              Home
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('cart')}>
          <View className="flex-col flex justify-center items-center">
            <CartIcon
              name="shoppingcart"
              size={20}
              color={
                scrrenName === 'cart' || scrrenName === 'checkout'||scrrenName==="address"||scrrenName==="add-address"
                  ? '#DB3022'
                  : 'black'
              }
            />
            <Text
              className={`${
                scrrenName === 'cart' || scrrenName === 'checkout'||scrrenName==="address"||scrrenName==="add-address"
                  ? 'text-primary'
                  : 'text-black'
              }  text-center text-sm`}>
              Cart
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-col flex justify-center items-center">
            <Bag name="bag-handle-outline" size={20} color="gray" />
            <Text
              className={`text-black  text-center text-sm`}>
              Bag
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('favourite')}>
          <View className="flex-col flex justify-center items-center">
            <Heart
              name="hearto"
              size={20}
              color={scrrenName === 'favourite' ? '#DB3022' : 'black'}
            />
            <Text
              className={`${
                scrrenName === 'favourite' ? 'text-primary' : 'text-black'
              }  text-center text-sm`}>
              Favourite
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('profile')}>
          <View className="flex-col flex justify-center items-center">
            <Profile
              name="user-o"
              size={20}
              color={
                scrrenName === 'profile' ||
                scrrenName === 'orders' ||
                scrrenName === 'orderDetails'||scrrenName==="settings"
                  ? '#DB3022'
                  : 'black'
              }
            />
            <Text
              className={`${
                scrrenName === 'profile' ||
                scrrenName === 'orders' ||
                scrrenName === 'orderDetails'||scrrenName==="settings"
                  ? 'text-primary'
                  : 'text-black'
              }  text-center text-sm`}>
              Profile
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTab;
