import { inject, injectable } from 'inversify';

import { getSn } from '../utils';
import Battalion from './Battalion';

@injectable()
class Inspector {
  @inject(Battalion) public battalion!: Battalion;

  private sn = getSn();

  public report = () =>
    console.log('inspector', this.sn, 'reports', this.battalion.inspection);
}

export default Inspector;
