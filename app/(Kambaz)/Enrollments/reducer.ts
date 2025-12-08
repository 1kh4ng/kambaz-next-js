import { createSlice } from "@reduxjs/toolkit";

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
  enrollments: [],
  showAllCourses: false,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, { payload }: { payload: Enrollment[] }) => {
      state.enrollments = payload;
    },
    toggleEnrollmentsView: (state) => {
      state.showAllCourses = !state.showAllCourses;
    },
  },
});

export const { setEnrollments, toggleEnrollmentsView } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
