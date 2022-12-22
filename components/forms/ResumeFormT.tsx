import { CameraAlt } from "@mui/icons-material";
import { Grid, Badge, Avatar, Typography, Button } from "@mui/material";
import React, { FC } from "react";
import DataTable from "../tables/DataTable";
import styles from "../../styles/Things.module.css";
import { IBeneficiary, IRight } from "../../interfaces/empireInterfaces";
import { useDispatch } from "react-redux";
import { AppDispatch, setShowForm } from "../../store";


interface Props {
      title: string;
      img: string;
      rights: IRight[];
      beneficiary: IBeneficiary[];
    }

export const ResumeFormT: FC<Props> = ({title,img, rights, beneficiary}) => {
    const dispatch = useDispatch<AppDispatch>();
    const closeform = () => {
        dispatch(setShowForm(false));
      };
  return (
    <>
      <Grid item xs={2}>
        <Badge
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          badgeContent={<CameraAlt />}
        >
          <Avatar
            alt="service1"
            src={img}
            sx={{ width: "70px", height: "70px" }}
          />
        </Badge>
        <br />
        <br />
        <Typography>{title}</Typography>
      </Grid>
      <Grid
        item
        container
        xs={8}
        justifyContent="center"
        direction="column"
        className={styles["table-data"]}
      >
        <Grid item container direction="column">
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className={styles["form-title"]}>
            <Typography variant="h4">{title}</Typography>
          </div>
          <Grid item>
            <DataTable rights={rights} beneficiarys={beneficiary} />
          </Grid>
          <br />
          <Grid item container direction="row" justifyContent="flex-end">
            <Button
              className={styles["button-form-select"]}
              sx={{
                bgcolor: "#31A354",
                color: "white",
                borderRadius: "10px",
                width: "130px",
                height: "37px",
              }}
              onClick={closeform}
            >
              Finalizar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
