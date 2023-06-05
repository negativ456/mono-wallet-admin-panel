import cls from "./Button.module.scss";
import classNames from "classnames";
import React, { ButtonHTMLAttributes, ReactNode, useMemo } from "react";
import { Text, TextProps, TextType } from "shared/ui/TextViews/ui/Text/Text";
import { TextSize } from "../../const/fontSize";
import { TextTheme } from "../TextViews/styles/consts";

type ButtonDirection = "row" | "column";
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    TextProps {
  className?: string;
  children?: ReactNode;
  width?: number | string;
  height?: number | string;
  circle?: boolean;
  size?: ButtonSize;
  theme?: ButtonTheme;
  Prefix?: ReactNode;
  Suffix?: ReactNode;
  direction?: ButtonDirection;
  active?: boolean;
  gradient_hover?: boolean;
}

export enum ButtonSize {
  XXS = "xxs",
  XS = "xs",
  S = "s",
  M = "m",
  L = "l",
  XL = "xl",
  XXL = "xxl",
}

export enum ButtonTheme {
  NORMAL = "normal",
  INVERTED = "inverted",
  BLUE = "blue",
  EMPTY = "empty",
  DARK = "dark",
  DARK_GRAY = "dark-gray",
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    circle = false,
    size = ButtonSize.M,
    textSize = TextSize.FS24,
    width,
    height,
    children,
    uppercase,
    textTheme,
    Prefix,
    Suffix,
    active,
    gradient_hover = false,
    theme = ButtonTheme.NORMAL,
    textAlign,
    direction = "row",
    ...otherProps
  } = props;
  const textThemeCustom = useMemo(() => {
    switch (theme) {
      case ButtonTheme.NORMAL:
        return TextTheme.INVERTED;
      case ButtonTheme.INVERTED:
        return TextTheme.PRIMARY;
      default:
        return textTheme;
    }
  }, [textTheme, theme]);

  return (
    <button
      {...otherProps}
      style={{ width, height }}
      className={classNames(
        cls.Button,
        className,
        cls[theme],
        cls[size],
        cls[direction],
        {
          [cls.circle]: circle,
          [cls.gradient_hover]: gradient_hover,
        }
      )}
    >
      {Prefix}
      {children && (
        <Text
          textSize={textSize}
          uppercase={uppercase}
          textTheme={!textTheme ? textThemeCustom : textTheme}
          TextTag={TextType.SPAN}
          textAlign={textAlign}
          {...otherProps}
        >
          {children}
        </Text>
      )}
      {Suffix}
    </button>
  );
};
