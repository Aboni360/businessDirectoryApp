import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import {
  ClerkProvider,
  ClerkLoaded,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-expo";
import { tokenCache } from "@/utils/cache";
import LoggedInScreen from "../components/LoggedInScreen";

export default function RootLayout() {
  useFonts({
    poppins: require("./../assets/fonts/Poppins-Regular.ttf"),
    "poppins-medium": require("./../assets/fonts/Poppins-Medium.ttf"),
    "poppins-bold": require("./../assets/fonts/Poppins-Bold.ttf"),
  });

  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!publishableKey) {
    throw new Error("Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env file");
  }
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <SignedIn>
          <Stack ScreenOption={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </SignedIn>
        <SignedOut>
          <LoggedInScreen />
        </SignedOut>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
