import {
  IRight,
  IRightBeneficiary,
  ITrustor,
  IBeneficiary,
  IEmpire,
} from "../interfaces/empireInterfaces";

const right: IRight[] = [
  {
    name: "casa 1",
    value: 2000000,
    type: "casa",
    id: 1,
    img: "/images/avatar/casa1.jpeg",
  },
  {
    name: "casa 2",
    value: 20000000,
    type: "casa",
    id: 2,
    img: "/images/avatar/casa2.jpeg",
  },
  {
    name: "auto 1",
    value: 2000000,
    type: "auto",
    id: 3,
    img: "/images/avatar/coche1.jpeg",
  },
  {
    name: "auto 2",
    value: 2000000,
    type: "auto",
    id: 4,
    img: "images/avatar/coche2.jpeg",
  },
  {
    name: "Seguro AXA",
    value: 2000000,
    type: "seguro",
    id: 5,
    img: "/images/avatar/axa.png",
  },
  {
    name: "Seguro gnp",
    value: 2000000,
    type: "seguro",
    id: 6,
    img: "/images/avatar/gnp.png",
  },
];

const Properright: IRightBeneficiary[] = [
  {
    idRight: 1,
    percentage: 0,
  },
  {
    idRight: 2,
    percentage: 0,
  },
  {
    idRight: 3,
    percentage: 0,
  },
  {
    idRight: 4,
    percentage: 0,
  },
  {
    idRight: 5,
    percentage: 0,
  },
  {
    idRight: 6,
    percentage: 0,
  },
];
const Properright2: IRightBeneficiary[] = [
  {
    idRight: 1,
    percentage: 0,
  },
  {
    idRight: 2,
    percentage: 0,
  },
  {
    idRight: 3,
    percentage: 0,
  },
  {
    idRight: 4,
    percentage: 0,
  },
  {
    idRight: 5,
    percentage: 0,
  },
  {
    idRight: 6,
    percentage: 0,
  },
];
const Properright3: IRightBeneficiary[] = [
  {
    idRight: 1,
    percentage: 0,
  },
  {
    idRight: 2,
    percentage: 0,
  },
  {
    idRight: 3,
    percentage: 0,
  },
  {
    idRight: 4,
    percentage: 0,
  },
  {
    idRight: 5,
    percentage: 0,
  },
  {
    idRight: 6,
    percentage: 0,
  },
];
const Properright4: IRightBeneficiary[] = [
  {
    idRight: 1,
    percentage: 0,
  },
  {
    idRight: 2,
    percentage: 0,
  },
  {
    idRight: 3,
    percentage: 0,
  },
  {
    idRight: 4,
    percentage: 0,
  },
  {
    idRight: 5,
    percentage: 0,
  },
  {
    idRight: 6,
    percentage: 0,
  },
];

const trustor: ITrustor[] = [{ id: 1, name: "Volga" }];

const beneficiary: IBeneficiary[] = [
  {
    id: 1,
    name: "Ana Lopez",
    img: "/images/avatar/person2.jpeg",
    properties: Properright,
  },
  {
    id: 2,
    name: "Juan Lopez",
    img: "/images/avatar/person1.jpeg",
    properties: Properright2,
  },
  {
    id: 3,
    name: "Laura Lopez",
    img: "/images/avatar/person2.jpeg",
    properties: Properright3,
  },
  {
    id: 4,
    name: "Carlos Lopez",
    img: "/images/avatar/person1.jpeg",
    properties: Properright4,
  },
];

export const empire: IEmpire = {
  name: "Imperio de prueba",
  id: 0,
  rights: right,
  trustor: trustor,
  beneficiary: beneficiary,
  type: "Inversión",
};
