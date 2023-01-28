import { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from "react-native";

export default function Research() {
  const [firstQuestion, setFirstQuestion] = useState("");
  const [secondQuestion, setSecondQuestion] = useState("");

  const checkNextStep = firstQuestion === "" || secondQuestion === "";

  return (
    <SafeAreaView className="relative items-center justify-start flex-1 min-h-screen bg-white">
      <View className="gap-4 px-10 py-4">
        <View className="flex items-center gap-2">
          <Text className="font-semibold ">
            What made you pick this product from the search results?
          </Text>
          <Text className="font-semibold ">
            Looking to the product detail page, what grabs your attention the most?
          </Text>
          <TextInput
            onChangeText={(text) => setFirstQuestion(text)}
            className="w-full h-20 p-2 border-2 border-gray-300 rounded"
          />
        </View>
        <View className="flex items-center pt-8">
          <Text className="font-semibold">What do you like about this product?</Text>
          <TextInput
            onChangeText={(text) => setSecondQuestion(text)}
            className="w-full h-20 p-2 border-2 border-gray-300 rounded"
          />
        </View>
      </View>
      <TouchableOpacity
        className="absolute bottom-28 flex-row items-center justify-center bg-[#FFCC07] w-[20%] disabled:bg-[#fcf1c9] rounded"
        disabled={checkNextStep}>
        <Text className="p-1">Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
