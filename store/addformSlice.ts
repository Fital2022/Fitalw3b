import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const addformSlice = createSlice({
  name: "form",
  initialState: {
    isDraggin: false,
    showform: false,
    showform2: false,
    currentid: 6,
    userid: 5,
  },
  reducers: {

    setDragg: (state, { payload }: PayloadAction<boolean>) => {
      state.isDraggin = payload;
    },
    setShowForm: (state, { payload }: PayloadAction<boolean>) => {
      state.showform = payload;
    },
    setShowForm2: (state, { payload }: PayloadAction<boolean>) => {
      state.showform2 = payload;
    },
    addid: (state) => {
        state.currentid = state.currentid + 1;
        console.log("Tengo ahora el id: " + state.currentid);
    },
    adduser: (state) =>{
        state.userid = state.userid + 1;

    }

  },
});

export const {
 
  setDragg,
  setShowForm,
  setShowForm2,
  addid,
  adduser,
} = addformSlice.actions;
