import { Image, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";

const ProductInfo = () => {
  return (
    <View className="flex-row items-center justify-center pt-6 space-x-8 ">
      <Image
        className="w-8 h-16"
        source={require("../assets/images/product-oneAday.jpg")}
      />
      <View className="flex-row items-center space-x-2">
        <AntDesign name="infocirlce" size={24} color="#14BF27" />
        <View className="">
          <Text className="font-bold">Cherry Plus Concentrate</Text>
          <Text className="text-[#14BF27] font-bold">This is a valid product</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductInfo;
