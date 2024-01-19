import {
  View,
  Text,
  Modal,
  Alert,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useCallback} from 'react';
import RightArrow from 'react-native-vector-icons/AntDesign';
import {Images} from '../../../Assets';

const PromoCodeModal = ({setVisivleModal, visblemodal}) => {
  return (
    <Modal
      onRequestClose={() => setVisivleModal(false)}
      animationType="slide"
      transparent={true}
      visible={visblemodal}>
      <TouchableWithoutFeedback onPress={() => setVisivleModal(false)}>
        <View className="bg-transparent h-full">
          <Text></Text>
        </View>
      </TouchableWithoutFeedback>
      <View className="flex justify-start rounded-tl-3xl rounded-tr-3xl shadow-2xl shadow-gray-800 items-start px-4 absolute h-96 bottom-0 bg-[#F9F9F9] w-full">
        {/* <View className="bg-red-400 w-full h-1 m-auto"></View> */}
        <View className="flex w-full justify-between mt-8 items-center flex-row">
          <TextInput
            placeholder="Enter Your Promo Code"
            placeholderTextColor={'gray'}
            className="bg-gray-100 h-10 px-2 rounded-tl-lg rounded-bl-lg  w-[85%]"
          />
          <TouchableOpacity className="w-[15%]  bg-black h-10 flex justify-center rounded-tr-lg rounded-br-lg items-center flex-row">
            <RightArrow
              name="arrowright"
              className=""
              size={20}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <Text className="text-black text-xl font-bold mt-4">
          Your Promo Codes
        </Text>
        <View className="">
         <ScrollView contentContainerStyle={{
          paddingBottom: 0.08 * Dimensions.get('window').width,
        }}>
         {[1,2,4].map((i, index) => (
            <View
              key={index}
              className="flex mt-4 justify-start bg-gray-100 shadow-lg shadow-white items-center flex-row w-full">
              <Image
                source={Images.PromoCode}
                className="w-[25%] h-auto rounded-tl-lg rounded-bl-lg"
              />
              <View className="flex justify-between border border-gray-100  h-full px-3 rounded-tr-lg rounded-br-lg items-center flex-row w-[75%]">
                <View>
                  <Text className="text-black font-bold text-[15px]">
                    Personal Offer
                  </Text>
                  <Text className="text-gray-600 text-xs ">
                    MyPromoCode2020
                  </Text>
                </View>
                <View>
                  <Text className="text-gray-400 text-xs">
                    6 days remaining
                  </Text>
                  <TouchableOpacity onPress={()=>setVisivleModal(false)}>
                  <Text className=" text-center bg-primary rounded-full mt-2 text-white py-2">
                    Apply
                  </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
         </ScrollView>
         <View className="h-[20px] mt-24"></View>
        </View>
      </View>
    </Modal>
  );
};

export default PromoCodeModal;
