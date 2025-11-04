import { createSlice } from "@reduxjs/toolkit";
import { enrollments as seed } from "../Database";
import { v4 as uuidv4 } from "uuid";

type Enrollment = {
  _id: string | number;
  user: string | number;
  course: string | number;
};

type EnrollmentsState = {
  enrollments: Enrollment[];
  showAllCourses: boolean;
};

const initialState: EnrollmentsState = {
  enrollments: seed as Enrollment[],
  showAllCourses: false,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    toggleEnrollmentsView: (state) => {
      state.showAllCourses = !state.showAllCourses;
    },
    enrollUserInCourse: (
      state,
      { payload }: { payload: { user: string | number; course: string | number } }
    ) => {
      const exists = state.enrollments.some(
        (e) =>
          String(e.user) === String(payload.user) &&
          String(e.course) === String(payload.course)
      );
      if (!exists) {
        state.enrollments.push({
          _id: uuidv4(),
          user: payload.user,
          course: payload.course,
        });
      }
    },
    unenrollUserFromCourse: (
      state,
      { payload }: { payload: { user: string | number; course: string | number } }
    ) => {
      state.enrollments = state.enrollments.filter(
        (e) =>
          !(
            String(e.user) === String(payload.user) &&
            String(e.course) === String(payload.course)
          )
      );
    },
  },
});

export const {
  toggleEnrollmentsView,
  enrollUserInCourse,
  unenrollUserFromCourse,
} = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
