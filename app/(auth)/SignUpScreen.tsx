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

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(
      `Signing up with:\nName: ${name}\nEmail: ${email}\nPassword: ${password}`
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center px-6">
        {/* Title */}
        <Text className="text-3xl font-bold text-center text-gray-800 mb-10">
          Create Account
        </Text>

        {/* Name Input */}
        <TextInput
          className="w-full h-12 rounded-2xl border border-gray-300 bg-gray-100 px-4 mb-4 text-gray-800"
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
          placeholderTextColor="#9ca3af"
        />

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

        {/* Password Input with Eye */}
        <View className="w-full h-12 rounded-2xl border border-gray-300 bg-gray-100 flex-row items-center px-4 mb-4">
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

        {/* Confirm Password Input with Eye */}
        <View className="w-full h-12 rounded-2xl border border-gray-300 bg-gray-100 flex-row items-center px-4 mb-6">
          <TextInput
            className="flex-1 text-gray-800"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            placeholderTextColor="#9ca3af"
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Ionicons
              name={showConfirmPassword ? "eye-off" : "eye"}
              size={22}
              color="#6b7280"
            />
          </TouchableOpacity>
        </View>

        {/* Signup Button */}
        <TouchableOpacity
          onPress={handleSignup}
          className="w-full bg-indigo-500 rounded-2xl py-3 items-center shadow-md"
        >
          <Text className="text-white font-semibold text-lg">Sign Up</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center my-8">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-4 text-gray-500">or</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        {/* Redirect to Login */}
        <View className="flex-row justify-center">
          <Text className="text-gray-600">Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/LoginScreen")}>
            <Text className="text-indigo-500 font-semibold">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
