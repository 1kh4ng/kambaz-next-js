import { createSlice } from "@reduxjs/toolkit";
import { assignments as seed } from "../../../Database";
import { v4 as uuidv4 } from "uuid";

type AssignmentItem = {
  slug: string;
  title: string;
  notAvailableUntil?: string;
  due: string;
  pts: number;
};

type AssignmentGroup = {
  course: number | string;
  group: string;
  weight: string;
  items: AssignmentItem[];
};

type AssignmentsState = {
  groups: AssignmentGroup[];
};

const initialState: AssignmentsState = {
  groups: (seed as AssignmentGroup[]),
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (
      state,
      { payload }: { payload: { course: number | string; title?: string } }
    ) => {
      const title = payload.title ?? "New Assignment";
      const group = state.groups.find(
        (g) => String(g.course) === String(payload.course)
      );
      const newItem: AssignmentItem = {
        slug: `a-${uuidv4()}`,
        title,
        due: "TBD",
        pts: 100,
      };
      if (group) {
        group.items = [...group.items, newItem];
      } else {
        state.groups.push({
          course: payload.course,
          group: "ASSIGNMENTS",
          weight: "40% of Total",
          items: [newItem],
        });
      }
    },

    updateAssignment: (
      state,
      {
        payload,
      }: {
        payload: {
          course: number | string;
          slug: string;
          title?: string;
          notAvailableUntil?: string;
          due?: string;
          pts?: number;
        };
      }
    ) => {
      const group = state.groups.find(
        (g) => String(g.course) === String(payload.course)
      );
      if (!group) return;
      group.items = group.items.map((it) =>
        it.slug === payload.slug
          ? {
              ...it,
              ...(payload.title !== undefined ? { title: payload.title } : {}),
              ...(payload.notAvailableUntil !== undefined
                ? { notAvailableUntil: payload.notAvailableUntil }
                : {}),
              ...(payload.due !== undefined ? { due: payload.due } : {}),
              ...(payload.pts !== undefined ? { pts: payload.pts } : {}),
            }
          : it
      );
    },

    deleteAssignment: (
      state,
      { payload }: { payload: { course: number | string; slug: string } }
    ) => {
      const group = state.groups.find(
        (g) => String(g.course) === String(payload.course)
      );
      if (!group) return;
      group.items = group.items.filter((it) => it.slug !== payload.slug);
    },
  },
});

export const { addAssignment, updateAssignment, deleteAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
