export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  department?: string;
  status: "Active" | "Inactive";
  avatar?: string;
  createdAt?: string;
}