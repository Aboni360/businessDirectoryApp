import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";

WebBrowser.maybeCompleteAuthSession();
const LoggedInScreen = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL("/dashboard", { scheme: "myapp" }),
        });

      // If sign in was successful, set the active session
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp returned from startOAuthFlow
        // for next steps, such as MFA
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("./../assets/images/login.png")}
          style={styles.loginImage}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.firstText}>
          Your Ultimate{" "}
          <Text style={{ color: Colors.PRIMARY }}>
            Community Business Directory
          </Text>{" "}
          App
        </Text>
        <Text style={styles.secondText}>
          Find your favorite business near you and post your business to your
          community
        </Text>
        <View>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontFamily: "poppins-medium",
              }}
            >
              Let's Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoggedInScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: 30,
  },
  loginImage: {
    width: 220,
    height: 450,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: "#000",
  },
  firstText: {
    fontSize: 25,
    fontFamily: "poppins-bold",
    textAlign: "center",
  },
  secondText: {
    fontSize: 15,
    fontFamily: "poppins-medium",
    textAlign: "center",
    color: Colors.GRAY,
    marginVertical: 10,
  },
  textContainer: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: -20,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    borderRadius: 99,
  },
});
