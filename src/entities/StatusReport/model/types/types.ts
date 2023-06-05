import { Incident } from "../../../Incident";
import { ReportStatus } from "../const/statusConsts";

export interface StatusReport {
  id?: number;
  title: string;
  date?: string;
  text: string;
  incidents: Incident[];
  status: ReportStatus;
}

export interface ReportSchema {
  reports: StatusReport[];
  newReport: StatusReport;
}
