export interface IEmpire {
  name: string;
  id: number;
  type?: string;
  rights: IRight[];
  trustor: ITrustor[];
  beneficiary: IBeneficiary[];
}

export interface IRight {
  name: string;
  value: number;
  type: "casa" | "departamento" | "auto" | "seguro" | "Cuenta Bancaria" | "Wallet 1" | "Wallet 2" | "Arte" | "Inversiones" | "Bitcoin";
  id?: number;
  img?: string;
}

export interface ITrustor {
  id: number;
  name: string;
}

export interface IBeneficiary {
  id: number;
  name: string;
  img?: string;
  properties: IRightBeneficiary[];
}

export interface IRightBeneficiary {
  idRight: number;
  percentage: number;
}
