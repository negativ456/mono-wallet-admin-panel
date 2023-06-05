import cls from "./RoadmapList.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { VStack } from "../../../../shared/ui/Stack";
import { InfoBlock } from "../../../../shared/ui/InfoBlock";
import { useSelector } from "react-redux";
import { getRoadmapItems } from "../../model/selectors/roadmapSelectors";
import { useNavigate } from "react-router-dom";
import { AppRoutes, routes } from "../../../../shared/const/router";

interface RoadmapListProps {
  className?: string;
}

export const RoadmapList = ({ className }: RoadmapListProps) => {
  const { t } = useTranslation();
  const roadmapList = useSelector(getRoadmapItems);
  const navigate = useNavigate();
  const onEdit = (id: number) => {
    navigate(routes[AppRoutes.EDIT_ROADMAP](id.toString()));
  };
  return (
    <VStack gap={"20"} className={classNames(cls.RoadmapList, className)}>
      {roadmapList.map((item) => (
        <InfoBlock
          key={item.id}
          id={item.id ?? 1}
          onEdit={onEdit}
          title={item.name}
          subTitle={`#${item.id}`}
        />
      ))}
    </VStack>
  );
};
