import cls from './Card.module.scss';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { ReactNode } from 'react';

interface CardProps {
  className?: string;
  borderRadius?: number | string;
  children: ReactNode;
}

export const Card = ({ className, borderRadius = 15, children }: CardProps) => {
  const { t } = useTranslation();
  return (
    <div style={{ borderRadius }} className={classNames(cls.Card, className)}>
      {children}
    </div>
  );
};
