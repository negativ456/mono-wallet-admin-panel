import cls from "./CalendarModal.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Modal, ModalProps } from "../../../../shared/ui/Modal/Modal";
import Calendar from "react-calendar";
import { Value } from "../../../../shared/types/calendar";

interface CalendarModalProps extends ModalProps {
  className?: string;
  value?: Value;
  onChange?: (date: Value) => void;
}

export const CalendarModal = ({
  className,
  value,
  onChange,
  onClose,
  ...otherProps
}: CalendarModalProps) => {
  const { t } = useTranslation();
  const onChangeTime = (date: Value) => {
    onChange?.(date);
    onClose?.();
  };
  return (
    <Modal
      theme={"empty"}
      onClose={onClose}
      {...otherProps}
      className={classNames(cls.CalendarModal, className)}
    >
      <Calendar value={value} onChange={onChangeTime} />
    </Modal>
  );
};
