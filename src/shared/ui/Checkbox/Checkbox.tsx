import cls from "./Checkbox.module.scss";
import textViewCls from "../TextViews/styles/TextView.module.scss";
import classNames from "classnames";
import { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";
import { ReactComponent as CheckIcon } from "shared/assets/icons/check.svg";
import { labelSize } from "../../types/ui";
import { TextTheme } from "../TextViews/styles/consts";
import { HStack } from "../Stack";
interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  className?: string;
  label?: ReactNode;
  labelSize?: labelSize;
  labelTheme?: TextTheme;
  disabled?: boolean;
  checked?: boolean;
  editable?: boolean;
  onChangeLabel?: (value: string) => void;
  onChange?: (value: boolean) => void;
  orientation?: "right" | "left";
}

export const Checkbox = (props: CheckboxProps) => {
  const {
    className,
    labelSize = "M",
    onChange,
    checked,
    disabled = false,
    label,
    onChangeLabel,
    editable,
    labelTheme = TextTheme.PRIMARY,
    orientation = "left",
    ...otherProps
  } = props;
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };
  const onChangeLabelHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeLabel?.(e.target.value);
  };

  return (
    <HStack gap={"15"} className={classNames(className)}>
      <label
        className={classNames(
          cls.Checkbox,
          cls[labelSize],
          cls[orientation],
          textViewCls[labelTheme],
          {
            [cls.disabled]: disabled,
          }
        )}
      >
        {!editable && <span className={cls.text}>{label}</span>}
        <input
          checked={checked}
          {...otherProps}
          onChange={onChangeHandler}
          className={cls.real}
          disabled={disabled}
          type="checkbox"
        />
        <span className={cls.custom}>
          <CheckIcon className={cls.check} />
        </span>
      </label>
      {editable && (
        <input
          placeholder={"Enter here"}
          className={cls.labelInput}
          value={typeof label === "string" ? label : ""}
          onChange={onChangeLabelHandler}
        />
      )}
    </HStack>
  );
};
