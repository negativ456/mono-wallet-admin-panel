import {FontWeight} from "../../../types/ui";
import cls from "../ui/Text/Text.module.scss";

export const fontWeightClasses: Record<FontWeight, string> = {
  400: cls.fw400,
  500: cls.fw500,
  600: cls.fw600,
  700: cls.fw700,
  800: cls.fw800,
};

export enum TextTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ERROR = 'error',
  INVERTED = 'inverted',
  GRADIENT = 'gradient',
  SUCCESS = 'success',
  INACTIVE = 'inactive',
}