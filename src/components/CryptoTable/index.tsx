import React from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import {createStyles, Theme, withStyles} from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import {TCoin, TCoinDiff} from "../../types";
import {inject, observer} from "mobx-react";
import CurrenciesStore from "../../stores/currenciesStore";
import ConverterStore from "../../stores/converterStore";

interface ICryptoTable {
  s: any;
  currenciesStore?: CurrenciesStore;
  converterStore?: ConverterStore;
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

const CryptoTable = inject('currenciesStore', 'converterStore')
(observer(({s, currenciesStore, converterStore}: ICryptoTable) => {
  const items: TCoin[] = currenciesStore!.getItems;
  const diffObj: TCoinDiff = currenciesStore!.getDiffObj;

  React.useEffect(() => {
    if (currenciesStore) {
      currenciesStore.fetchCoins();
      setInterval(() => {
        currenciesStore.fetchCoins();
      }, 30000)
    }
  }, []);

  const onClickRow = (coin: TCoin) => {
    if (converterStore) {
      converterStore.setSelectedCoin(coin)
    }
  };

  return (
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
            {!items.length ? 'Загрузка...'
              : items.map((coin: TCoin) => (
              <StyledTableRow onClick={() => onClickRow(coin)} className={s.rowCurrency} hover key={coin.id}>
                <StyledTableCell component="th" scope="row">
                  <div className={s.FullNameInner}>
                    <img className={s.imageCoin} src={coin.imageUrl}
                         alt=""/>
                    <div>{coin.fullName}</div>
                  </div>
                </StyledTableCell>
                <StyledTableCell align="center">{coin.name}</StyledTableCell>
                <StyledTableCell className={diffObj[coin.name] && s[`${diffObj[coin.name]}Column`]}
                                 align="center">${coin.price}</StyledTableCell>
                <StyledTableCell align="center">${coin.volume24hour}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}));

export default CryptoTable;