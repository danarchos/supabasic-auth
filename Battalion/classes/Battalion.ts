import { SYMBOLS } from '../../config/ioc/symbols';
import { inject, injectable, interfaces, postConstruct } from 'inversify';

import Soldier from './Soldier';

@injectable()
export class Battalion {
  // By injecting a factory we effectively access Container.get()
  // without having to import rootContainer, and thus
  // creating a circular dependency
  @inject(SYMBOLS.RootContainer) rootContainer!: interfaces.Container;

  public soldiers: Soldier[] = [];

  @postConstruct() init() {
    this.soldiers = [1, 2, 3].map(() =>
      this.rootContainer.get<Soldier>(Soldier)
    );
  }

  public get inspection() {
    return this.soldiers.map((soldier) => soldier.sn);
  }
}

export default Battalion;
