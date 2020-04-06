import React, {useState, useEffect} from 'react';
import axios from 'axios'

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

type TCoin = {
  'fullName': string;
  'name': string;
  'imageUrl': string;
  'id': number;
  'price': number;
  'volume24hour': number;
}

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

const App = () => {
  const s = useStyles();
  const [allCoins, setAllCoins] = useState<TCoin[]>([]);
  useEffect(() => {
    axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
      .then(({data}) => {
        const coins: TCoin[] = data.Data.map((coin: any) => {
          const obj: TCoin = {
            fullName: coin.CoinInfo.FullName,
            name: coin.CoinInfo.Name,
            id: coin.CoinInfo.Id,
            price: coin.RAW.USD.PRICE.toFixed(2),
            'volume24hour': coin.RAW.USD.VOLUME24HOUR.toFixed(2),
            imageUrl: `https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`
          };
          return obj;
        });
        setAllCoins(coins);
      })
  }, []);
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
                  {allCoins.map((coin: TCoin) => (
                    <StyledTableRow key={coin.id}>
                      <StyledTableCell component="th" scope="row">
                        <div className={s.FullNameInner}>
                          <img className={s.imageCoin} src={coin.imageUrl}
                               alt=""/>
                          <div>{coin.fullName}</div>
                        </div>
                      </StyledTableCell>
                      <StyledTableCell align="center">{coin.name}</StyledTableCell>
                      <StyledTableCell align="center">${coin.price}</StyledTableCell>
                      <StyledTableCell align="center">${coin.volume24hour}</StyledTableCell>
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
