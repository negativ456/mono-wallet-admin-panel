import cls from "./TableItem.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import btc from "shared/assets/coins/BTC.png";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Coin } from "../../model/types/crytoTableTypes";
import { HStack } from "shared/ui/Stack";
import { TextSize } from "shared/const/fontSize";
import { Text, TextTheme } from "shared/ui/TextViews";

interface TableItemProps {
  className?: string;
  item: Coin;
}

export const TableItem = ({ className, item }: TableItemProps) => {
  const { t } = useTranslation();

  return (
    <tr className={classNames(cls.TableItem, className)}>
      <td>
        <HStack gap={"10"}>
          <img src={btc} alt={"btc"} />
          <Text textSize={TextSize.FS18} textTheme={TextTheme.INACTIVE}>
            {item.name}
          </Text>
        </HStack>
      </td>
      <td>
        <Text textSize={TextSize.FS18} textTheme={TextTheme.INACTIVE}>
          {item.price} $
        </Text>
      </td>
      <td>
        <HStack justify={"end"} gap={"20"}>
          <Button
            textSize={TextSize.FS16}
            fontWeight={500}
            textTheme={TextTheme.INACTIVE}
            width={80}
            height={40}
            theme={ButtonTheme.DARK}
          >
            Hide
          </Button>
          <Button
            textSize={TextSize.FS16}
            fontWeight={500}
            textTheme={TextTheme.INACTIVE}
            width={80}
            height={40}
            theme={ButtonTheme.DARK}
          >
            Delete
          </Button>
        </HStack>
      </td>
    </tr>
  );
};
