import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {Images} from '../../../Assets';
import Arrow from 'react-native-vector-icons/Entypo';
import Back from 'react-native-vector-icons/Entypo';

const Profile = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={()=>navigation.goBack()}>
         <View className="ml-2">
          <Back name="chevron-small-left" size={30} color="black" />
        </View>
       </TouchableOpacity>
      ),
    });
  }, []);
  const arr = [
    {heading: 'My orders', subhead: 'Already have 12 orders', route: 'orders'},
    {heading: 'Shopping Addresses', subhead: '3 address', route: 'address'},
    {heading: 'Payment methods', subhead: 'Visa **34', route: 'orders'},
    {
      heading: 'Promocodes',
      subhead: 'you have special propmocodes',
      route: 'orders',
    },
    {heading: 'My reviews', subhead: 'Review for 4 items', route: 'orders'},
    {
      heading: 'Settings',
      subhead: 'Notificatiosn, passwords',
      route: 'settings',
    },
  ];
  return (
    <>
      <View className="mx-4">
        <Text className="text-black text-4xl font-bold">My Profile</Text>
        <View className="flex justify-start items-start space-x-4 mt-8 flex-row">
          <Image source={Images.Banner} className="w-14 h-14 rounded-full" />
          <View>
            <Text className="text-lg font-bold text-black">Deepak Jain</Text>
            <Text className="text-gray-400 font-bold text-sm">
              deepakjaindj052@gmail.com
            </Text>
          </View>
        </View>
        <View>
          {arr.map((i, index) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => navigation.navigate(i.route)}
                  key={index}>
                  <View className="flex mt-6 flex-row justify-between items-center">
                    <View>
                      <Text className="text-black font-bold ">
                        {i.heading}
                      </Text>
                      <Text className="text-gray-400 font-bold">
                        {i.subhead}
                      </Text>
                    </View>
                    <Arrow name="chevron-small-right" size={20} color="gray" />
                  </View>
                </TouchableOpacity>
                <View className="w-full bg-gray-300 h-[1px] mt-2"></View>
              </View>
            );
          })}
        </View>
      </View>
    </>
  );
};

export default Profile;
