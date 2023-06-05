import cls from "./PageLayout.module.scss";
import classNames from "classnames";
import { ReactElement } from "react";

interface MainLayoutProps {
  className?: string;
  children: ReactElement;
}

export const PageLayout = ({ className, children }: MainLayoutProps) => {
  return (
    <div className={classNames(cls.MainLayout, className, "container")}>
      {children}
    </div>
  );
};
