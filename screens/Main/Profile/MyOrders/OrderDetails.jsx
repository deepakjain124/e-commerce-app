import {View, Text, Image, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import React, { useEffect } from 'react';
import {Images} from '../../../../Assets';
import Back from 'react-native-vector-icons/Entypo';

const OrderDetails = ({navigation}) => {
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
      <View className="flex justify-between items-center flex-row">
        <Text className="text-black  font-bold">Order No. 40858</Text>
        <Text className="text-gray-400">05-12-2019</Text>
      </View>
      <View className="flex justify-between items-center mt-4 mb-2 flex-row">
        <TouchableOpacity onPress={() => navigation.navigate('orderDetails')}>
          <Text className="text-gray-400   ">
            <Text>Tracking No.</Text>{' '}
            <Text className="text-black">IW3475453455</Text>
          </Text>
        </TouchableOpacity>
        <Text className="text-[#2AA952] text-[15px]">Delivered</Text>
      </View>
      <Text className="text-black font-bold text-[17px]">3 items</Text>
      <ScrollView contentContainerStyle={{
          paddingBottom: 0.4 * Dimensions.get('window').width,
        }}>
        <View className="">
          {[1, 2, 3, 4].map((i, index) => {
            return (
              <View
                key={index}
                className="flex mt-4 sh shadow-gray-400 w-full flex-row justify-start items-start">
               <Image
                      source={Images.CartImage}
                      style={{   resizeMode: 'cover' }}
                      className="w-[40%] border rounded-tl-lg aspect-square rounded-bl-lg h-full"
                    />
                <View className="bg-white w-[60%] px-4 py-2 rounded-tr-lg rounded-br-lg border border-gray-100   h-full">
                  <Text className="text-black  font-bold">Pullover</Text>
                  <Text className="text-gray-400">
                    Color: <Text className="text-black">Black</Text>{' '}
                    <Text className="text-gray-400">
                      Size: <Text className="text-black">L</Text>
                    </Text>
                  </Text>
                  <View className="flex justify-between flex-row mt-5  items-center ">
                    <Text className="text-gray-400 text-sm  ">
                      <Text>Units.</Text> <Text className="text-black">1</Text>
                    </Text>
                    <Text className="text-black font-bold text-sm">43$</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
        <Text className="text-black mt-7 font-bold text-[17px]">
          Order Informations
        </Text>
        <View className="mt-3">
          <View className="flex justify-around items-start flex-row mt-3">
            <Text className=" w-[40%] text-gray-400">Shipping Address:</Text>
            <Text className="w-[60%] text-black font-bold">
            165, scheme no. 4 Rajendra nagar alwar, Raj.
            </Text>
          </View>
          <View className="flex justify-around items-start flex-row mt-3">
            <Text className=" w-[40%] text-gray-400">Payment Method:</Text>
            <Text className="w-[60%] text-black font-bold">
              **** **** **** 3947
            </Text>
          </View>
          <View className="flex justify-around items-start flex-row mt-3">
            <Text className=" w-[40%] text-gray-400">Delivery Method:</Text>
            <Text className="w-[60%] text-black font-bold">
            FedEx, 3 days, 15$
            </Text>
          </View>
          <View className="flex justify-around items-start flex-row mt-3">
            <Text className=" w-[40%] text-gray-400">Discount:</Text>
            <Text className="w-[60%] text-black font-bold">
              10%, Personal promo code
            </Text>
          </View>
          <View className="flex justify-around items-start flex-row mt-3">
            <Text className=" w-[40%] text-gray-400">Total Amount:</Text>
            <Text className="w-[60%] text-black font-bold">133$</Text>
          </View>
        </View>
        <View className="flex flex-row w-full justify-between mt-8 mb-8 space-x-3 items-baseline">
            <View className="border border-black flex-1 rounded-full py-2">
                <TouchableOpacity>
                <Text className="text-black text-center">Reorder</Text>
                </TouchableOpacity>
            </View>
            <View className=" flex-1 bg-primary rounded-full py-2">
                <TouchableOpacity>
                <Text className="text-white text-center">Leave feedback</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderDetails;
