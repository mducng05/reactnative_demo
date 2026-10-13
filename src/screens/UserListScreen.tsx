import React, { useState, useCallback, useMemo } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { updateUser } from "../store/userSlice";
import { User } from "../types/user";
import { AppLayout } from "../components/layout/AppLayout";
import { DashboardSummaryCard } from "../components/card/DashboardSummaryCard";
import { UserCard } from "../components/card/UserCard";
import { EditUserModal } from "../components/card/EditUserModal";

export const UserListScreen: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.users);
  const activeUsers = useMemo(() => users.filter((user) => user.status === "Active").length, [users]);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleEdit = useCallback((user: User) => {
    setSelectedUser(user);
    setModalVisible(true);
  }, []);

  // Dispatch lên Redux -> UI cập nhật lập tức trong 0ms
  const handleSave = useCallback(
    (user: User) => {
      dispatch(updateUser(user));
    },
    [dispatch]
  );

  return (
    <AppLayout>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <UserCard user={item} onEdit={handleEdit} />}
        ListHeaderComponent={<DashboardSummaryCard total={users.length} active={activeUsers} />}
        initialNumToRender={12}
        maxToRenderPerBatch={12}
        windowSize={5}
        removeClippedSubviews={true}
        contentContainerStyle={styles.listContent}
      />

      <EditUserModal
        key={selectedUser ? `${selectedUser.id}-${selectedUser.name}-${selectedUser.role}` : "empty"}
        visible={modalVisible}
        user={selectedUser}
        onClose={() => setModalVisible(false)}
        onSave={handleSave}
      />
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  listContent: { paddingBottom: 10 },
});