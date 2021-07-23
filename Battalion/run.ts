import { getRootContainer } from '../config/ioc/root';

import Inspector from './classes/Inspector';

const inspector1 = getRootContainer().get<Inspector>(Inspector);
const inspector2 = getRootContainer().get<Inspector>(Inspector);

inspector1.report();
inspector2.report();
