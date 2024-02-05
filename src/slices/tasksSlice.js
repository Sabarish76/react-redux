import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasksList: [],
  selectedTask: {},
};

// const tasksSlice = createSlice({
//   name: "tasksSlice",
//   initialState,
//   reducers: {
//     addTasktoList: (state, action) => {
//       const id = Math.random() * 100;
//       let task = { ...action.payload, id };
//       state.tasksList.push(task);
//     },
//     removeTaskFromList: (state, action) => {
//       state.tasksList = state.tasksList.filter(
//         (task) => task.id !== action.payload.id
//       );
//     },
//     UpdateTaskInList: (state, action) => {
//       state.tasksList = state.tasksList.map((task) =>
//         task.id === action.payload.id ? action.payload : task
//       );
//     },
//     setSelectedTask: (state, action) => {
//       state.selectedTask = action.payload;
//     },
//   },
// });
const tasksSlice = createSlice({
  name: "tasksList",
  initialState,
  reducers: {
    addTasktoList: (state, action) => {
      const id = Math.random() * 100;
      let task = { ...action.payload, id };
      state.tasksList.push(task);
    },
    removeTaskFromList: (state, action) => {
      state.tasksList = state.tasksList.filter(
        (task) => task.id !== action.payload.id
      );
    },
    UpdateTaskInList: (state, action) => {
      state.tasksList = state.tasksList.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },
  },
});
export const {
  addTasktoList,
  removeTaskFromList,
  UpdateTaskInList,
  setSelectedTask,
} = tasksSlice.actions;

export default tasksSlice.reducer;
