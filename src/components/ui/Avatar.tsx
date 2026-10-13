import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

interface Props {
  name: string;
}

export const Avatar = ({ name }: Props) => {
  const { isDark } = useTheme();
  const initials = name
    .split(" ")
    .slice(-2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <View style={[styles.avatar, { backgroundColor: isDark ? "#164E63" : "#DBEAFE" }]}>
      <Text style={[styles.initials, { color: isDark ? "#67E8F9" : "#1D4ED8" }]}>{initials}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: { width: 46, height: 46, borderRadius: 16, alignItems: "center", justifyContent: "center", marginRight: 12 },
  initials: { fontSize: 14, fontWeight: "800" },
});
