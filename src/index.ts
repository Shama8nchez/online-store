import data from './script/data/data';
import './styles/style.scss';
import FilterData from './script/utils/filter/filter';
import { showPopup } from './script/utils/goods/goodsListener';
import { createFilters } from './script/utils/filter/filtersCreator';
import { headerListener } from './script/utils/cart/cartListener';

createFilters();
const arr = new FilterData();
arr.filterGoods(data);
showPopup();
headerListener();
