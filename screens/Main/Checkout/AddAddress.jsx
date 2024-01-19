import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Back from 'react-native-vector-icons/Entypo';

const AddAddress = ({navigation}) => {
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
    <View className="mx-4">
        <View className="mt-10">
      <TextInput
          placeholder="Full Name"
          placeholderTextColor={'gray'}
          className="bg-white rounded-md px-4"></TextInput>
        <TextInput
          placeholder="Address"
          placeholderTextColor={'gray'}
          className="bg-white rounded-md mt-4 px-4"></TextInput>
        <TextInput
          placeholder="City"
          placeholderTextColor={'gray'}
          className="bg-white rounded-md mt-4 px-4"></TextInput>
          <TextInput
          placeholder="State/Province/Region"
          placeholderTextColor={'gray'}
          className="bg-white rounded-md mt-4 px-4"></TextInput>
        <TextInput
          placeholder="Zip Code"
          placeholderTextColor={'gray'}
          className="bg-white rounded-md mt-4 px-4"></TextInput>
        <TextInput
          placeholder="Country"
          placeholderTextColor={'gray'}
          className="bg-white rounded-md mt-4 px-4"></TextInput>
       <TouchableOpacity onPress={()=>navigation.navigate("home")}>
       <View className="flex justify-center bg-primary mt-10 rounded-full h-12 items-center flex-row">
          <Text className="text-white font-bold ">SAVE ADDRESS</Text>
        </View>
       </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddAddress