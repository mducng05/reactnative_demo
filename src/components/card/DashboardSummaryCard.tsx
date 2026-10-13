import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

interface Props { total: number; active: number }

export const DashboardSummaryCard = ({ total, active }: Props) => {
  const { isDark } = useTheme();
  return (
  <View style={[styles.container, { backgroundColor: isDark ? "#172554" : "#1D4ED8" }]}>
    <View>
      <Text style={styles.caption}>TỔNG NHÂN SỰ</Text>
      <Text style={styles.total}>{total}</Text>
      <Text style={styles.note}>Hồ sơ trong hệ thống</Text>
    </View>
    <View style={styles.activeBlock}>
      <Text style={styles.activeNumber}>{active}</Text>
      <Text style={styles.activeLabel}>đang hoạt động</Text>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: { marginHorizontal: 16, marginTop: 16, marginBottom: 10, padding: 20, borderRadius: 22, flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" },
  caption: { color: "#BFDBFE", fontSize: 10, fontWeight: "800", letterSpacing: 1 },
  total: { color: "#FFFFFF", fontSize: 36, fontWeight: "800", marginTop: 6 },
  note: { color: "#DBEAFE", fontSize: 12, marginTop: 2 },
  activeBlock: { alignItems: "flex-end" },
  activeNumber: { color: "#FFFFFF", fontSize: 22, fontWeight: "800" },
  activeLabel: { color: "#BFDBFE", fontSize: 11, marginTop: 2 },
});
