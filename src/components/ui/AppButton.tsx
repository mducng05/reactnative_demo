import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

interface Props {
  label: string;
  onPress: () => void;
  variant?: "primary" | "ghost";
  style?: ViewStyle;
}

export const AppButton = ({ label, onPress, variant = "primary", style }: Props) => {
  const { isDark } = useTheme();
  return (
  <TouchableOpacity
    activeOpacity={0.78}
    onPress={onPress}
    style={[
      styles.base,
      variant === "primary"
        ? styles.primary
        : { backgroundColor: "transparent", borderColor: isDark ? "#475569" : "#CBD5E1" },
      style,
    ]}
  >
    <Text
      style={[
        styles.label,
        variant === "ghost" && { color: isDark ? "#CBD5E1" : "#475569" },
      ]}
    >
      {label}
    </Text>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: { minHeight: 40, paddingHorizontal: 16, borderRadius: 12, justifyContent: "center", alignItems: "center", borderWidth: 1 },
  primary: { backgroundColor: "#2563EB", borderColor: "#2563EB" },
  label: { color: "#FFFFFF", fontSize: 13, fontWeight: "700" },
});
