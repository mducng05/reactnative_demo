import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { User } from "../../types/user";
import { AppButton } from "../ui/AppButton";
import { Avatar } from "../ui/Avatar";
import { StatusBadge } from "../ui/StatusBadge";
import { useTheme } from "../../contexts/ThemeContext";

interface Props { user: User; onEdit: (user: User) => void }

const UserCardComponent = ({ user, onEdit }: Props) => {
  const { isDark } = useTheme();
  return (
  <View style={[styles.card, { backgroundColor: isDark ? "#111827" : "#FFFFFF", borderColor: isDark ? "#1F2937" : "#E2E8F0" }]}>
    <Avatar name={user.name} />
    <View style={styles.details}>
      <Text style={[styles.name, { color: isDark ? "#F8FAFC" : "#0F172A" }]} numberOfLines={1}>{user.name}</Text>
      <Text style={[styles.email, { color: isDark ? "#94A3B8" : "#64748B" }]} numberOfLines={1}>{user.email}</Text>
      <View style={styles.meta}>
        <Text style={[styles.role, { color: isDark ? "#60A5FA" : "#2563EB" }]}>{user.role}</Text>
        <StatusBadge status={user.status} />
      </View>
    </View>
    <AppButton label="Sửa" onPress={() => onEdit(user)} variant="ghost" style={styles.editButton} />
  </View>
  );
};

UserCardComponent.displayName = "UserCard";

export const UserCard = React.memo(UserCardComponent);

const styles = StyleSheet.create({
  card: { marginHorizontal: 16, marginVertical: 6, padding: 14, borderRadius: 18, borderWidth: 1, flexDirection: "row", alignItems: "center" },
  details: { flex: 1, minWidth: 0 },
  name: { fontSize: 15, fontWeight: "800" },
  email: { fontSize: 12, marginTop: 4 },
  meta: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 8, paddingRight: 8 },
  role: { fontSize: 11, fontWeight: "700", flexShrink: 1 },
  editButton: { minHeight: 34, paddingHorizontal: 11, borderRadius: 10, marginLeft: 8 },
});
