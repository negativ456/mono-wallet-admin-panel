import cls from './Flex.module.scss';
import React, { ReactNode } from 'react';
import classNames from 'classnames';

export type FlexJustify = 'start' | 'end' | 'between' | 'center';
export type FlexAlign = 'start' | 'end' | 'center';
export type FlexDirection = 'row' | 'column' | 'column-reverse';
export type FlexGap = '5' | '10' | '15' | '20' | '30' | '40' | '45' | '75' | '100';
type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
}

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
  ['column-reverse']: cls.directionColumnReverse,
};

const gapClasses: Record<FlexGap, string> = {
  5: cls.gap5,
  10: cls.gap10,
  15: cls.gap15,
  20: cls.gap20,
  30: cls.gap30,
  40: cls.gap40,
  45: cls.gap45,
  75: cls.gap75,
  100: cls.gap100,
};

export const Flex = ({
  className,
  direction = 'row',
  justify = 'start',
  gap,
  max = false,
  align = 'center',
  children,
  ...otherProps
}: FlexProps) => {
  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];
  return (
    <div className={classNames(cls.Flex, { [cls.max]: max }, [...classes])} {...otherProps}>
      {children}
    </div>
  );
};
