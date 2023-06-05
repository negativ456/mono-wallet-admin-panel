import cls from "./Select.module.scss";
import classNames from "classnames";
import { ReactComponent as ArrowIcon } from "shared/assets/icons/arrow.svg";
import { ReactComponent as CheckIcon } from "shared/assets/icons/check.svg";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { DropdownDirection, labelSize } from "../../types/ui";

export interface SelectProps<T extends string> {
  className?: string;
  options?: Array<SelectOption<T>>;
  onChange?: (value: T) => void;
  value?: T;
  defaultValue?: string;
  theme?: SelectTheme;
  size?: SelectSize;
  direction?: DropdownDirection;
  labelSize?: labelSize;
  label?: string;
}

export type SelectTheme = "gray" | "gray-outlined" | "dark";
type SelectSize = "normal" | "full-width";

export interface SelectOption<T extends string> {
  name: string;
  value: T;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className,
    options,
    theme = "normal",
    onChange,
    defaultValue,
    size = "normal",
    direction = "left",
    labelSize = "S",
    label,
    value,
  } = props;
  const selectRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [localValue, setLocalValue] = useState<string | undefined>(value);
  const valueOption = useMemo(() => {
    if (options) {
      return options.find((option) => option.value === localValue);
    }
  }, [localValue, options]);

  const onChangeHandler = (option: SelectOption<T>) => {
    onChange?.(option.value);
    setLocalValue(option.value);
    setIsVisible(false);
  };
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (selectRef.current && !e.composedPath().includes(selectRef.current)) {
        setIsVisible(false);
      }
    };
    document.body.addEventListener("click", handleClick);
    return () => document.body.removeEventListener("click", handleClick);
  }, []);
  return (
    <div
      ref={selectRef}
      className={classNames(
        className,
        cls[direction],
        cls[labelSize],
        cls[theme],
        cls[size]
      )}
    >
      {label && <label className={classNames(cls.label)}>{label}</label>}
      <div
        className={classNames(cls.Select)}
        onClick={() => setIsVisible(!isVisible)}
      >
        <div className={cls.value}>
          {valueOption?.name ?? defaultValue}
          <ArrowIcon
            className={classNames({ [cls.rotated]: isVisible }, cls.arrow)}
          />
        </div>
        {isVisible && (
          <div className={cls.dropdown}>
            {options?.map((option) => (
              <div
                className={cls.option_wrapper}
                key={option.name}
                onClick={() => onChangeHandler(option)}
              >
                <div
                  className={classNames(cls.option, {
                    [cls.active]: option.value === value,
                  })}
                >
                  {option.Icon && <option.Icon />}
                  {option.name}
                </div>
                {option.value === localValue && (
                  <CheckIcon className={cls.check} />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
