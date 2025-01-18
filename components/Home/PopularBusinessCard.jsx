import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "./../../constants/Colors";

export default function PopularBusinessCard({ business }) {
  return (
    <View
      style={{
        marginLeft: 10,
        padding: 5,
        borderRadius: 15,
        backgroundColor: "#f4dcfc",
        padding: 10,
        borderRadius: 20,
      }}
    >
      <Image
        source={{ uri: business.imageUrl }}
        style={{ width: 200, height: 130, borderRadius: 15 }}
      />
      <View style={{ marginTop: 5, gap: 5 }}>
        <Text
          style={{
            fontFamily: "poppins-bold",
            fontSize: 15,
            textAlign: "left",
          }}
        >
          {business.name}
        </Text>
        <Text
          style={{
            fontFamily: "poppins-bold",
            fontSize: 12,
            textAlign: "left",
            color: Colors.GRAY,
          }}
        >
          {business.address}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
            }}
          >
            <Image
              source={require("./../../assets/images/star.png")}
              style={{ width: 15, height: 15 }}
            />
            <Text style={{ fontFamily: "poppins" }}>4.5</Text>
          </View>
          <View>
            <Text
              style={{
                backgroundColor: Colors.PRIMARY,
                color: "white",
                fontFamily: "poppins",
                fontSize: 12,
                padding: 5,
                borderRadius: 5,
              }}
            >
              {business.category}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
