import cls from "./TableHeaders.module.scss";
import classNames from "classnames";
import { TableHeaderTheme } from "../Table/Table";
import { Text, TextTheme } from "shared/ui/TextViews";
import { TextSize } from "shared/const/fontSize";
import { TextType } from "shared/ui/TextViews/ui/Text/Text";

export type HeaderSize = "normal" | "extended";
interface TableHeadersProps {
  className?: string;
  headers: string[];
  theme?: TableHeaderTheme;
  headerSize?: HeaderSize;
}

export const TableHeaders = ({
  className,
  headers,
  theme = "empty",
  headerSize = "normal",
}: TableHeadersProps) => {
  return (
    <thead
      className={classNames(
        cls.TableHeaders,
        className,
        cls[theme],
        cls[headerSize]
      )}
    >
      <tr>
        {headers.map((header) => (
          <th scope={"col"} key={header}>
            <Text
              textSize={TextSize.FS18}
              TextTag={TextType.SPAN}
              textTheme={TextTheme.INACTIVE}
              fontWeight={500}
            >
              {header}
            </Text>
          </th>
        ))}
      </tr>
    </thead>
  );
};
