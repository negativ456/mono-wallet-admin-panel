import cls from './Icon.module.scss';
import React from 'react';
import classNames from 'classnames';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

export const Icon = ({ className, Svg, inverted = false, ...otherProps }: IconProps) => {
  return <Svg className={classNames(cls.Icon, { [cls.inverted]: inverted }, [className])} {...otherProps} />;
};
