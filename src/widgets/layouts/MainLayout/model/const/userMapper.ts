import { UserRole } from "entities/User";

export const userRoleMapper = {
  [UserRole.DEVELOPER]: {
    name: "Developer",
    color: "#E84141",
  },
  [UserRole.EDITOR]: {
    name: "Editor",
    color: "#43AB4D",
  },
  [UserRole.ADMINISTRATOR]: {
    name: "Administrator",
    color: "#2C83E8",
  },
};
