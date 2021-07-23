import { injectable, postConstruct } from 'inversify';

import { getSn } from '../utils';

@injectable()
export class Soldier {
  public sn = 0;

  @postConstruct() init() {
    this.sn = getSn();
  }
}

export default Soldier;
