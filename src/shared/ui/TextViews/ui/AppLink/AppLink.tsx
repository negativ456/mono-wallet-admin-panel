import cls from "./AppLink.module.scss";
import classNames from "classnames";
import { Link, LinkProps } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "shared/assets/icons/left-arrow.svg";
import { ReactNode } from "react";
import { TextSize } from "../../../../const/fontSize";
import { TextTheme } from "../../styles/consts";
import { FontWeight } from "../../../../types/ui";
import textViewCls from "../../styles/TextView.module.scss";

interface AppLinkProps extends LinkProps {
  className?: string;
  arrow?: boolean;
  arrowColor?: string;
  smallGap?: boolean;
  underlined?: boolean;
  direction?: "straight" | "reverse";
  textSize?: TextSize;
  fontWeight?: FontWeight;
  theme?: TextTheme;
  Suffix?: ReactNode;
  active?: boolean;
}

export const AppLink = (props: AppLinkProps) => {
  const {
    className,
    to,
    arrowColor = "#836FFF",
    smallGap = false,
    textSize = TextSize.FS24,
    arrow = true,
    children,
    Suffix,
    theme = TextTheme.PRIMARY,
    fontWeight = 500,
    active,
    direction = "straight",
    underlined = false,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      {...otherProps}
      className={classNames(
        cls.AppLink,
        cls[direction],
        textViewCls[theme],
        textViewCls[textSize],
        className,
        {
          [cls.small_gap]: smallGap,
          [cls.underline]: underlined,
          [textViewCls.gradient]: active,
        }
      )}
    >
      {children}
      {Suffix}
      {arrow && <ArrowIcon className={cls.arrow} fill={arrowColor} />}
    </Link>
  );
};
