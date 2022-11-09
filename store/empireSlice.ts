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
  },
  reducers: {
    addEscrow: (state, { payload }: PayloadAction<IEmpire>) => {
      state.empires.push(payload);
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
  },
});

export const {addBeneficiary, addEscrow, addTrustor, addRight} = empireSlice.actions
