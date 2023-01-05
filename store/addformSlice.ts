import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRight } from "../interfaces/empireInterfaces";

export const addformSlice = createSlice({
  name: "form",
  initialState: {
    isDraggin: false,
    showform: false,
    showform2: false,
    currentid: 6,
    userid: 5,
    suboptions: false,
    menuselected: "",
    formvalues: {
      name: "" as IRight['type'],
      img: ""
    },
    formvalues2: {
      name: "" as IRight['type'],
      img: ""
    }
  },
  reducers: {

    setDragg: (state, { payload }: PayloadAction<boolean>) => {
      state.isDraggin = payload;
    },
    setShowForm: (state, { payload }: PayloadAction<boolean>) => {
      state.showform = payload;
      console.log("Cambie su valor a: " + state.showform);
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
    },
    setSuboptions: (state, {payload}: PayloadAction<boolean>) => {
      state.suboptions = payload
      console.log("El valor es: " + state.suboptions)
    },
    setAutoSubOptions: (state) => {
      state.suboptions =!state.suboptions
      console.log("El valor es: " + state.suboptions)
    },

    setFormValues: (state, {payload: {name, img}}: PayloadAction<{name: IRight['type'], img: string}> ) => {
      state.formvalues.name = name;
      state.formvalues.img = img;
    },
    setFormValues2: (state, {payload: {name, img}}: PayloadAction<{name: IRight['type'], img: string}> ) => {
      state.formvalues2.name = name;
      state.formvalues2.img = img;
    },
    setMenuSelected: (state, {payload}: PayloadAction<string>) => {
      state.menuselected = payload;
      console.log("El menuselected es: " + state.menuselected)
    },

  },
});


export const {
 
  setDragg,
  setShowForm,
  setShowForm2,
  addid,
  adduser,
  setSuboptions,
  setAutoSubOptions,
  setFormValues,
  setFormValues2,
  setMenuSelected,
} = addformSlice.actions;
