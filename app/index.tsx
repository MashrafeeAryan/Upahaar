import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/(auth)/LoginScreen">
        <Text className="text-blue-500 text-lg">Go to Login</Text>
      </Link>
    </View>
  );
}
