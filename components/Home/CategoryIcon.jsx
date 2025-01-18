import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function CategoryIcon({ category, onCategoryPress }) {
  return (
    <TouchableOpacity onPress={() => onCategoryPress(category)}>
      <View
        style={{
          padding: 10,
          alignItems: "center",
          marginRight: 15,
        }}
      >
        <Image
          source={{ uri: category.icon }}
          style={{ width: 40, height: 40 }}
        />
      </View>
      <Text
        style={{
          fontSize: 11,
          fontFamily: "poppins-medium",

          textAlign: "center",
        }}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
}
