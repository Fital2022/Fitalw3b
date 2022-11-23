import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { empire } from "../data/empire";
import {
  IEmpire,
  IRight,
  ITrustor,
  IBeneficiary,
  IRightBeneficiary,
} from "../interfaces/empireInterfaces";

export const empireSlice = createSlice({
  name: "empire",
  initialState: {
    empires: [{ ...empire }] as IEmpire[],
    selectedEmpire: {} as IEmpire,
  },
  reducers: {
    addEscrow: (state, { payload }: PayloadAction<IEmpire>) => {
      state.empires.push(payload);
    },
    selectEscrow: (state, { payload }: PayloadAction<number>) => {
      if (payload < 0) {
        state.selectedEmpire = {} as IEmpire;
        return;
      }
      state.selectedEmpire = state.empires.filter(
        (empire) => empire.id === payload
      )[0];
    },
    addRight: (state, { payload }: PayloadAction<IRight>) => {
      // const escrow = state.empires.find((empire) => empire.id === id);
      // if (escrow) escrow.rights.push(right);
      state.selectedEmpire.rights.push(payload);
      console.log(state.selectedEmpire.beneficiary);
    },
    addBeneficiaryProperties: (
      state,
      { payload }: PayloadAction<IRightBeneficiary>
    ) => {
      for (
        let index = 0;
        index < state.selectedEmpire.beneficiary.length;
        index++
      ) {
        state.selectedEmpire.beneficiary[index].properties.push(payload);
      }
      console.log(state.selectedEmpire);
    },

    updateBeneficiaryProperties: (
      state,
      { payload: { id, index } }: PayloadAction<{ id: number; index: number }>
    ) => {
      var cont = 0;

      var edited = [];

      for (let i = 0; i < state.selectedEmpire.beneficiary.length; i++) {
        if (
          state.selectedEmpire.beneficiary[i].properties[index].percentage !== 0
        ) {
          cont++;
          edited.push(i);
        }
      }
      console.log(cont);
      if (cont == 0) {
        var result = 100;
        for (let j = 0; j < state.selectedEmpire.beneficiary.length; j++) {
          if (state.selectedEmpire.beneficiary[j].id == id) {
            console.log("Estoy en el cliente");
            state.selectedEmpire.beneficiary[j].properties[index].percentage =
              result;
          }
        }
      } else {
        var result = 100 / (cont + 1);
        console.log("Reasignare datos con valor: ", result);
        for (let j = 0; j < state.selectedEmpire.beneficiary.length; j++) {
          if (state.selectedEmpire.beneficiary[j].id === id) {
            state.selectedEmpire.beneficiary[j].properties[index].percentage =
              result;
          }
        }
        for (let k = 0; k < edited.length; k++) {
          state.selectedEmpire.beneficiary[edited[k]].properties[
            index
          ].percentage = result;
        }
      }
    },
    deleteBeneficiaryProperties : ( state,
      { payload: { id, index } }: PayloadAction<{ id: number; index: number }>) => {
        var cont = 0;

        var edited = [];
    
        for (let i = 0; i < state.selectedEmpire.beneficiary.length; i++) {
          if (state.selectedEmpire.beneficiary[i].properties[index].percentage !== 0) {
            cont++;
            edited.push(i);
          }
        }
        console.log(cont);
    
        var result = 100 / (cont - 1);
        console.log("Reasignare datos con valor: ", result);
    
        for (let k = 0; k < edited.length; k++) {
          if (state.selectedEmpire.beneficiary[edited[k]].id === id) {
            state.selectedEmpire.beneficiary[edited[k]].properties[index].percentage = 0;
            console.log("Le he quitado el valor");
          } else {
            state.selectedEmpire.beneficiary[edited[k]].properties[index].percentage = result;
          }
        }
    
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

export const {
  addBeneficiary,
  addEscrow,
  addTrustor,
  addRight,
  addBeneficiaryProperties,
  selectEscrow,
  updateBeneficiaryProperties,
  deleteBeneficiaryProperties,
} = empireSlice.actions;
