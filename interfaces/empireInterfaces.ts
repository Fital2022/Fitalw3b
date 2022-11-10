export interface IEmpire {
  name: string;
  id: number;
  rights: IRight[];
  trustor: ITrustor[];
  beneficiary: IBeneficiary[];
}

export interface IRight {
  name: string;
  value: number;
  type: 'casa' | 'departamento' | 'auto';
  id?: number;
}

export interface ITrustor {
  id: number;
  name: string;
}

export interface IBeneficiary {
  id: number;
  name: string;
}

export interface IRightBeneficiary {
  idRight: number;
  idBeneficiary: number;
  percentage: number;
}