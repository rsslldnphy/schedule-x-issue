import {
  viewDay,
  viewMonthAgenda,
  viewMonthGrid,
  viewWeek,
} from "@schedule-x/calendar";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import "@schedule-x/theme-default/dist/index.css";
import { addDays } from "date-fns";

export default function Index() {
  const events = [
    {
      id: "f-0",
      title: "foo",
      description: "foo event",
      start: new Date().toISOString(),
      end: addDays(new Date(), 1).toISOString(),
    },
  ];
  const calendar = useCalendarApp({
    views: [viewDay, viewWeek, viewMonthGrid, viewMonthAgenda],
    events,
  });

  return (
        <ScheduleXCalendar calendarApp={calendar} />
  );
}
