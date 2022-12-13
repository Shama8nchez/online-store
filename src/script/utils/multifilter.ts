import { Callback, IGoods, IFilter } from '../data/types';

export const produceArr: string[] = [];
export const memoryArr: string[] = [];
export const colorArr: string[] = [];
export const search = <HTMLInputElement>document.querySelector('#search');

export function sortByalphabet(data: IGoods[]) {
  data.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    return -1;
  });
}

function multifilter(fltr: Array<Callback>) {
  return function (goods: IGoods) {
    return fltr.every((filterFunc: Callback) => filterFunc(goods));
  };
}

function inclColor(goods: IGoods) {
  return colorArr.includes(goods.color);
}
function inclProduce(goods: IGoods) {
  return produceArr.includes(goods.produce);
}
function inclMemory(goods: IGoods) {
  return memoryArr.includes(goods.memory);
}
function inclTitle(goods: IGoods) {
  return goods.title.toLowerCase().includes(search.value.toLowerCase());
}

export function fltr(filtersList: IFilter, data: IGoods[]) {
  const propArr = [];

  if (colorArr.length !== 0) propArr.push(inclColor);
  if (memoryArr.length !== 0) propArr.push(inclMemory);
  if (produceArr.length !== 0) propArr.push(inclProduce);

  propArr.push(inclTitle);
  filtersList.sortGoods(data.filter(multifilter(propArr)));
}

export function addProperty(property: Array<string>, e: Event) {
  (<HTMLElement>e.target).classList.toggle('active');

  if (property.includes((<HTMLElement>e.target).innerHTML)) {
    property.splice(property.indexOf((<HTMLElement>e.target).innerHTML), 1);
  } else {
    property.push((<HTMLElement>e.target).innerHTML);
  }
}
