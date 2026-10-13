import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#111827" : "#FFFFFF" }]}>
      <View>
        <Text style={[styles.eyebrow, { color: isDark ? "#60A5FA" : "#2563EB" }]}>WORKSPACE</Text>
        <Text style={[styles.title, { color: isDark ? "#F8FAFC" : "#0F172A" }]}>Quản lý nhân sự</Text>
        <Text style={[styles.subtitle, { color: isDark ? "#94A3B8" : "#64748B" }]}>Theo dõi đội ngũ của bạn</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.themeButton, { backgroundColor: isDark ? "#1E3A8A" : "#EFF6FF" }]}
        onPress={toggleTheme}
      >
        <Text style={styles.themeIcon}>{isDark ? "☀" : "☾"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, paddingTop: 18, paddingBottom: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  eyebrow: { fontSize: 10, fontWeight: "800", letterSpacing: 1.5, marginBottom: 6 },
  title: { fontSize: 24, fontWeight: "800", letterSpacing: -0.5 },
  subtitle: { fontSize: 13, marginTop: 4 },
  themeButton: { width: 44, height: 44, borderRadius: 14, justifyContent: "center", alignItems: "center" },
  themeIcon: { color: "#2563EB", fontSize: 24, fontWeight: "700" },
});
