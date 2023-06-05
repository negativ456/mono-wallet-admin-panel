import { StateSchema } from "../../../../app/providers/store";
import { createSelector } from "@reduxjs/toolkit";

export const getReports = (state: StateSchema) => state.reports.reports;

export const getReportById = (id?: number) =>
  createSelector(getReports, (items) => items.find((item) => item.id === id));
export const getNewReport = (state: StateSchema) => state.reports.newReport;
