import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { UserListScreen } from "./src/screens/UserListScreen";
import { ThemeProvider, useTheme } from "./src/contexts/ThemeContext";

const MainContent = () => {
  const { isDark } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDark ? "#0B1120" : "#F8FAFC" }}>
      <StatusBar style={isDark ? "light" : "dark"} />
      <UserListScreen />
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <MainContent />
      </ThemeProvider>
    </Provider>
  );
}