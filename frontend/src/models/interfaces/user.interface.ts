import { Roles } from "../roles";



export interface UserInfo {
    id: number;
    name: string;
    token: string;
    email: string;
}

export const UserEmptyState: UserInfo= {
    id: 0,
    name: "",
    token: "",
    email: "",
};