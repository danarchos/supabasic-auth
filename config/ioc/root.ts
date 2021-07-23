import Battalion from '../../Battalion/classes/Battalion';
import Inspector from '../../Battalion/classes/Inspector';
import Soldier from '../../Battalion/classes/Soldier';
import { interfaces } from 'inversify';

import { ContainerBinding, createContainer } from './core';
import { SYMBOLS } from './symbols';

const ROOT_TRANSIENTS: ContainerBinding[] = [Soldier, Battalion, Inspector].map(
  (injectable) => ({
    injectable,
    scope: 'Transient',
  })
);

const rootContainer = createContainer({
  bindings: ROOT_TRANSIENTS,
});

// Allows classes to inject the container instead of importing it
// and thus avoid circular dependencies
rootContainer
  .bind<interfaces.Container>(SYMBOLS.RootContainer)
  .toDynamicValue((context) => context.container);

export const getRootContainer = () => rootContainer;
