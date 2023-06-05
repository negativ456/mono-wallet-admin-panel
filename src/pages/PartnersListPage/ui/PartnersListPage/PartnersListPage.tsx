import cls from "./PartnersListPage.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { TextArea } from "shared/ui/TextArea/TextArea";
import { VStack } from "shared/ui/Stack";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { TextSize } from "../../../../shared/const/fontSize";

interface PartnersListPageProps {
  className?: string;
}

export const PartnersListPage = ({ className }: PartnersListPageProps) => {
  const { t } = useTranslation();
  return (
    <VStack gap={"40"} className={classNames(cls.PartnersListPage, className)}>
      <TextArea max label={"Past your partners"} />
      <Button
        textSize={TextSize.FS18}
        size={ButtonSize.XS}
        theme={ButtonTheme.DARK}
      >
        Save changes
      </Button>
    </VStack>
  );
};
