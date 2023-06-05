import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { ReactComponent as EngIcon } from "shared/assets/icons/flags/en.svg";
import { ReactComponent as FrenchIcon } from "shared/assets/icons/flags/fr.svg";
import { ReactComponent as RusIcon } from "shared/assets/icons/flags/ru.svg";
import React from "react";
import i18n from "i18next";

import { Select, SelectOption, SelectProps } from "shared/ui/Select/Select";
import i18next from "i18next";

interface LangSwitcherProps extends SelectProps<string> {
  className?: string;
}
interface LangItem {
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  title: string;
}
const LangList: SelectOption<string>[] = [
  {
    Icon: EngIcon,
    name: "English",
    value: "en-EN",
  },
  {
    Icon: FrenchIcon,
    name: "French",
    value: "fr-FR",
  },
  {
    Icon: RusIcon,
    name: "Russian",
    value: "ru-RU",
  },
];
export const LangSwitcher = ({
  className,
  ...otherProps
}: LangSwitcherProps) => {
  const { t } = useTranslation();
  console.log(i18next.languages);
  const changeLang = async (newLang: string) => {
    await i18n.changeLanguage(newLang);
  };
  return (
    <div className={classNames(cls.LangSwitcher, className)}>
      <Select
        labelSize={"S"}
        direction={"right"}
        options={LangList}
        onChange={changeLang}
        value={i18n.language}
        {...otherProps}
      />
    </div>
  );
};
