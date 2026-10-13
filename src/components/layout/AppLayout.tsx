import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useTheme } from "../../contexts/ThemeContext";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  const { isDark } = useTheme();
  return (
  <View style={[styles.root, { backgroundColor: isDark ? "#0B1120" : "#F8FAFC" }]}>
    <Header />
    <View style={styles.content}>{children}</View>
    <Footer />
  </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1 },
  content: { flex: 1 },
});
