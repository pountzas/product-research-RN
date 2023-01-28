import { useState } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity } from "react-native";

import * as Progress from "react-native-progress";

import { useNavigation } from "@react-navigation/native";

import { AntDesign, Ionicons } from "@expo/vector-icons";
import ProductInfo from "../components/ProductInfo";
import Header from "../components/Header";

export default function Home() {
  const [url, setUrl] = useState("");
  const [asin, setAsin] = useState("");
  const [incorrectUrl, setIncorrectUrl] = useState(false);
  const [validProduct, setValidProduct] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [asinValid, setAsinValid] = useState(false);
  const [asinInvalid, setAsinInvalid] = useState(false);

  const navigation = useNavigation();

  const checkUrl = () => {
    setIncorrectUrl(false);
    setValidProduct(false);
    setAsinValid(false);
    setAsinInvalid(false);
    setAsin("");

    setIsLoading(true);

    setTimeout(() => {
      url === "https://www.amazon.com/One-Womens-Petite-Multivitamins-Count/dp/B004XSOJ02"
        ? setValidProduct(true)
        : setIncorrectUrl(true);
      setIsLoading(false);
    }, 2000);
  };

  const checkAsin = () => {
    setValidProduct(false);
    setAsinValid(false);
    setAsinInvalid(false);

    setIsLoading(true);

    setTimeout(() => {
      if (asin === "B004QQ9LVS") {
        setValidProduct(true);
        setAsinValid(true);
        setIncorrectUrl(false);
      } else {
        setAsinInvalid(true);
        // setAsinValid(false);
        setIncorrectUrl(false);
      }
      setIsLoading(false);
    }, 2000);
  };

  return (
    <SafeAreaView className="relative px-8 bg-[#F4F4F4] ">
      <View className="relative items-center flex-1 min-h-screen py-4 space-y-2">
        <Header />
        <Text className="text-xl font-bold">
          Go to Amazon.com and search the word
          <Text className="text-[#1C59FD] cursor-pointer select-none"> sleep aid </Text>&
          pick the product that is most appealing to you
        </Text>

        <View className="flex-row items-center bg-[#F6EFD9] p-4 rounded-full space-x-2">
          <AntDesign name="infocirlce" size={24} color="#D3AA27" />
          <Text className="text-xs">
            As this is for market reasearch, please do not select our brand.
          </Text>
        </View>

        {/* URL */}
        <View className="flex-row items-center py-4 space-x-2">
          <TextInput
            placeholder="URL"
            className="flex-1 border-2 border-[#D3AA27] rounded-lg px-2 text-xs h-8"
            // value={url}
            onChangeText={(text) => setUrl(text)}
          />
          <TouchableOpacity
            className="bg-[#D3AA27] border-2 border-[#D3AA27] text-xs rounded-lg px-2 py-1"
            onPress={checkUrl}>
            <Text>Check</Text>
          </TouchableOpacity>
        </View>

        {/* ASIN */}
        {incorrectUrl || asinInvalid || (asinValid && validProduct) ? (
          <View className="flex-row items-center py-4 space-x-2">
            <TextInput
              placeholder="ASIN"
              className="flex-1 border-2 border-[#D3AA27] rounded-lg px-2 text-xs h-8"
              // value={asin}
              onChangeText={(text) => setAsin(text)}
            />
            <TouchableOpacity
              className="bg-[#D3AA27] border-2 border-[#D3AA27] text-xs rounded-lg px-2 py-1"
              onPress={checkAsin}>
              <Text>Check</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {/* Error */}
        {((incorrectUrl && !validProduct) || asinInvalid) && (
          <View className="mt-10 flex-row items-center bg-[#F6EFD9] p-4 rounded-lg space-x-2">
            <Text>
              <AntDesign name="infocirlce" size={24} color="#D3AA27" />
            </Text>

            {incorrectUrl && !asinInvalid && (
              <Text className="mx-auto">
                Incorrect URL please enter ASIN number, it can be found at the middle of
                the product's page under "Product Description"
              </Text>
            )}

            {asinInvalid && !validProduct && (
              <Text>
                Wrong ASIN number, it must be 10 characters made by numbers & letters and
                it should look like this <Text className="font-bold">"B004QQ9LVS"</Text>
              </Text>
            )}
          </View>
        )}

        {validProduct && <ProductInfo />}

        {isLoading && (
          <View className="absolute bottom-24 ">
            <Progress.Circle size={30} indeterminate={true} />
          </View>
        )}

        {validProduct && (
          <View className="absolute bottom-24">
            <Ionicons
              onPress={() => {
                navigation.navigate("Research");
              }}
              name="ios-arrow-forward-circle-outline"
              size={30}
              color="black"
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
