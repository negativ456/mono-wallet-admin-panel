import cls from "./TicketForm.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { HStack, VStack } from "shared/ui/Stack";
import { Text, TextTheme } from "shared/ui/TextViews";
import { TextArea } from "shared/ui/TextArea/TextArea";
import {
  Button,
  ButtonSize,
  ButtonTheme,
} from "../../../../shared/ui/Button/Button";
import { TextSize } from "../../../../shared/const/fontSize";

interface TicketFormProps {
  className?: string;
}

export const TicketForm = ({ className }: TicketFormProps) => {
  const { t } = useTranslation();
  return (
    <VStack max className={classNames(cls.TicketForm, className)}>
      <VStack className={cls.top} max gap={"30"}>
        <HStack gap={"100"}>
          <VStack gap={"5"}>
            <Text textTheme={TextTheme.INACTIVE} textSize={TextSize.FS20}>
              Issue
            </Text>
            <Text textSize={TextSize.FS20}>Subname</Text>
          </VStack>
          <VStack gap={"5"}>
            <Text textTheme={TextTheme.INACTIVE} textSize={TextSize.FS20}>
              Coin
            </Text>
            <Text textSize={TextSize.FS20}>BTC</Text>
          </VStack>
        </HStack>
        <TextArea height={150} max value={"User answer"} disabled />
      </VStack>
      <VStack max>
        <TextArea
          label={"Your answer"}
          height={150}
          max
          placeholder={"Enter here"}
        />
      </VStack>
      <VStack max gap={"20"}>
        <Text textSize={TextSize.FS20}>Select</Text>
        <HStack gap={"20"}>
          <Button
            textSize={TextSize.FS18}
            size={ButtonSize.XS}
            theme={ButtonTheme.DARK}
          >
            Problem is resolved
          </Button>
          <Button
            textSize={TextSize.FS18}
            size={ButtonSize.XS}
            theme={ButtonTheme.DARK}
          >
            In progress
          </Button>
          <Button
            textSize={TextSize.FS18}
            size={ButtonSize.XS}
            theme={ButtonTheme.DARK}
          >
            Bug hunting
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};
