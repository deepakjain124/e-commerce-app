import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Images} from '../../Assets';
import Heart from 'react-native-vector-icons/AntDesign';
import HomeIcon from 'react-native-vector-icons/Entypo';
import Cart from 'react-native-vector-icons/AntDesign';
import Bag from 'react-native-vector-icons/Ionicons';
import Profile from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => {
  const RenderItem = () => {
    return (
      <>
        <View className="pr-8 relative mt-4">
          <Image source={Images.Model1} style={{   resizeMode: 'contain' }} className="w-40 rounded-md h-56" />
          <TouchableOpacity onPress={()=>navigation.navigate("productDesc")}>
            <Text className="text-gray-400 mt-2">Dorothy Perkins</Text>
            <Text className="text-black text-lg font-bold mt-1">
              Evening Dress
            </Text>
          </TouchableOpacity>
          <Text className="text-black text-sm font-bold mt-1">₹ 1200</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("favourite")} className="absolute top-52 bg-white p-2 rounded-full right-5">
            <View>
              <Heart name="hearto" size={15} color="gray" />
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  return (
    <>
      <View className="relative">
        <Image source={Images.Banner} className=" w-full h-56 " />
        <ScrollView contentContainerStyle={{
          paddingBottom: 0.85 * Dimensions.get('window').width,
        }}>
          <View className="mx-4 ">
            {[1, 2, 3, 4].map((i, index) => {
              return (
                <View key={index} className="mt-8">
                  <View className="flex flex-row justify-between items-center">
                    <View>
                      <Text className="text-4xl text-black font-bold">
                        Sale
                      </Text>
                      <Text className="text-xs text-gray-400 font-medium">
                        Super Summer Sale
                      </Text>
                    </View>
                    <TouchableOpacity>
                      <View>
                        <Text className="text-sm text-black font-thin">
                          View all
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <FlatList
                      horizontal={true}
                      data={[1, 2, 3, 4, 5, 6]}
                      renderItem={({item}) => <RenderItem />}
                      keyExtractor={i => i}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
        {/* <View className="absolute w-full bg-white py-3 bottom-0">
          <View className="flex flex-row justify-around items-center">
           <TouchableOpacity>
           <View className="flex-col flex justify-center items-center">
              <HomeIcon name="home" size={25} color="#DB3022" />
              <Text className="text-primary text-center text-sm">Home</Text>
            </View>
           </TouchableOpacity>
           <TouchableOpacity>
           <View className="flex-col flex justify-center items-center">
              <Cart name="shoppingcart" size={25} color="gray" />
              <Text className="text-black text-center text-sm">Cart</Text>
            </View>
           </TouchableOpacity>
           <TouchableOpacity>
           <View className="flex-col flex justify-center items-center">
              <Bag name="bag-handle-outline" size={25} color="gray" />
              <Text className="text-black text-center text-sm">Bag</Text>
            </View>
           </TouchableOpacity>
           <TouchableOpacity>
           <View className="flex-col flex justify-center items-center">
              <Heart name="hearto" size={25} color="gray" />
              <Text className="text-black text-center text-sm">Home</Text>
            </View>
           </TouchableOpacity>
            <TouchableOpacity>
            <View className="flex-col flex justify-center items-center">
              <Profile name="user-o" size={25} color="gray" />
              <Text className="text-black text-center text-sm">Profile</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View> */}
      </View>
    </>
  );
};

export default Home;
