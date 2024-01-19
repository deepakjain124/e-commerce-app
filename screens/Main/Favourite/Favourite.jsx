import {
  View,
  Text,
  ScrollView,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Search from 'react-native-vector-icons/FontAwesome';
import Back from 'react-native-vector-icons/Entypo';
import Filter from 'react-native-vector-icons/Ionicons';
import Updown from 'react-native-vector-icons/FontAwesome6';
import Close from 'react-native-vector-icons/AntDesign';

import {Images} from '../../../Assets';
import SortModal from '../../CommonComponent/SortModal';

const Favourite = ({navigation}) => {
    const[openSortModal,setOpenSortModal]=useState(false)
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <View className="ml-2">
         <Back name="chevron-small-left" size={30} color="black" />
       </View>
      </TouchableOpacity>
      ),
      headerRight: () => (
        <View className="mr-3">
          <Search name="search" size={22} color="black" />
        </View>
      ),
    });
  }, []);
  const RenderList = () => (
    <View className="mt-4 relative">
      <Image source={Images.Model3} style={{   resizeMode: 'cover' }} className="w-40 shadow-xl shadow-black rounded-lg h-60" />
      <Text className="text-gray-500 text-lg ">Lime</Text>
      <Text className="text-black font-bold text-sm  ">Longsleeve Violeta </Text>
      <View className="flex justify-start gap-4 pt-2 items-center flex-row">
        <Text className="text-gray-500">
          Color: <Text className="text-black">Blue</Text>
        </Text>
        <Text className="text-gray-500">
          Size: <Text className="text-black">L</Text>
        </Text>
      </View>
      <Text className="text-black font-bold text-sm ">10$</Text>
      <TouchableOpacity className="absolute right-2 top-3">
      <Close name="closecircle" size={20} color="#DB3022" />
      </TouchableOpacity>
    </View>
  );
  return (
    <>
      <View className="mx-4 ">
        <Text className="text-black text-3xl font-bold">Favourite</Text>
        <View  className="flex justify-between mt-4   py-4 items-center flex-row">
          <View className="flex justify-center items-center flex-row">
            <Filter name="filter-outline" color="black" size={25} />
            <Text className="text-black text-sm pl-3">Filters</Text>
          </View>
         <TouchableOpacity onPress={()=>setOpenSortModal(true)}>
         <View className="flex justify-center items-center flex-row">
            <Updown name="up-down" color="black" size={20} />
            <Text className="text-black pl-3">Price: lowest to high</Text>
          </View>
         </TouchableOpacity>
        </View>
          <FlatList
          contentContainerStyle={{ paddingBottom: 0.5 * Dimensions.get('window').width,}}
            data={[1, 2, 3, 4, 4, 5]}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            numColumns={2}
            keyExtractor={i => i}
            renderItem={() => <RenderList />}
          />
      </View>
      {openSortModal && <SortModal visblemodal={openSortModal} setVisivleModal={setOpenSortModal}/>}
    </>
  );
};

export default Favourite;
