import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Arrow from "react-native-vector-icons/FontAwesome"
const Register = ({navigation}) => {
  return (
    <View className="mx-4">
      <Text className="text-black mt-20 text-3xl font-bold">Signup</Text>
      <View className="mt-24">
      <TextInput
          placeholder="Enter Name"
          placeholderTextColor={'gray'}
          className="bg-white rounded-md px-4"></TextInput>
        <TextInput
          placeholder="Enter Email"
          placeholderTextColor={'gray'}
          className="bg-white rounded-md mt-4 px-4"></TextInput>
        <TextInput
          placeholder="Enter Password"
          placeholderTextColor={'gray'}
          className="bg-white rounded-md mt-4 px-4"></TextInput>
          
          <TouchableOpacity onPress={()=>navigation.navigate("login")}>
        <View className="flex justify-end items-center gap-x-3 flex-row mt-4">
          <Text className="text-black font-bold text-sm ">Already have an account?</Text>
          <Arrow name="long-arrow-right" size={20} color="#DB3022"/>
        </View>
          </TouchableOpacity>
       <TouchableOpacity onPress={()=>navigation.navigate("home")}>
       <View className="flex justify-center bg-primary mt-10 rounded-full h-12 items-center flex-row">
          <Text className="text-white font-bold text-lg">Signup</Text>
        </View>
       </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
