// app/_layout.tsx
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
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
      <Stack.Screen name="LoginScreen" options={{ title: "Login", headerShown: false }} />
      <Stack.Screen name="SignUpScreen" options={{ title: "SignUp", headerShown: false }} />
    </Stack>
  );
}
