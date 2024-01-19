import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import Back from 'react-native-vector-icons/Entypo';
import Share from 'react-native-vector-icons/AntDesign';
import {Images} from '../../../Assets';
import Heart from 'react-native-vector-icons/AntDesign';

const ProductDesc = ({navigation}) => {
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
        <View className="mr-4">
          <Share name="sharealt" size={20} color="black" />
        </View>
      ),
    });
  }, []);
  return (
    <>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 0.2 * Dimensions.get('window').width,
        }}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          horizontal
          scrollEnabled={true}
          showsHorizontalScrollIndicator={true}
          keyExtractor={i => i}
          renderItem={() => (
            <Image source={Images.Model2} className="w-screen h-screen" style={{   resizeMode: 'cover' }} />
          )}
        />
        <View className="mx-4 mt-4">
           <TouchableOpacity onPress={()=>navigation.navigate("favourite")}>
           <View className="flex justify-end items-center flex-row ">
                <Heart name="hearto" size={25} color="gray"/>
            </View>
           </TouchableOpacity>
          <Text className="text-black text-lg font-bold">Select Color</Text>
          <View className="flex justify-start space-x-3 mt-2 items-center flex-row">
            <View className=" border-2 rounded-full">
              <View className="w-10 h-10  bg-red-800 m-[1px] rounded-full"></View>
            </View>
            <View className="w-10 h-10 bg-blue-800 rounded-full"></View>
            <View className="w-10 h-10 bg-green-800 rounded-full"></View>
            <View className="w-10 h-10 bg-yellow-500 rounded-full"></View>
          </View>
          <Text className="text-black text-lg mt-4 font-bold">Select Size</Text>
          <View className="flex justify-start  gap-2 mt-2 flex-wrap items-center flex-row">
            <TouchableOpacity>
              <Text className="text-white bg-primary border border-white px-4 py-2 rounded-md">
                XS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-black border px-4 py-2 rounded-md">
                S
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-black border px-4 py-2 rounded-md">
                M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-black border px-4 py-2 rounded-md">
                L
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-black border px-4 py-2 rounded-md">
                XL
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-black border px-4 py-2 rounded-md">
                XXL
              </Text>
            </TouchableOpacity>
          </View>
          <View className="mt-2">
            <View className="flex justify-between items-start flex-row">
              <View>
                <Text className="text-black text-xl font-bold">H&M</Text>
                <Text className="text-gray-400 text-xs font-bold">
                  Short black dress
                </Text>
              </View>
              <Text className="text-black text-xl font-bold">$19.99</Text>
            </View>
            <Text className="text-gray-700 mt-2 ">
              Short dress in soft cotton jersey with decorative buttons down the
              front and a wide, frill-trimmed square neckline with concealed
              elastication. Elasticated seam under the bust and short puff
              sleeves with a small frill trim.
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("cart")}>
            <View className="bg-primary  mt-4 rounded-full py-4">
                <Text className="text-white font-bold  text-center">Add To Cart</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ProductDesc;
