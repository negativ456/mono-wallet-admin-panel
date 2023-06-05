import cls from "./Menu.module.scss";
import classNames from "classnames";
import { ReactNode, useEffect, useRef, useState } from "react";
import { ReactComponent as ArrowIcon } from "shared/assets/icons/arrow.svg";
import { AppLink } from "shared/ui/TextViews/ui/AppLink/AppLink";
import { useLocation } from "react-router-dom";
import { DropdownDirection } from "../../types/ui";
import { TextSize } from "../../const/fontSize";

export interface MenuItem {
  content?: ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}
interface MenuProps {
  className?: string;
  items: MenuItem[];
  trigger: ReactNode;
  arrow?: boolean;
  direction?: DropdownDirection;
}

export const Menu = (props: MenuProps) => {
  const { className, trigger, items, arrow = true, direction = "left" } = props;
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !e.composedPath().includes(menuRef.current)) {
        setIsVisible(false);
      }
    };
    document.body.addEventListener("click", handleClick);
    return () => document.body.removeEventListener("click", handleClick);
  }, []);
  useEffect(() => {
    setIsVisible(false);
  }, [location.pathname]);
  return (
    <div
      ref={menuRef}
      className={classNames(cls.Menu, className, cls[direction])}
    >
      <div className={cls.trigger} onClick={() => setIsVisible(!isVisible)}>
        {trigger}
        {arrow && (
          <ArrowIcon
            className={classNames({ [cls.rotated]: isVisible }, cls.arrow)}
          />
        )}
      </div>
      {isVisible && (
        <div className={cls.dropdown}>
          {items.map((item, index) => {
            if (item.href) {
              return (
                <AppLink
                  arrow={false}
                  textSize={TextSize.FS16}
                  className={cls.item}
                  key={index}
                  to={item.href}
                >
                  {item.content}
                </AppLink>
              );
            } else {
              return (
                <button onClick={item.onClick} key={index} className={cls.item}>
                  {item.content}
                </button>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};
