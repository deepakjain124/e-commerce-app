import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Switch,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ChangePAsswordModal from './ChangePasswordModal';
import { useNavigation } from '@react-navigation/native';
import Back from 'react-native-vector-icons/Entypo';
// import {Switch} from 'react-native-ui-lib';

const Settings = () => {
  const [openModal, setOPenModal] = useState(false);
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
    <>
      <KeyboardAvoidingView behavior="padding">
        <View className="mx-4">
          <Text className="text-black text-4xl font-bold">Settings</Text>
          <Text className="text-black text-lg mt-4 font-bold">
            Personal Informations
          </Text>
          <View className="mt-4">
            <TextInput
              placeholder="Enter Name"
              placeholderTextColor={'gray'}
              className="bg-white text-black rounded-md px-4"></TextInput>
            <TextInput
              placeholder="DOB"
              placeholderTextColor={'gray'}
              className="bg-white text-black rounded-md mt-4 px-4"></TextInput>
          </View>
          <View className="flex justify-between items-center flex-row">
            <Text className="text-black text-lg mt-4 font-bold">Password</Text>
            <TouchableOpacity onPress={()=>setOPenModal(true)}>
              <Text className="text-gray-400 text-lg mt-4 ">Change</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="Password"
            textContentType="password"
            placeholderTextColor={'gray'}
            className="bg-white text-black mt-4 rounded-md px-4"></TextInput>
          <Text className="text-black text-lg mt-4 font-bold">
            Notifications
          </Text>
          <View className="flex justify-between items-center mt-4 flex-row">
            <Text className="text-black text-sm  ">Sales</Text>
            <Switch value={true} thumbColor={'#2AA952'} />
          </View>
          <View className="flex justify-between items-center mt-4 flex-row">
            <Text className="text-black text-sm  ">New Arrival</Text>
            <Switch value={false} thumbColor={'red'} />
          </View>
          <View className="flex justify-between items-center mt-4 flex-row">
            <Text className="text-black text-sm  ">Deliver status changes</Text>
            <Switch value={false} thumbColor={'red'} />
          </View>
        </View>
      </KeyboardAvoidingView>
      {openModal && (
        <ChangePAsswordModal
          visblemodal={openModal}
          setVisivleModal={setOPenModal}
        />
      )}
    </>
  );
};

export default Settings;
