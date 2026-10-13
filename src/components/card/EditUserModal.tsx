import React, { useState } from "react";
import { Modal, View, Text, TextInput, StyleSheet } from "react-native";
import { User } from "../../types/user";
import { AppButton } from "../ui/AppButton";
import { useTheme } from "../../contexts/ThemeContext";

interface Props {
  visible: boolean;
  user: User | null;
  onClose: () => void;
  onSave: (user: User) => void;
}

export const EditUserModal = ({ visible, user, onClose, onSave }: Props) => {
  const { isDark } = useTheme();
  const [name, setName] = useState(user?.name ?? "");
  const [role, setRole] = useState(user?.role ?? "");

  if (!user) return null;

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={[styles.box, { backgroundColor: isDark ? "#111827" : "#FFFFFF" }]}>
          <Text style={[styles.eyebrow, { color: isDark ? "#60A5FA" : "#2563EB" }]}>CẬP NHẬT HỒ SƠ</Text>
          <Text style={[styles.title, { color: isDark ? "#F8FAFC" : "#0F172A" }]}>Chỉnh sửa nhân sự</Text>
          <Text style={[styles.description, { color: isDark ? "#94A3B8" : "#64748B" }]}>Thay đổi thông tin cho #{user.id}</Text>

          <TextInput value={name} onChangeText={setName} placeholder="Họ và tên" placeholderTextColor="#94A3B8"
            style={[styles.input, { color: isDark ? "#F8FAFC" : "#0F172A", backgroundColor: isDark ? "#1F2937" : "#F8FAFC", borderColor: isDark ? "#374151" : "#E2E8F0" }]} />
          <TextInput value={role} onChangeText={setRole} placeholder="Chức vụ" placeholderTextColor="#94A3B8"
            style={[styles.input, { color: isDark ? "#F8FAFC" : "#0F172A", backgroundColor: isDark ? "#1F2937" : "#F8FAFC", borderColor: isDark ? "#374151" : "#E2E8F0" }]} />

          <View style={styles.actions}>
            <AppButton label="Hủy" onPress={onClose} variant="ghost" style={styles.cancel} />
            <AppButton label="Lưu thay đổi" onPress={() => { onSave({ ...user, name, role }); onClose(); }} style={styles.save} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: "rgba(2, 6, 23, 0.68)", justifyContent: "center", alignItems: "center", padding: 20 },
  box: { width: "100%", padding: 22, borderRadius: 24 },
  eyebrow: { fontSize: 10, fontWeight: "800", letterSpacing: 1.2 },
  title: { fontSize: 22, fontWeight: "800", marginTop: 6 },
  description: { fontSize: 13, marginTop: 4, marginBottom: 18 },
  input: { borderWidth: 1, borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12, marginBottom: 10, fontSize: 14 },
  actions: { flexDirection: "row", justifyContent: "flex-end", marginTop: 8, gap: 10 },
  cancel: { minWidth: 72 },
  save: { minWidth: 126 },
});
