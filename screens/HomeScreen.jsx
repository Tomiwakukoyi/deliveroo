import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import Categories from "./components/Categories";
import FeaturedRow from "./components/FeaturedRow";

export default function HomeScreen() {
  const navigation = useNavigation();

  //As soon as the screen loads, the useLayout takes effect
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  //Safe area view is to bring the whole app to the main screen of the device
  return (
    <SafeAreaView className=" bg-white pt-5">
      <View>
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className=" h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className=" flex-1">
            <Text className=" font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className=" font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CDBC" />
            </Text>
          </View>
          <UserIcon size={35} color="#00CDBC" />
        </View>
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="grey" size={20} />
          <TextInput
            placeholder="Restaurant and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsHorizontalIcon color="#00CDBC" />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100 "
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />
        {/* Featured row */}
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          id="1234"
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          id="12345"
          title="Featured"
          description="Paid placements from our partners"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
