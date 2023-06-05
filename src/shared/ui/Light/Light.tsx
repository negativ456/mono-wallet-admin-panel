import cls from './Light.module.scss';
import classNames from 'classnames';

interface LightProps {
  className?: string;
  size?: LightSize;
  blur?: Blur;
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  theme?: LightTheme;
  zIndex?: number;
}
type Blur = 250 | 350;
type LightSize = 'S' | 'M' | 'L';
export enum LightTheme {
  NORMAL = 'normal',
  GRADIENT = 'gradient',
}

const blurClasses: Record<Blur, string> = {
  250: cls.blur250,
  350: cls.blur350,
};

export const Light = (props: LightProps) => {
  const {
    className,
    blur = 350,
    theme = LightTheme.NORMAL,
    size = 'L',
    left = 'auto',
    zIndex,
    top = 'auto',
    right = 'auto',
    bottom = 'auto',
  } = props;
  return (
    <div
      style={{ left, top, right, bottom, zIndex }}
      className={classNames(cls.Light, className, cls[theme], blurClasses[blur], cls[size])}></div>
  );
};
