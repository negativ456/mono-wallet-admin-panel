import cls from "./ButtonLink.module.scss";
import classNames from "classnames";
import { Link, LinkProps, NavLink, useLocation } from "react-router-dom";
import { ReactNode } from "react";

interface ButtonLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
}

export const ButtonLink = ({
  className,
  children,
  to,
  ...otherProps
}: ButtonLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(cls.ButtonLink, className, { [cls.active]: isActive })
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
};
