import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Toast from "react-native-toast-message";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    if (!email || !password) {
      Toast.show({
        type: "error",
        text1: "Missing Fields",
        text2: "Please enter both email and password",
        position: "bottom",
      });
      return;
    }

    Toast.show({
      type: "success",
      text1: "Login Successful",
      text2: `Welcome back, ${email}`,
    });

    // TODO: Replace with backend login logic
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center px-6">
        {/* Title */}
        <Text className="text-3xl font-bold text-center text-gray-800 mb-10">
          Login
        </Text>

        {/* Email Input */}
        <TextInput
          className="w-full h-12 rounded-2xl border border-gray-300 bg-gray-100 px-4 mb-4 text-gray-800"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholderTextColor="#9ca3af"
        />

        {/* Password Input with Eye Button */}
        <View className="w-full h-12 rounded-2xl border border-gray-300 bg-gray-100 flex-row items-center px-4 mb-2">
          <TextInput
            className="flex-1 text-gray-800"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholderTextColor="#9ca3af"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={22}
              color="#6b7280"
            />
          </TouchableOpacity>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity className="self-end mb-6">
          <Text className="text-indigo-500 font-medium">Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          onPress={handleLogin}
          className="w-full bg-indigo-500 rounded-2xl py-3 items-center shadow-md"
        >
          <Text className="text-white font-semibold text-lg">Login</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center my-8">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-4 text-gray-500">or</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        {/* Sign Up Redirect */}
        <View className="flex-row justify-center">
          <Text className="text-gray-600">Don’t have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/SignUpScreen")}>
            <Text className="text-indigo-500 font-semibold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
