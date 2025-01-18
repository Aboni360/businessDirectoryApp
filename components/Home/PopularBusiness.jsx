import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";
import PopularBusinessCard from "./PopularBusinessCard";

export default function PopularBusiness() {
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    GetBusinessList();
  }, []);

  const GetBusinessList = async () => {
    setBusinessList([]);
    const q = query(collection(db, "BusinessList"), limit(10));
    const querySnapShot = await getDocs(q);

    querySnapShot.forEach((doc) => {
      console.log(doc.data());
      setBusinessList((prev) => [...prev, doc.data()]);
    });
  };
  return (
    <View>
      <View
        style={{
          display: "flex",
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "poppins-bold", fontSize: 20 }}>
          Popular Business
        </Text>
        <Text style={{ color: Colors.PRIMARY, fontFamily: "poppins-medium" }}>
          View All
        </Text>
      </View>
      <FlatList
        style={{ marginLeft: 5 }}
        showsHorizontalScrollIndicator={false}
        data={businessList}
        horizontal={true}
        renderItem={({ item, index }) => (
          <PopularBusinessCard business={item} key={index} />
        )}
      />
    </View>
  );
}
