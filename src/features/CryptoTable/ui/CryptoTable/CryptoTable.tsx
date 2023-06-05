import cls from "./CryptoTable.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { TableItem } from "../CryptoTableItem/TableItem";
import { coinCategories } from "../../model/const/coinCategories";
import { CryptoTableFilters } from "../CryptoTableFilters/CryptoTableFilters";
import { VStack } from "shared/ui/Stack";
import { useSelector } from "react-redux";
import {
  getCryptoTableCategory,
  getCryptoTableSearch,
} from "../../model/selectors/cryptoTableSelectors";
import { useMemo } from "react";
import { Table } from "entities/Table";

interface CryptoTableProps {
  className?: string;
}

const headers = ["Name", "Price"];
export const CryptoTable = ({ className }: CryptoTableProps) => {
  const { t } = useTranslation();
  const currentCategory = useSelector(getCryptoTableCategory);
  const search = useSelector(getCryptoTableSearch);
  const items = useMemo(() => {
    if (search) {
      return coinCategories[currentCategory].elements.filter((coin) =>
        coin.name.includes(search)
      );
    }
    return coinCategories[currentCategory].elements;
  }, [currentCategory, search]);
  return (
    <section className={classNames(cls.CryptoTable, className)}>
      <VStack className={cls.wrapper} align={"center"} justify={"center"}>
        <CryptoTableFilters />
        <Table headers={headers} Row={TableItem} items={items} />
      </VStack>
    </section>
  );
};
