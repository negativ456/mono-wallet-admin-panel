import cls from './Modal.module.scss';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { ReactNode, useEffect } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';

export interface ModalProps {
  className?: string;
  children?: ReactNode;
  open?: boolean;
  onClose?: () => void;
  theme?: ModalTheme;
  padding_large?: boolean;
}
export type ModalTheme = 'normal' | 'empty' | 'dark';

export const Modal = (props: ModalProps) => {
  const { className, open, onClose, padding_large = false, theme = 'normal', children } = props;
  const { t } = useTranslation();
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (open && event.key === 'Escape') {
        onClose?.();
      }
    };
    document.body.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose, open]);
  return (
    <Portal>
      <div className={classNames(cls.Modal, className, cls[theme], { [cls.padding_large]: padding_large })}>
        <div className={cls.overlay} onClick={onClose}>
          <div className={cls.content} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
