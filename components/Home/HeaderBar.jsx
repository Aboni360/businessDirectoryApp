import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const HeaderBar = () => {
  const { user } = useUser();
  return (
    <View
      style={{
        paddingTop: 20,
        backgroundColor: Colors.PRIMARY,
        padding: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: user?.imageUrl }}
          style={{ width: 45, height: 45, borderRadius: 99 }}
        ></Image>
        <View>
          <Text style={{ color: "white" }}>Welcome,</Text>
          <Text
            style={{
              fontSize: 19,
              fontFamily: "poppins-medium",
              color: "white",
            }}
          >
            {user?.fullName}
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          padding: 5,
          borderRadius: 9,
          marginTop: 10,
        }}
      >
        {/* Search Bar */}
        <Ionicons name="search" size={24} color={Colors.PRIMARY} />
        <TextInput
          placeholder="Search ...."
          style={{ fontFamily: "poppins", fontSize: 16 }}
        />
      </View>
    </View>
  );
};

export default HeaderBar;
