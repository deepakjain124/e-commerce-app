import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import Back from 'react-native-vector-icons/Entypo';
import {Checkbox} from 'react-native-ui-lib';

const Addresses = ({navigation}) => {
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
    <View className="mx-4 flex-1 relative">
      <TouchableOpacity onPress={()=>navigation.navigate("add-address")}
        style={{top: 0.62 * Dimensions.get('screen').height}}
        className="absolute w-12 h-12 flex justify-center items-center flex-row  bg-black rounded-full right-4  z-10">
        <Text className="text-white text-3xl">+</Text>
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 0.1 * Dimensions.get('screen').height,
        }}>
        {[1, 2, 3, 4, 5].map((i, index) => (
          <View
            key={index}
            className="bg-white  px-4 py-4 rounded-lg shadow-lg shadow-gray-500 mt-4">
            <View className="flex justify-between items-center flex-row">
              <Text className="text-black font-bold">Deepak Jain</Text>
              <TouchableOpacity onPress={()=>navigation.navigate("add-address")}>
                <Text className="text-red-500">Edit</Text>
              </TouchableOpacity>
            </View>
            <View className="mt-4">
              <Text className="text-gray-600 font-bold">165, Scheme No. 4</Text>
              <Text className="text-gray-600">
                Rajendra nagr alwar, Rajasthan
              </Text>
            </View>
            <View className="flex justify-start mt-4 space-x-3 items-center flex-row">
              <Checkbox color="black" value={i === 1 ? true : false} />
              <Text className="text-gray-600">Use as the shipping address</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Addresses;
