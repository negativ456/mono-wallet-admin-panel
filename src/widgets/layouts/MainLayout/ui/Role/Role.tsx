import cls from "./Role.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { UserRole } from "../../../../../entities/User";
import { Text } from "../../../../../shared/ui/TextViews";
import { userRoleMapper } from "../../model/const/userMapper";
import { TextSize } from "../../../../../shared/const/fontSize";

interface RoleProps {
  className?: string;
  role: UserRole;
}

export const Role = ({ className, role }: RoleProps) => {
  const { t } = useTranslation();
  return (
    <div
      className={classNames(
        cls.Role,
        className,
        cls[userRoleMapper[role].name]
      )}
    >
      <Text textSize={TextSize.FS16} fontWeight={600}>
        {userRoleMapper[role].name}
      </Text>
    </div>
  );
};
