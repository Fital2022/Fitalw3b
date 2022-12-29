import { Box, Typography } from "@mui/material";
import { FC } from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import WalletIcon from "@mui/icons-material/Wallet";

const BANKS: RProps[] = [
  { name: "Banco 1", quantity: 1000000 },
  { name: "Banco 2", quantity: 5000000 },
  { name: "T.C.", quantity: 10000000 },
];
const WALLETS: RProps[] = [
  { name: "Wallet 1", quantity: 1000000 },
  { name: "Wallet 2", quantity: 5000000 },
];

interface Props {
  type: "cuentas" | "wallets";
}

export const CashAccountDetails: FC<Props> = ({ type }) => {
  const isWallet = type === "wallets";

  const title = isWallet ? "Wallets" : "Cuentas";
  let icon = isWallet ? <WalletIcon /> : <BusinessCenterIcon />;

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "1000px", maxWidth: "95%" }}>
        <Box sx={{ display: "flex" }}>
          {icon}
          <Typography>{title}</Typography>
        </Box>
        <Box>
          {isWallet
            ? WALLETS.map((wallet, index) => (
                <Row
                  key={wallet.name}
                  name={wallet.name}
                  quantity={wallet.quantity}
                  odd={index % 2 !== 0}
                />
              ))
            : BANKS.map((bank, index) => (
                <Row
                  key={bank.name}
                  name={bank.name}
                  quantity={bank.quantity}
                  odd={index % 2 !== 0}
                />
              ))}
        </Box>
      </Box>
    </Box>
  );
};

interface RProps {
  name: string;
  quantity: number;
  odd?: boolean;
}
const Row: FC<RProps> = ({ name, quantity, odd }) => {
  return (
    <Box
      sx={{
        bgcolor: odd ? "#F0F0F0" : "#DDDDDD",
        ":not(:last-child)": {
          mb: 2,
        },
      }}
    >
      <Typography>{name}</Typography>
      <Typography>{quantity}</Typography>
    </Box>
  );
};
