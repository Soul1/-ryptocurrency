import {observable, computed, action} from 'mobx'
import {TCoin, TCoinDiff} from "../types";
import axios from 'axios'

import stores from "../stores";

class CurrenciesStore {
  @observable private items: TCoin[] = [];
  @observable private diffObj: TCoinDiff = {};

  @computed
  get getItems() {
    return this.items;
  }
  @computed
  get getDiffObj() {
    return this.diffObj;
  }

  @action
  setItems = (items: TCoin[]): void => {
    this.diffObj = this.diffCurrencies(this.items, items)
      .reduce((initObj: TCoinDiff, obj) => {
        const newObj: TCoin = items.find(o => o.name === obj.name)!;
        const oldObj: TCoin = this.items.find(itemObj => itemObj.name === newObj.name)!;
        const color: string = newObj.price === oldObj.price ? ''
          : newObj.price > oldObj.price ? 'green' : 'red';
        initObj[newObj.name] = color;

        return initObj
      }, {});
    this.items = items;
    setTimeout(() => {
      this.diffObj = {}
    }, 5000)
  };

  @action
  fetchCoins = () => {
    axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
      .then(({data}) => {
        const coins: TCoin[] = data.Data.map((coin: any) => {
          const obj: TCoin = {
            fullName: coin.CoinInfo.FullName,
            name: coin.CoinInfo.Name,
            id: coin.CoinInfo.Id,
            price: coin.RAW.USD.PRICE.toFixed(3),
            'volume24hour': coin.RAW.USD.VOLUME24HOUR.toFixed(0),
            imageUrl: `https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`
          };
          return obj;
        });
        this.setItems(coins)
        stores.converterStore.setSelectedCoin(coins[0])
      });
  };

  diffCurrencies(arr1: TCoin[], arr2: TCoin[]) {
    return arr1.filter((obj, index) => {
      if (obj.price !== arr2[index].price) {
        return true
      }
      return false
    })
  }
}

export default CurrenciesStore;