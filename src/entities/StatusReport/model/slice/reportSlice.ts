import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReportSchema, StatusReport } from "../types/types";
import { ReportStatus } from "../const/statusConsts";

const initialState: ReportSchema = {
  reports: [
    {
      id: 1,
      title: "SATA-1",
      text: "sata",
      date: "19 may",
      incidents: [],
      status: ReportStatus.ACTUAL,
    },
  ],
  newReport: {
    title: "",
    text: "",
    incidents: [],
    status: ReportStatus.ACTUAL,
  },
};

export const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    setNewReport: (state, action: PayloadAction<Partial<StatusReport>>) => {
      state.newReport = { ...state.newReport, ...action.payload };
    },
    updateItem: (state, action: PayloadAction<Partial<StatusReport>>) => {
      state.reports = state.reports.map((report) =>
        report.id === action.payload.id
          ? { ...report, ...action.payload }
          : report
      );
    },
    addItem: (state, action: PayloadAction<StatusReport>) => {
      state.reports = [
        ...state.reports,
        { id: state.reports.length + 1, ...action.payload },
      ];
    },
  },
});

export const { actions: reportActions } = reportSlice;
export const { reducer: reportReducer } = reportSlice;
