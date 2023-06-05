declare module "*.scss" {
  type IClassNames = Record<string, string>;
  const classNames: IClassNames;
  export = classNames;
}
declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
declare const __IS_DEV__: boolean;
declare const __API__: string;
