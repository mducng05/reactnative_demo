import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

export const Footer = () => {
  const { isDark } = useTheme();
  return (
  <View style={[styles.container, { borderTopColor: isDark ? "#1E293B" : "#E2E8F0" }]}>
    <Text style={[styles.text, { color: isDark ? "#64748B" : "#94A3B8" }]}>USER MANAGEMENT</Text>
    <Text style={[styles.text, { color: isDark ? "#64748B" : "#94A3B8" }]}>200 hồ sơ</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  container: { minHeight: 42, paddingHorizontal: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderTopWidth: 1 },
  text: { fontSize: 10, fontWeight: "700", letterSpacing: 0.8 },
});
