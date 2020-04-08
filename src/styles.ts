import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(10),
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    cryptoInputBox: {
      display: 'flex',
      marginBottom: 20
    },
    currencyInput: {
      minWidth: 'calc(75% - 10px)',
      marginRight: 10
    },
    currencyType: {
      minWidth: '25%',
    },
    table: {
      minWidth: 700,
    },
    FullNameInner: {
      display: 'flex',
      alignItems: 'center',
    },
    imageCoin: {
      maxWidth: 30,
      height: 30,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      marginRight: 15
    }
  }),
);