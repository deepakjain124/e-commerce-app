import {View, Text, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Back from 'react-native-vector-icons/Entypo';

const MyOrders = () => {
    const navigation=useNavigation()
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
  return (
    <View className="mx-4 ">
      <Text className="text-black text-4xl font-bold">My Orders</Text>
      <View className="flex justify-between items-center mt-8 flex-row">
        <Text className="text-white bg-black w-[33%] text-center  py-2 rounded-full">
          Deliverd
        </Text>
        <Text className="text-black w-[33%] text-sm text-center">
          Processing
        </Text>
        <Text className="text-black w-[33%] text-sm text-center">
          Cancelled
        </Text>
      </View>
    <ScrollView contentContainerStyle={{
          paddingBottom: 0.52 * Dimensions.get('window').width,
        }}>
    {[1,2,3,4].map((i,index)=> <View key={index} className="bg-white mt-4 shadow-lg px-5 py-2 rounded-lg shadow-slate-600">
        <View className="flex justify-between items-center flex-row">
          <Text className="text-black  font-bold">Order No. 40858</Text>
          <Text className="text-gray-300">05-12-2019</Text>
        </View>
        <Text className="text-gray-300  mt-5 ">
          <Text>Tracking No.</Text>{' '}
          <Text className="text-black">IW3475453455</Text>
        </Text>
        <View className="flex justify-between mt-3 items-center flex-row">
          <Text className="text-gray-300  ">
            <Text>Quantity: </Text> <Text className="text-black">3</Text>
          </Text>
          <Text className="text-gray-300  ">
            <Text>Total Amount: </Text>{' '}
            <Text className="text-black">112 $</Text>
          </Text>
        </View>
        <View className="flex justify-between items-center mt-4 mb-2 flex-row">
          <TouchableOpacity onPress={()=>navigation.navigate("orderDetails")}>
          <Text className="text-black  border border-black rounded-full py-1 px-8">
            Details
          </Text>
          </TouchableOpacity>
          <Text className="text-[#2AA952] text-[15px]">Delivered</Text>
        </View>
      </View>)}
    </ScrollView>
    </View>
  );
};

export default MyOrders;
