import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const mockerinterview = pgTable("mockerinterview", {
  id: serial("id").primaryKey(),
  jsonMockRes: text("jsonMockRes").notNull(),
  jobExperence: varchar("jobExperence").notNull(),
  jobDes: varchar("jobDes").notNull(),
  jobPosition: varchar("jobPosition").notNull(),
  createdBy: varchar("createdBy").notNull(),
  createdAt: varchar("createdAt"),
  mockId: varchar("mockId").notNull(),
});
