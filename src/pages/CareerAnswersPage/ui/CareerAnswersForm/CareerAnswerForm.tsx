import cls from "./CareerAnswerForm.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { HStack, VStack } from "../../../../shared/ui/Stack";
import { Input } from "../../../../shared/ui/Input/Input";
import { TextArea } from "../../../../shared/ui/TextArea/TextArea";
import {
  Button,
  ButtonSize,
  ButtonTheme,
} from "../../../../shared/ui/Button/Button";
import { TextSize } from "../../../../shared/const/fontSize";

interface CareerAnswerFormProps {
  className?: string;
}

export const CareerAnswerForm = ({ className }: CareerAnswerFormProps) => {
  const { t } = useTranslation();
  return (
    <VStack max className={classNames(cls.CareerAnswerForm, className)}>
      <HStack className={cls.top} max gap={"100"}>
        <VStack max gap={"20"}>
          <Input
            smallPadding
            fullWidth
            labelSize={"S"}
            disabled
            label={"Full name"}
            value={"Kiril"}
          />
          <Input
            smallPadding
            fullWidth
            labelSize={"S"}
            disabled
            label={"Email"}
          />
          <Input
            smallPadding
            fullWidth
            labelSize={"S"}
            disabled
            label={"Phone"}
          />
          <Input
            smallPadding
            fullWidth
            labelSize={"S"}
            disabled
            label={"Current company"}
          />
        </VStack>
        <VStack max gap={"20"}>
          <Input
            smallPadding
            fullWidth
            labelSize={"S"}
            disabled
            label={"LinkedIn URL"}
          />
          <Input
            smallPadding
            fullWidth
            labelSize={"S"}
            disabled
            label={"Twitter URL"}
          />
          <Input
            smallPadding
            fullWidth
            labelSize={"S"}
            disabled
            label={"GitHub URL"}
          />
          <Input
            smallPadding
            fullWidth
            labelSize={"S"}
            disabled
            label={"Portfolio URL"}
          />
        </VStack>
      </HStack>
      <VStack gap={"30"} max>
        <TextArea height={140} max placeholder={"Enter here"} />
        <HStack gap={"20"}>
          <Button
            size={ButtonSize.XS}
            textSize={TextSize.FS18}
            theme={ButtonTheme.DARK}
          >
            Go to interview
          </Button>
          <Button
            size={ButtonSize.XS}
            textSize={TextSize.FS18}
            theme={ButtonTheme.DARK}
          >
            Decline
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};
