import cls from "./StatusChangesForm.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { HStack, VStack } from "../../../../shared/ui/Stack";
import { Input } from "../../../../shared/ui/Input/Input";
import { TextArea } from "../../../../shared/ui/TextArea/TextArea";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { Guideline } from "shared/ui/Guideline/Guideline";
import { TextSize } from "shared/const/fontSize";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import {
  getNewReport,
  getReportById,
  reportActions,
} from "entities/StatusReport";
import { useEffect } from "react";
import { ReportStatus } from "../../../../entities/StatusReport/model/const/statusConsts";
import { AppRoutes, routes } from "../../../../shared/const/router";
import moment from "moment";

interface StatusChangesFormProps {
  className?: string;
}

export const StatusChangesForm = ({ className }: StatusChangesFormProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const report = useSelector(getReportById(Number(id)));
  const newReport = useSelector(getNewReport);
  useEffect(() => {
    dispatch(
      reportActions.setNewReport({
        title: "",
        text: "",
        incidents: [],
        status: ReportStatus.ACTUAL,
      })
    );
    if (report) {
      dispatch(
        reportActions.setNewReport({
          title: report.title,
          text: report.text,
          incidents: report.incidents,
          status: report.status,
        })
      );
    }
  }, [dispatch, report]);

  const onChangeTitle = (value: string) => {
    dispatch(
      reportActions.setNewReport({
        title: value,
      })
    );
  };

  const onChangeText = (value: string) => {
    dispatch(
      reportActions.setNewReport({
        text: value,
      })
    );
  };

  const createReport = () => {
    dispatch(
      reportActions.addItem({
        date: moment().format("MMM Do"),
        ...newReport,
      })
    );
    navigate(routes[AppRoutes.STATUS_CHANGES]());
  };

  const updateReport = () => {
    dispatch(reportActions.updateItem({ id: Number(id), ...newReport }));
    navigate(routes[AppRoutes.STATUS_CHANGES]());
  };

  const setStatus = (status: ReportStatus) => () => {
    dispatch(reportActions.setNewReport({ status }));
  };

  return (
    <VStack
      gap={"40"}
      max
      className={classNames(cls.StatusChangesForm, className)}
    >
      <Input
        value={newReport.title}
        label={"Title"}
        onChange={onChangeTitle}
        labelSize={"S"}
        placeholder={"Enter here"}
      />
      <HStack align={"start"} max gap={"30"}>
        <VStack max gap={"40"}>
          <TextArea
            max
            value={newReport.text}
            label={"Text"}
            onChange={onChangeText}
            placeholder={"Enter here"}
          />
          <HStack max justify={"between"}>
            <HStack gap={"30"}>
              <Button
                textSize={TextSize.FS18}
                theme={ButtonTheme.DARK}
                size={ButtonSize.XS}
                className={
                  newReport.status === ReportStatus.ACTUAL
                    ? cls.activeActual
                    : ""
                }
                onClick={setStatus(ReportStatus.ACTUAL)}
              >
                Problem is <span className={cls.actual}>actual</span>
              </Button>
              <Button
                textSize={TextSize.FS18}
                theme={ButtonTheme.DARK}
                size={ButtonSize.XS}
                onClick={setStatus(ReportStatus.RESOLVED)}
                className={
                  newReport.status === ReportStatus.RESOLVED
                    ? cls.activeResolved
                    : ""
                }
              >
                Problem is <span className={cls.resolve}>resolved</span>
              </Button>
            </HStack>
            <Button
              textSize={TextSize.FS18}
              theme={ButtonTheme.DARK}
              size={ButtonSize.XS}
              onClick={id ? updateReport : createReport}
            >
              {id ? "Save changes" : "Create a new"}
            </Button>
          </HStack>
        </VStack>
        <Guideline />
      </HStack>
    </VStack>
  );
};
