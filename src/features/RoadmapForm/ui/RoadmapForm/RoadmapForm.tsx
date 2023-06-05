import cls from "./RoadmapForm.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Input } from "../../../../shared/ui/Input/Input";
import { HStack, VStack } from "../../../../shared/ui/Stack";
import { Text } from "../../../../shared/ui/TextViews";
import { TextSize } from "../../../../shared/const/fontSize";
import {
  Button,
  ButtonSize,
  ButtonTheme,
} from "../../../../shared/ui/Button/Button";
import { Checkbox } from "../../../../shared/ui/Checkbox/Checkbox";
import { useSelector } from "react-redux";
import {
  getRoadmapItemById,
  getRoadmapNewItem,
} from "../../../../entities/RoadmapItem/model/selectors/roadmapSelectors";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../../shared/lib/hooks/useAppDispatch";
import { roadmapActions } from "../../../../entities/RoadmapItem";
import { useEffect } from "react";
import { AppRoutes, routes } from "../../../../shared/const/router";

interface RoadmapFormProps {
  className?: string;
  isEditing?: boolean;
}

export const RoadmapForm = ({ className, isEditing }: RoadmapFormProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const item = useSelector(getRoadmapItemById(Number(id)));
  const newItem = useSelector(getRoadmapNewItem);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(roadmapActions.setNewItem({ name: "", date: "", tasks: [] }));

    if (item) {
      dispatch(
        roadmapActions.setNewItem({
          name: item.name,
          date: item.date,
          tasks: item.tasks,
        })
      );
    }
  }, [dispatch, item]);
  const onChangeTitle = (value: string) => {
    dispatch(roadmapActions.setNewItem({ name: value }));
  };

  const onChangeDate = (value: string) => {
    dispatch(roadmapActions.setNewItem({ date: value }));
  };

  const addTask = () => {
    dispatch(roadmapActions.addEmptyTask());
  };

  const onChangeIsReady = (taskId?: number) => (value: boolean) => {
    dispatch(roadmapActions.setNewItemTask({ id: taskId, isReady: value }));
  };

  const createRoadmapItem = () => {
    dispatch(roadmapActions.addItem(newItem));
    navigate(routes[AppRoutes.ROADMAP_LIST]());
  };

  const updateRoadmapItem = () => {
    dispatch(roadmapActions.updateItem({ id: Number(id), ...newItem }));
    navigate(routes[AppRoutes.ROADMAP_LIST]());
  };

  const onChangeTaskLabel = (taskId?: number) => (value: string) => {
    dispatch(roadmapActions.setNewItemTask({ id: taskId, name: value }));
  };

  return (
    <VStack gap={"30"} className={classNames(cls.RoadmapForm, className)}>
      <HStack gap={"45"}>
        <Input
          className={cls.title}
          label={"Title"}
          labelSize={"S"}
          fullWidth={false}
          onChange={onChangeTitle}
          value={newItem.name}
          placeholder={"Enter here"}
        />
        <Input
          onChange={onChangeDate}
          label={"Year"}
          fullWidth={false}
          labelSize={"S"}
          value={newItem.date}
          placeholder={"Enter here"}
        />
      </HStack>
      <VStack gap={"20"}>
        <HStack gap={"20"}>
          <Text textSize={TextSize.FS20}>Items</Text>
          <Button theme={ButtonTheme.EMPTY} onClick={addTask}>
            +
          </Button>
        </HStack>
        <VStack className={cls.checkboxes} gap={"20"}>
          {newItem.tasks.map((task, index) => (
            <Checkbox
              key={index}
              checked={task.isReady}
              orientation={"right"}
              onChangeLabel={onChangeTaskLabel(task.id)}
              onChange={onChangeIsReady(task.id)}
              editable
              label={task.name}
            />
          ))}
        </VStack>
      </VStack>
      <Button
        textSize={TextSize.FS18}
        theme={ButtonTheme.DARK}
        size={ButtonSize.XS}
        onClick={id ? updateRoadmapItem : createRoadmapItem}
      >
        {id ? "Save changes" : "Create a new"}
      </Button>
    </VStack>
  );
};
