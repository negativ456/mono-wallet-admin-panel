import cls from "./Header.module.scss";
import classNames from "classnames";
import { ReactComponent as Logo } from "shared/assets/icons/logo.svg";
import { Link } from "react-router-dom";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { Icon } from "shared/ui/Icon/Icon";
import { HStack } from "../../../../shared/ui/Stack";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <div className={classNames(cls.header_wrapper, className)}>
      <HStack
        justify={"between"}
        className={classNames(cls.Header, "container")}
      >
        <Link to={"/"}>
          <Icon Svg={Logo} />
        </Link>
        <LangSwitcher direction={"right"} />
      </HStack>
    </div>
  );
};
