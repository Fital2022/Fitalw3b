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
}

export interface ITrustor {
  id: number;
  name: string;
}

export interface IBeneficiary {
  id: number;
  name: string;
}