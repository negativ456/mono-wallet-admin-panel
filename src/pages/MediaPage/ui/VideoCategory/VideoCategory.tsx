import cls from "./VideoCategory.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { useState } from "react";
import { VStack } from "../../../../shared/ui/Stack";
import { InfoBlock } from "../../../../shared/ui/InfoBlock";
import { Input } from "../../../../shared/ui/Input/Input";
import {
  Button,
  ButtonSize,
  ButtonTheme,
} from "../../../../shared/ui/Button/Button";
import { TextSize } from "../../../../shared/const/fontSize";

interface VideoCategoryProps {
  className?: string;
}

export const VideoCategory = ({ className }: VideoCategoryProps) => {
  const { t } = useTranslation();
  const [isEdited, setIsEdited] = useState(false);
  return (
    <VStack max gap={"30"} className={classNames(cls.VideoCategory, className)}>
      <InfoBlock
        id={1}
        title={"https://youtu.be/121sca13x"}
        subTitle={"Link to video"}
        onEdit={() => setIsEdited(!isEdited)}
        onlyEdit={true}
      />
      {isEdited && (
        <>
          <Input
            placeholder={"Enter here"}
            labelSize={"S"}
            label={"Enter new link"}
          />
          <Button
            size={ButtonSize.XS}
            theme={ButtonTheme.DARK}
            textSize={TextSize.FS18}
          >
            Save changes
          </Button>
        </>
      )}
    </VStack>
  );
};
