import { Container, interfaces } from 'inversify';

export type ContainerBinding = {
  id?: string | symbol;
  injectable: any;
  scope: 'Singleton' | 'Transient';
};

type ContainerOptions = {
  bindings: ContainerBinding[];
  containerOptions?: interfaces.ContainerOptions;
  parent?: interfaces.Container;
};

export const createContainer = ({
  bindings,
  parent,
  // By defining defaultScope as 'Singleton', we can manually define
  // only the non-singleton classes.
  containerOptions = { autoBindInjectable: true, defaultScope: 'Singleton' },
}: ContainerOptions) => {
  const container = new Container(containerOptions);

  bindings.forEach((binding) => {
    const { id, injectable, scope } = binding;

    if (scope === 'Transient') {
      container
        .bind(id ?? injectable)
        .to(injectable)
        .inTransientScope();
    }

    if (scope === 'Singleton') {
      container
        .bind(id ?? injectable)
        .to(injectable)
        .inSingletonScope();
    }
  });

  if (parent) {
    container.parent = parent;
  }
  return container;
};
