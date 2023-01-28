import { Image, Text, View, ImageSourcePropType } from "react-native";

export default function Header() {
  return (
    <View className="flex items-center space-y-2 px-8 pb-1 bg-[#F4F4F4]">
      <Image className="w-16 h-8" source={require("../assets/images/logo.png")} />
      <Text className="font-extrabold text-3xl text-[#D3AA27]">2nd Step</Text>
    </View>
  );
}
