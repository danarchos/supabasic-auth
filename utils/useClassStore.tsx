import { useState } from 'react';

export function useClassStore<StoreType>(initialValue: StoreType) {
  const [store] = useState(initialValue);

  return store;
}
