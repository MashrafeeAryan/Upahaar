import { Stack } from "expo-router";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#1e293b", // dark slate background
          },
          headerTintColor: "#fff", // text color
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        {/* Define screens inside the stack */}
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>

      {/* 👇 Toast provider must be outside Stack but inside root */}
      <Toast />
    </>
  );
}
