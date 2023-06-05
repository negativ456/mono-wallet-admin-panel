import cls from "./TextArea.module.scss";
import classNames from "classnames";
import { ChangeEvent, TextareaHTMLAttributes } from "react";

import { labelSize } from "../../types/ui";

type HTMLTextAreaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "value" | "onChange" | "readOnly"
>;
interface TextAreaProps extends HTMLTextAreaProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  height?: number | string;
  placeholder?: string;
  autofocus?: boolean;
  label?: string;
  labelSize?: labelSize;
  required?: boolean;
  max?: boolean;
}

export const TextArea = (props: TextAreaProps) => {
  const {
    className,
    value,
    onChange,
    labelSize = "M",
    max,
    height = 200,
    placeholder,
    label,
    required = false,
    ...otherProps
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
  };
  return (
    <div className={classNames(className, { [cls.max]: max }, cls[labelSize])}>
      {label && (
        <label
          className={classNames(cls.label, { [cls.required]: required })}
          htmlFor={"input"}
        >
          {label}
        </label>
      )}
      <textarea
        onChange={onChangeHandler}
        value={value}
        {...otherProps}
        className={cls.TextArea}
        style={{ height }}
        placeholder={placeholder}
      />
    </div>
  );
};
