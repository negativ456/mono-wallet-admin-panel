import cls from "./Text.module.scss";
import textViewCls from "../../styles/TextView.module.scss";
import classNames from "classnames";
import { ReactNode } from "react";
import { FontWeight } from "../../../../types/ui";
import { TextSize } from "../../../../const/fontSize";
import { fontWeightClasses, TextTheme } from "../../styles/consts";

export interface TextProps {
  className?: string;
  textTheme?: TextTheme;
  children?: ReactNode;
  uppercase?: boolean;
  fontWeight?: FontWeight;
  underline?: number;
  animation?: boolean;
  TextTag?: TextType;
  textSize?: TextSize;
  textAlign?: TextAlign;
}
export enum TextType {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  SPAN = "span",
  P = "p",
}

export enum TextAlign {
  CENTER = "center",
  LEFT = "left",
  RIGHT = "right",
}
export const Text = (props: TextProps) => {
  const {
    className,
    textTheme = TextTheme.PRIMARY,
    children,
    fontWeight = 500,
    uppercase,
    textAlign = TextAlign.LEFT,
    animation = false,
    textSize = TextSize.FS24,
    TextTag = TextType.P,
  } = props;

  return (
    <TextTag
      className={classNames(
        cls.Text,
        className,
        textViewCls[textTheme],
        textViewCls[textSize],
        cls[TextTag],
        cls[textAlign],
        fontWeightClasses[fontWeight],
        {
          [cls.uppercase]: uppercase,
          [cls.gradient_animation]: animation,
        }
      )}
    >
      {children}
    </TextTag>
  );
};
