import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {Images} from '../../../Assets';
import RightArrow from 'react-native-vector-icons/AntDesign';
import PromoCodeModal from './PromoCodeModal';
import Back from 'react-native-vector-icons/Entypo';

const Cart = ({navigation}) => {
    const[openPromoCodeModal,setOpenPromoCodeModal]=useState(false)
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
    <>
    <View className="mx-4 ">
      <ScrollView contentContainerStyle={{
          paddingBottom: 0.25 * Dimensions.get('window').width,
        }}>
        <View>
          <Text className="text-black text-4xl font-bold">My Bag</Text>
          <View className="">
            {[1, 2, 3, 4, 5].map((i, index) => {
              return (
                  <View
                    key={i}
                    className="flex mt-4 sh shadow-gray-400 w-full flex-row justify-start items-start">
                    <Image
                      source={Images.CartImage}
                      style={{   resizeMode: 'contain' }}
                      className="w-[40%] rounded-tl-lg rounded-bl-lg h-full"
                    />
                    <View className="bg-white w-[60%] px-4 py-2 rounded-tr-lg rounded-br-lg border border-gray-100   h-full">
                      <Text className="text-black font-bold">
                        Pullover
                      </Text>
                      <Text className="text-gray-400">
                        Color: <Text className="text-black">Black</Text>{' '}
                        <Text className="text-gray-400">
                          Size: <Text className="text-black">L</Text>
                        </Text>
                      </Text>
                      <View className="flex justify-between flex-row  items-center ">
                        <View className="flex justify-start flex-row my-4 items-start gap-x-5">
                          <TouchableOpacity>
                            <Text className="text-gray-600 text-xl bg-gray-100 rounded-full w-8  text-center shadow-lg shadow-gray-500 font-bold">
                              -
                            </Text>
                          </TouchableOpacity>
                          <Text className="text-black mt-2 font-bold">1</Text>
                          <TouchableOpacity>
                            <Text className="text-gray-600 text-xl bg-gray-100 rounded-full w-8  text-center shadow-lg shadow-gray-500 font-bold">
                              +
                            </Text>
                          </TouchableOpacity>
                        </View>
                        <Text className="text-black font-bold text-sm">
                          43$
                        </Text>
                      </View>
                    </View>
                  </View>
              );
            })}
          </View>
          <View className="flex w-full justify-between mt-8 items-center flex-row">
            <TextInput 
              placeholder="Enter Your Promo Code"
              placeholderTextColor={'gray'}
              className="bg-white h-10 px-2 rounded-tl-lg rounded-bl-lg  w-[85%]"
            />
            <TouchableOpacity className="w-[15%]  bg-black h-10 flex justify-center rounded-tr-lg rounded-br-lg items-center flex-row " onPress={()=>setOpenPromoCodeModal(true)}>
              <RightArrow
                name="arrowright"
                className=""
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <View className="flex flex-row justify-between items-center mt-8">
            <Text className=" font-bold text-gray-400">Total Amount</Text>
            <Text className="text-black font-bold text-xl">124$</Text>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate("checkout")}>
            <View className="bg-primary mt-8  text-center h-10 flex justify-center flex-row items-center rounded-full">
              <Text className="text-center text-white font-medium ">
                CHECK OUT
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
    {openPromoCodeModal && <PromoCodeModal visblemodal={openPromoCodeModal} setVisivleModal={setOpenPromoCodeModal}/>}
    </>
  );
};

export default Cart;
