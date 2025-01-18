import { ScrollView, View } from "react-native";
import React from "react";
import HeaderBar from "../../components/Home/HeaderBar";
import Slider from "../../components/Home/Slider";
import Category from "../../components/Home/Category";
import PopularBusiness from "../../components/Home/PopularBusiness";

const home = () => {
  return (
    <ScrollView style={{ backgroundColor: "#e5e3e8" }}>
      {/* Header */}
      <HeaderBar />

      {/* Slider */}
      <Slider />

      {/* Category */}
      <Category />

      {/* Popular Business List */}
      <PopularBusiness />
      <View style={{ marginTop: 50 }}></View>
    </ScrollView>
  );
};

export default home;
