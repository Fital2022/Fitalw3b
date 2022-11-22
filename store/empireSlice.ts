import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IEmpire,
  IRight,
  ITrustor,
  IBeneficiary,
} from "../interfaces/empireInterfaces";

export const empireSlice = createSlice({
  name: "empire",
  initialState: {
    empires: [] as IEmpire[],
    selectedEmpire: null as IEmpire | null,
    isDraggin: false,
    showform: false,
  },
  reducers: {
    addEscrow: (state, { payload }: PayloadAction<IEmpire>) => {
      state.empires.push(payload);
    },
    selectEscrow: (state, { payload }: PayloadAction<number>) => {
      if (payload < 0) {
        state.selectedEmpire = null;
        return;
      }
      state.selectedEmpire = state.empires.filter(
        (empire) => empire.id === payload
      )[0];
    },
    addRight: (
      state,
      { payload: { id, right } }: PayloadAction<{ right: IRight; id: number }>
    ) => {
      const escrow = state.empires.find((empire) => empire.id === id);
      if (escrow) escrow.rights.push(right);
    },
    addTrustor: (
      state,
      {
        payload: { id, trustor },
      }: PayloadAction<{ id: number; trustor: ITrustor }>
    ) => {
      const escrow = state.empires.find((empire) => empire.id === id);
      if (escrow) escrow.trustor.push(trustor);
    },
    addBeneficiary: (
      state,
      {
        payload: { id, beneficiary },
      }: PayloadAction<{ id: number; beneficiary: IBeneficiary }>
    ) => {
      const escrow = state.empires.find((empire) => empire.id === id);
      if (escrow) escrow.beneficiary.push(beneficiary);
    },
    setDragg: (state, { payload }: PayloadAction<boolean>) => {
      state.isDraggin = payload;
    },
    setShowForm: (state, { payload }: PayloadAction<boolean>) => {
      state.showform = payload;
    },
  },
});

export const {
  addBeneficiary,
  addEscrow,
  addTrustor,
  addRight,
  setDragg,
  setShowForm,
  selectEscrow,
} = empireSlice.actions;
