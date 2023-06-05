import cls from "./Input.module.scss";
import classNames from "classnames";
import { ChangeEvent, InputHTMLAttributes } from "react";

import { labelSize } from "../../types/ui";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  placeholder?: string;
  autofocus?: boolean;
  theme?: InputTheme;
  readonly?: boolean;
  label?: string;
  labelSize?: labelSize;
  required?: boolean;
  fullWidth?: boolean;
  smallPadding?: boolean;
}

type InputTheme = "normal" | "gray" | "dark-gray";

export const Input = (props: InputProps) => {
  const {
    className,
    readonly,
    required = false,
    label,
    placeholder,
    type = "text",
    value,
    theme = "normal",
    labelSize = "M",
    autofocus,
    fullWidth = true,
    smallPadding = false,
    onChange,
    ...otherProps
  } = props;
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  return (
    <div
      className={classNames(className, cls[theme], {
        [cls.max]: fullWidth,
        [cls.smallPadding]: smallPadding,
      })}
    >
      {label && (
        <label
          className={classNames(
            cls.label,
            { [cls.required]: required },
            cls[labelSize]
          )}
          htmlFor={"input"}
        >
          {label}
        </label>
      )}
      <input
        className={classNames(cls.Input)}
        name={"input"}
        {...otherProps}
        onChange={onChangeHandler}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};
