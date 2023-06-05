import cls from './Table.module.scss';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { HeaderSize, TableHeaders } from '../TableHeaders/TableHeaders';
import React from 'react';

type RowGap = '5' | '20';

export type TableHeaderTheme = 'empty' | 'dark';
interface TableProps<T> {
  className?: string;
  headers: string[];
  Row: React.ElementType;
  items: T[];
  theme?: TableHeaderTheme;
  headerSize?: HeaderSize;
  rowGap?: RowGap;
}

const rowGapClasses: Record<RowGap, string> = {
  '5': cls.rowGap5,
  '20': cls.rowGap20,
};

export const Table = <T extends object>({
  className,
  headers,
  items,
  theme,
  Row,
  rowGap = '20',
  headerSize = 'normal',
}: TableProps<T>) => {
  const { t } = useTranslation();
  return (
    <section className={classNames(cls.Table_wrapper, className)}>
      <table className={classNames(cls.table, rowGapClasses[rowGap])}>
        <TableHeaders headerSize={headerSize} theme={theme} headers={headers} />
        <tbody>
          {items.map((item, index) => (
            <Row key={index} item={item} />
          ))}
        </tbody>
      </table>
    </section>
  );
};
