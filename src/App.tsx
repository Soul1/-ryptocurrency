import React from 'react';
import Container from '@material-ui/core/Container';
import {withStyles, makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme: Theme) =>
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
  }),
);

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }),
)(TableRow);

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const App = () => {
  const s = useStyles();
  return (
    <Container className={s.root} maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Paper className={s.paper}>
            <TableContainer component={Paper}>
              <Table className={s.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="left">FullName</StyledTableCell>
                    <StyledTableCell align="center">Name</StyledTableCell>
                    <StyledTableCell align="center">Price</StyledTableCell>
                    <StyledTableCell align="center">volume24hour</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">{row.calories}</StyledTableCell>
                      <StyledTableCell align="center">{row.fat}</StyledTableCell>
                      <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={s.paper}>
            <div className={s.cryptoInputBox}>
              <FormControl fullWidth className={s.currencyInput}>
                <TextField label="Сумма"/>
              </FormControl>
              <FormControl className={s.currencyType}>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                  Валюта
                </InputLabel>

                <Select value={30}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={s.cryptoInputBox}>
              <FormControl fullWidth className={s.currencyInput}>
                <TextField label="Сумма"/>
              </FormControl>
              <FormControl className={s.currencyType}>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                  Валюта
                </InputLabel>

                <Select value={30}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Typography variant="h5" component="h3" gutterBottom>
              76,40 Российский рубль
            </Typography>
          </Paper>
        </Grid>

      </Grid>
    </Container>
  )
};

export default App;
