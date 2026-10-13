import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  status: "Active" | "Inactive";
}

export const StatusBadge = ({ status }: Props) => {
  const active = status === "Active";
  return (
    <View style={[styles.badge, { backgroundColor: active ? "#DCFCE7" : "#FEE2E2" }]}>
      <View style={[styles.dot, { backgroundColor: active ? "#16A34A" : "#DC2626" }]} />
      <Text style={{ color: active ? "#15803D" : "#B91C1C", fontSize: 11, fontWeight: "700" }}>
        {active ? "Đang hoạt động" : "Tạm nghỉ"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: { flexDirection: "row", alignItems: "center", alignSelf: "flex-start", paddingHorizontal: 8, paddingVertical: 5, borderRadius: 8 },
  dot: { width: 6, height: 6, borderRadius: 3, marginRight: 5 },
});
