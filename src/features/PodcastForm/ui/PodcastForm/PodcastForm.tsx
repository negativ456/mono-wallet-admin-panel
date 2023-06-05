import cls from "./PodcastForm.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Form } from "../../../../shared/ui/Form/Form";
import { useNavigate, useParams } from "react-router-dom";
import { Value } from "../../../../shared/types/calendar";
import { useAppDispatch } from "../../../../shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import {
  getNewPodcast,
  getPodcastById,
} from "../../../../entities/Podcast/model/selectors/selectors";
import { podcastActions } from "../../../../entities/Podcast";
import { useEffect, useState } from "react";
import { AppRoutes, routes } from "../../../../shared/const/router";

interface PodcastFormProps {
  className?: string;
}

export const PodcastForm = ({ className }: PodcastFormProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const newPodcast = useSelector(getNewPodcast);
  const currentPodcast = useSelector(getPodcastById(Number(id)));
  const [localLink, setLocalLink] = useState(newPodcast.link);
  const onChangeDate = (date: Value) => {
    dispatch(podcastActions.setNewPodcast({ date: date?.toLocaleString() }));
  };
  const onChangeLink = (value: string) => {
    setLocalLink(value);
  };

  const onChangeTitle = (value: string) => {
    dispatch(podcastActions.setNewPodcast({ title: value }));
  };

  const onChangeText = (value: string) => {
    dispatch(podcastActions.setNewPodcast({ text: value }));
  };

  const onSaveLink = () => {
    dispatch(podcastActions.setNewPodcast({ link: localLink }));
  };

  const onSave = () => {
    dispatch(
      podcastActions.updateItem({ id: currentPodcast?.id, ...newPodcast })
    );
    navigate(routes[AppRoutes.PODCASTS_CATEGORY]());
  };
  const onCreate = () => {
    dispatch(podcastActions.addItem(newPodcast));
    navigate(routes[AppRoutes.PODCASTS_CATEGORY]());
  };

  useEffect(() => {
    dispatch(
      podcastActions.setNewPodcast({ title: "", text: "", date: "", link: "" })
    );

    if (currentPodcast) {
      dispatch(
        podcastActions.setNewPodcast({
          title: currentPodcast.title,
          text: currentPodcast.text,
          date: currentPodcast.date,
          link: currentPodcast.link,
        })
      );
    }
  }, [currentPodcast, dispatch]);
  // if (id) {
  //   return (
  //     <Form
  //       addLink
  //       addDate
  //       isEditing
  //       onChangeTime={onChangeDate}
  //       onSave={onSave}
  //       title={newPodcast.title}
  //       text={newPodcast.text}
  //       onChangeTitle={onChangeTitle}
  //       onChangeText={onChangeText}
  //       onSaveLink={onSaveLink}
  //       onChangeLink={onChangeLink}
  //       linkValueState={newPodcast.link}
  //       linkValueInput={localLink}
  //       timeValue={newPodcast.date}
  //       className={classNames(cls.PodcastForm, className)}
  //     />
  //   );
  // }
  return (
    <Form
      addLink
      addDate
      isEditing={!!id}
      onCreate={onCreate}
      onSave={onSave}
      title={newPodcast.title}
      text={newPodcast.text}
      timeValue={newPodcast.date}
      onChangeTitle={onChangeTitle}
      onChangeText={onChangeText}
      linkValueInput={localLink}
      linkValueState={newPodcast.link}
      onChangeLink={onChangeLink}
      onSaveLink={onSaveLink}
      onChangeTime={onChangeDate}
      className={classNames(cls.PodcastForm, className)}
    />
  );
};
