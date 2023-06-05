import { RouteProps } from "react-router-dom";

export interface CustomRouteProps extends Omit<RouteProps, "children"> {
  children?: CustomRouteProps[];
}