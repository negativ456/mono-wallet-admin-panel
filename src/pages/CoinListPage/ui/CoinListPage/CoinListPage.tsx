import cls from "./CoinListPage.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { CryptoTable } from "features/CryptoTable";
import { HStack, VStack } from "../../../../shared/ui/Stack";
import { Text } from "../../../../shared/ui/TextViews";
import { ButtonLink } from "../../../../shared/ui/ButtonLink/ButtonLink";

interface CoinListPageProps {
  className?: string;
}

export const CoinListPage = ({ className }: CoinListPageProps) => {
  const { t } = useTranslation();
  return (
    <VStack gap={"20"} max className={classNames(cls.CoinListPage, className)}>
      <HStack gap={"40"}>
        <Text>Coinlist</Text>
        <ButtonLink to={"/"}>Create a new</ButtonLink>
      </HStack>
      <CryptoTable />
    </VStack>
  );
};
