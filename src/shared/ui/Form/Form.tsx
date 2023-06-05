import cls from "./Form.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Input } from "../Input/Input";
import { HStack, VStack } from "../Stack";
import { TextArea } from "../TextArea/TextArea";
import { Button, ButtonSize, ButtonTheme } from "../Button/Button";
import { ReactComponent as AttachIcon } from "shared/assets/icons/attach.svg";
import { ReactComponent as DateIcon } from "shared/assets/icons/date.svg";
import { TextSize } from "../../const/fontSize";
import { Guideline } from "../Guideline/Guideline";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { useModal } from "../../lib/hooks/useModal";
import { CalendarModal } from "../../../features/CalendarModal";
import { Value } from "../../types/calendar";
import { Text, TextTheme } from "../TextViews";

interface FormProps {
  className?: string;
  onChangeTitle?: (value: string) => void;
  title?: string;
  onChangeText?: (value: string) => void;
  text?: string;
  onCreate?: () => void;
  onSave?: () => void;
  isEditing?: boolean;
  addLink?: boolean;
  addDate?: boolean;
  timeValue?: string;
  onChangeTime?: (date: Value) => void;
  onSaveLink?: () => void;
  linkValueInput?: string;
  linkValueState?: string;
  onChangeLink?: (value: string) => void;
}

export const Form = (props: FormProps) => {
  const {
    className,
    onChangeTitle,
    title,
    onCreate,
    isEditing,
    onSave,
    onChangeText,
    onChangeTime,
    timeValue,
    onChangeLink,
    linkValueInput,
    onSaveLink,
    linkValueState,
    addDate,
    addLink,
    text,
  } = props;
  const { t } = useTranslation();
  const [isVisible, { openModal, closeModal }] = useModal();
  const [isAddLinkVisible, setIsAddLinkVisible] = useState(false);
  const onAddLink = () => {
    setIsAddLinkVisible(false);
    onSaveLink?.();
  };
  let content = (
    <Button
      textSize={TextSize.FS18}
      size={ButtonSize.XS}
      Prefix={<AttachIcon />}
      theme={ButtonTheme.DARK}
    >
      Add attachments
    </Button>
  );
  if (addLink) {
    content = (
      <Button
        textSize={TextSize.FS18}
        size={ButtonSize.XS}
        Prefix={<AttachIcon />}
        theme={ButtonTheme.DARK}
        onClick={() => setIsAddLinkVisible(!isAddLinkVisible)}
      >
        Add link
      </Button>
    );
  }
  if (addLink && addDate) {
    content = (
      <HStack align={"start"} gap={"30"}>
        <VStack align={"center"} gap={"10"}>
          <Button
            textSize={TextSize.FS18}
            size={ButtonSize.XS}
            Prefix={<AttachIcon />}
            theme={ButtonTheme.DARK}
            onClick={() => setIsAddLinkVisible(!isAddLinkVisible)}
          >
            Add link
          </Button>
          {linkValueState && (
            <Text
              fontWeight={400}
              textSize={TextSize.FS16}
              textTheme={TextTheme.INACTIVE}
            >
              Link already here
            </Text>
          )}
        </VStack>
        <VStack align={"center"} gap={"10"}>
          <Button
            textSize={TextSize.FS18}
            size={ButtonSize.XS}
            Prefix={<DateIcon />}
            theme={ButtonTheme.DARK}
            onClick={openModal}
          >
            Add date
          </Button>
          {timeValue && (
            <Text
              fontWeight={400}
              textSize={TextSize.FS16}
              textTheme={TextTheme.INACTIVE}
            >
              {timeValue}
            </Text>
          )}
        </VStack>
      </HStack>
    );
  }

  return (
    <VStack max gap={"40"} className={classNames(cls.Form, className)}>
      <Input
        labelSize={"S"}
        onChange={onChangeTitle}
        value={title}
        label={"Title"}
        placeholder={"Enter here"}
      />
      <HStack align={"start"} gap={"30"} max>
        <VStack gap={"40"} max>
          <TextArea
            value={text}
            onChange={onChangeText}
            height={160}
            max
            placeholder={"Enter here"}
            label={"Text"}
          />
          <HStack align={"start"} justify={"between"} max>
            {content}
            <Button
              textSize={TextSize.FS18}
              size={ButtonSize.XS}
              onClick={isEditing ? onSave : onCreate}
              theme={ButtonTheme.DARK}
            >
              {isEditing ? "Save" : "Create"}
            </Button>
            {isVisible && (
              <CalendarModal onChange={onChangeTime} onClose={closeModal} />
            )}
          </HStack>
          {isAddLinkVisible && (
            <HStack align={"end"} max justify={"between"}>
              <Input
                className={cls.newLink}
                labelSize={"S"}
                onChange={onChangeLink}
                value={linkValueInput}
                label={"Enter new link"}
                placeholder={"Enter here"}
              />
              <Button
                textSize={TextSize.FS18}
                size={ButtonSize.XS}
                onClick={onAddLink}
                theme={ButtonTheme.DARK}
              >
                Add
              </Button>
            </HStack>
          )}
        </VStack>
        <Guideline />
      </HStack>
    </VStack>
  );
};
