import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import React, {useCallback} from 'react';


const ChangePAsswordModal = ({setVisivleModal, visblemodal}) => {
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
      <View className=" rounded-tl-3xl rounded-tr-3xl border border-gray-200 shadow-2xl shadow-[0px_-4px_30px_0px_rgba(0, 0, 0, 0.08)]  px-4 absolute h-[400px] bottom-0 bg-[#F9F9F9] w-full">
        <View className="w-20 bg-gray-400 h-2 mt-2 mx-auto rounded-full"></View>
        <Text className="text-black text-center mt-2  text-lg font-bold">
          Password Changes
        </Text>
        <View className="mt-4">
          <TextInput
            placeholder="Old Password"
            placeholderTextColor={'gray'}
            className="bg-white text-black rounded-md px-4"></TextInput>
          <Text className="text-gray-400 w-full mt-4 flex justify-end items-center flex-row">
            Forgot Password?
          </Text>
          <TextInput
            placeholder="New Password"
            placeholderTextColor={'gray'}
            className="bg-white text-black rounded-md mt-6 px-4"></TextInput>
          <TextInput
            placeholder="Repeat New Password"
            placeholderTextColor={'gray'}
            className="bg-white text-black rounded-md mt-6 px-4"></TextInput>
          <View className="bg-primary flex justify-center items-center h-10 mt-6 mb-2 flex-row rounded-full">
            <Text className="text-lg text-white">Save Password</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ChangePAsswordModal;
