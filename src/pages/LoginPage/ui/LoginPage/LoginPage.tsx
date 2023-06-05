import cls from "./LoginPage.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Input } from "../../../../shared/ui/Input/Input";
import { VStack } from "../../../../shared/ui/Stack";
import { Text } from "../../../../shared/ui/TextViews";
import { TextSize } from "../../../../shared/const/fontSize";
import { Button, ButtonSize } from "../../../../shared/ui/Button/Button";
import { Light, LightTheme } from "../../../../shared/ui/Light/Light";

interface LoginPageProps {
  className?: string;
}

export const LoginPage = ({ className }: LoginPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LoginPage, className)}>
      <VStack gap={"45"} className={cls.block} align={"center"}>
        <Text fontWeight={600} textSize={TextSize.FS32}>
          Log in
        </Text>
        <Input label={"Login"} placeholder={"Enter here"} />
        <Input
          label={"Password"}
          type={"password"}
          placeholder={"Enter here"}
        />
        <Button textSize={TextSize.FS20} fontWeight={600} size={ButtonSize.XS}>
          Continue
        </Button>
      </VStack>
      <Light theme={LightTheme.GRADIENT} left={-475} bottom={-50} />
    </div>
  );
};
