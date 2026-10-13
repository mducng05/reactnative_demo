// src/services/mockUserService.ts
import { User } from "../types/user";
import { initialMockUsers } from "../mock/userData";

// Bộ nhớ database tạm thời (In-memory DB)
let dbUsers: User[] = [...initialMockUsers];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const MockUserService = {
  getUsers: async (): Promise<User[]> => {
    await delay(350); 
    return [...dbUsers];
  },

  updateUser: async (id: number, updatedFields: Partial<User>): Promise<User> => {
    await delay(250);
    const index = dbUsers.findIndex((u) => u.id === id);
    if (index === -1) {
      throw new Error(`User ID ${id} không tồn tại`);
    }

    dbUsers[index] = { ...dbUsers[index], ...updatedFields };
    return dbUsers[index];
  },
};