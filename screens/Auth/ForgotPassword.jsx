import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const ForgotPassword = () => {
  const navigation=useNavigation()
  return (
    <View className="mx-4">
      <Text className="text-black mt-20 text-3xl font-bold">Forgot password</Text>
      <View className="mt-24">
       <Text className="text-black leading-5">
       Please, enter your email address. You will receive a link to create a new password via email.
       </Text>
        <TextInput
          placeholder="Enter Email"
          placeholderTextColor={'gray'}
          className="bg-white rounded-md mt-4 px-4"></TextInput>
       <TouchableOpacity onPress={()=>navigation.navigate("register")}>
       <View className="flex justify-center bg-primary mt-10 rounded-full h-12 items-center flex-row">
          <Text className="text-white font-bold text-lg">Send</Text>
        </View>
       </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;
