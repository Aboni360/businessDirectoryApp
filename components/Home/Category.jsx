import { View, Text, FlatList } from "react-native";
import { Colors } from "../../constants/Colors";
import { useState, useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";
import CategoryIcon from "../Home/CategoryIcon";

export default function Category() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    GetCategoryList();
  }, []);

  const GetCategoryList = async () => {
    setCategoryList([]);
    const q = query(collection(db, "Category"));
    const querySnapShot = await getDocs(q);

    querySnapShot.forEach((doc) => {
      console.log(doc.data());
      setCategoryList((prev) => [...prev, doc.data()]);
    });
  };
  return (
    <View>
      <View
        style={{
          display: "flex",
          padding: 10,
          marginTop: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "poppins-bold", fontSize: 20 }}>
          Category
        </Text>
        <Text style={{ color: Colors.PRIMARY, fontFamily: "poppins-medium" }}>
          View All
        </Text>
      </View>
      <FlatList
        style={{ marginLeft: 10 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categoryList}
        renderItem={({ item, index }) => (
          <CategoryIcon
            category={item}
            key={index}
            onCategoryPress={(category) => console.log(category)}
          />
        )}
      />
    </View>
  );
}
