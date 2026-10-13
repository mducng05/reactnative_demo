// src/mock/userData.ts
import { User } from "../types/user";

const firstNames = ["Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Huỳnh", "Phan", "Vũ", "Võ", "Đặng"];
const middleNames = ["Minh", "Văn", "Thị", "Đức", "Thành", "Ngọc", "Hải", "Tuấn", "Quốc", "Anh"];
const lastNames = ["Đức", "Nam", "Dũng", "Khoa", "Trang", "Linh", "Hùng", "Tâm", "Huy", "Thảo"];

const roles = ["Frontend Dev", "Backend Dev", "Mobile Dev", "UI/UX Designer", "QA Tester", "Project Manager", "DevOps"];
const departments = ["Engineering", "Product", "Quality Control", "Infrastructure"];

export const generateMockUsers = (count: number = 200): User[] => {
  return Array.from({ length: count }, (_, index) => {
    const id = index + 1;
    const fn = firstNames[index % firstNames.length];
    const mn = middleNames[(index * 3) % middleNames.length];
    const ln = lastNames[(index * 7) % lastNames.length];
    const fullName = `${fn} ${mn} ${ln}`;
    const emailPrefix = `${ln.toLowerCase()}.${fn.toLowerCase()}${id}`;

    return {
      id,
      name: fullName,
      email: `${emailPrefix}@homenest.vn`,
      role: roles[index % roles.length],
      department: departments[index % departments.length],
      status: index % 4 === 0 ? "Inactive" : "Active",
      avatar: `https://i.pravatar.cc/150?u=${id}`,
    };
  });
};

export const initialMockUsers: User[] = generateMockUsers(200);