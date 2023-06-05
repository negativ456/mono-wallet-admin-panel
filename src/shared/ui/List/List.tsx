import cls from './List.module.scss';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Text, TextProps } from 'shared/ui/TextViews/ui/Text/Text';
import {TextSize} from "../../const/fontSize";

interface ListProps extends Omit<TextProps, 'children'> {
  className?: string;
  options?: string[];
  title?: string;
  listType?: 'normal' | 'dash';
}

export const List = ({
  className,
  title,
  options = [],
  textSize = TextSize.FS32,
  fontWeight = 600,
  listType = 'normal',
}: ListProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.List, className)}>
      {title && (
        <Text className={cls.title} fontWeight={fontWeight} textSize={textSize}>
          {title}
        </Text>
      )}
      <ul className={cls[listType]}>
        {options.map((text, idx) => (
          <li key={idx}>
            <Text textSize={TextSize.FS20}>{text}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
};
