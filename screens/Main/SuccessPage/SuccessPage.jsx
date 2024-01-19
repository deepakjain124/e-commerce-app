import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {Images} from '../../../Assets';

const SuccessPage = () => {
  return (
    <>
      <View style={{marginTop:0.2*Dimensions.get("screen").height}} className="flex mx-4  justify-center flex-col items-center ">
        <Image source={Images.Bags} className="w-48 h-48" />
        <Text className="text-black font-bold mt-2 text-4xl">Success</Text>
        <Text className="text-black w-52 font-bold mt-2 text-center text-sm">
          Your order will be delivered soon. Thank you for choosing our app!
        </Text>
      </View>
      <TouchableOpacity style={{marginTop:0.15*Dimensions.get("screen").height}} className="mx-8">
        <View className="bg-primary  mt-4 rounded-full py-3">
          <Text className="text-white font-bold text-sm text-center">
            CONTINUE SHOPPING
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default SuccessPage;
