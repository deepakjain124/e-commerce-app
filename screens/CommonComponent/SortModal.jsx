import {
    View,
    Text,
    Modal,
    TouchableWithoutFeedback,
    TextInput,
  } from 'react-native';
  import React, {useCallback} from 'react';
  
  
  const SortModal = ({setVisivleModal, visblemodal}) => {
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
        <View className=" rounded-tl-3xl rounded-tr-3xl border border-gray-200 shadow-2xl shadow-[0px_-4px_30px_0px_rgba(0, 0, 0, 0.08)]   absolute h-[280px] bottom-0 bg-[#F9F9F9] w-full">
          <View className="w-20 bg-gray-400 h-2 mt-2 mx-auto rounded-full"></View>
          <Text className="text-black text-center mt-2  text-lg font-bold">
           Sort by
          </Text>
          <View className="mt-2 p-4">
          <Text className="text-black px-4 py-2">Popular</Text>
          <Text className="text-black px-4 py-2 mt-2">Newest</Text>
          <Text className="text-black px-4 py-2 mt-2">Customer Review</Text>
          <Text className="text-white rounded-lg bg-primary  px-4 py-2 mt-2">Price: lowest to hogh</Text>
          <Text className="text-black px-4 py-2 mt-2">PriceL highest to low</Text>

          </View>
        </View>
      </Modal>
    );
  };
  
  export default SortModal;
  