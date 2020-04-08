import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import {inject, observer} from "mobx-react";
import CurrenciesStore from "../../stores/currenciesStore";

interface IConverterBlock {
  s: any;
  currenciesStore?: CurrenciesStore;
}

const ConverterBlock: React.FC<IConverterBlock> = inject('currenciesStore')(
  observer(({s, currenciesStore}) => {
    const coins: string[] = currenciesStore!.getItems.map(coin => coin.name);
    return (
      <Paper className={s.paper}>
        <div className={s.cryptoInputBox}>
          <FormControl fullWidth className={s.currencyInput}>
            <TextField label="Сумма"/>
          </FormControl>
          <FormControl className={s.currencyType}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Валюта
            </InputLabel>

            <Select value={coins[0]}>
              {coins.map(name => <MenuItem value={name}>{name}</MenuItem>)}
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

            <Select value={coins[1]}>
              {coins.map(name => <MenuItem value={name}>{name}</MenuItem>)}
            </Select>
          </FormControl>
        </div>
      </Paper>
    )
  })
);

export default ConverterBlock;