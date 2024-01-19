import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import Back from 'react-native-vector-icons/Entypo';
import {Images} from '../../../Assets';

const Checkout = ({navigation}) => {
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
    <View className="mx-4  mt-4">
      <Text className="text-black text-lg font-bold">Shipping Address</Text>
      <View className="bg-white px-4 py-4 rounded-lg shadow-lg shadow-gray-500 mt-4">
        <View className="flex justify-between items-center flex-row">
          <Text className="text-black font-bold">Deepak Jain</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("address")}>
          <Text className="text-red-500">Change</Text>
          </TouchableOpacity>
        </View>
        <View className="mt-4">
          <Text className="text-gray-600 font-bold">165, Scheme No. 4</Text>
          <Text className="text-gray-600">Rajendra nagr alwar, Rajasthan</Text>
        </View>
      </View>
      <View className="mt-12">
        <View className="flex justify-between items-center flex-row">
          <Text className="text-black font-bold">Payment</Text>
          <Text className="text-red-500">Change</Text>
        </View>
      </View>
      <View className=" mt-4">
        <View className="flex justify-start flex-row items-center gap-x-4">
          <Image
            source={Images.Mastercard}
            style={{resizeMode: 'center'}}
            className="w-20 bg-white rounded-lg  h-10"
          />
          <Text className="text-gray-500">**** **** **** 3947</Text>
        </View>
      </View>
      <View className="mt-3">
        <View className="flex justify-between items-center flex-row mt-3">
          <Text className="  text-gray-400">Order:</Text>
          <Text className="   text-black font-bold">112$</Text>
        </View>
        <View className="flex justify-between items-start flex-row mt-3">
          <Text className="  text-gray-400">Delivery:</Text>
          <Text className=" text-black font-bold">15$</Text>
        </View>
        <View className="flex justify-between items-start flex-row mt-3">
          <Text className="font-bold text-lg  text-gray-400">Summary:</Text>
          <Text className="text-lg text-black font-bold">127$</Text>
        </View>
      </View>
      <TouchableOpacity style={{marginTop:0.18*Dimensions.get("screen").height}} onPress={() => navigation.navigate('success')}>
        <View className="bg-primary   mt-4 rounded-full py-2">
          <Text className="text-white font-bold text-sm text-center">
            SUBMIT ORDER
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Checkout;
