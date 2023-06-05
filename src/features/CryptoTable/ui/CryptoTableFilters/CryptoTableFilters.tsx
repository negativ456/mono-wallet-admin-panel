import cls from "./CryptoTableFilters.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Input } from "shared/ui/Input/Input";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { coinCategories } from "../../model/const/coinCategories";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { CryptoTableActions } from "../../model/slice/CryptoTableSlice";
import { useSelector } from "react-redux";
import {
  getCryptoTableCategory,
  getCryptoTableSearch,
} from "../../model/selectors/cryptoTableSelectors";
import { HStack } from "shared/ui/Stack";
import { TextTheme } from "../../../../shared/ui/TextViews";
import { TextSize } from "../../../../shared/const/fontSize";

interface CryptoTableFiltersProps {
  className?: string;
}
export const CryptoTableFilters = ({ className }: CryptoTableFiltersProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const search = useSelector(getCryptoTableSearch);
  const currentCategory = useSelector(getCryptoTableCategory);
  const onChangeSearch = (value: string) => {
    dispatch(CryptoTableActions.setSearch(value));
  };
  return (
    <HStack
      justify={"between"}
      max
      className={classNames(cls.CryptoTableFilters, className)}
    >
      <Input
        className={cls.input}
        value={search}
        onChange={onChangeSearch}
        placeholder={"Search"}
      />
      <HStack className={cls.categories}>
        {coinCategories.map((category) => (
          <Button
            textSize={TextSize.FS18}
            fontWeight={600}
            textTheme={
              currentCategory === category.type
                ? TextTheme.PRIMARY
                : TextTheme.INACTIVE
            }
            theme={ButtonTheme.EMPTY}
            key={category.type}
            onClick={() =>
              dispatch(CryptoTableActions.setCategory(category.type))
            }
          >
            {category.title}
          </Button>
        ))}
      </HStack>
    </HStack>
  );
};
