export interface IBottomMenuData {
  link: {
    id: number;
    name: string;
  };
  sublinks: IBottomMenuSubLink[];
}

export interface IBottomMenuSubLink {
  id: number;
  name: string;
  img: string;
}
