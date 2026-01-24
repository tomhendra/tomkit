import { useEffect, useRef, useState } from 'react';

type UseControllableStateParams<T> = {
  prop?: T | undefined;
  defaultProp?: T | undefined;
  onChange?: (state: T) => void;
};

type SetStateFn<T> = (prevState?: T) => T;

/**
 * Manages controlled/uncontrolled state pattern.
 * If `prop` is provided, component is controlled.
 * Otherwise uses internal state initialized with `defaultProp`.
 */
export function useControllableState<T>({ prop, defaultProp, onChange }: UseControllableStateParams<T>) {
  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({
    defaultProp,
    onChange,
  });
  const isControlled = prop !== undefined;
  const value = isControlled ? prop : uncontrolledProp;

  const setValue = (nextValue: T | SetStateFn<T>) => {
    if (isControlled) {
      const setter = nextValue as SetStateFn<T>;
      const val = typeof nextValue === 'function' ? setter(prop) : nextValue;
      if (val !== prop) onChange?.(val as T);
    } else {
      setUncontrolledProp(nextValue);
    }
  };

  return [value, setValue] as const;
}

function useUncontrolledState<T>({ defaultProp, onChange }: Omit<UseControllableStateParams<T>, 'prop'>) {
  const uncontrolledState = useState<T | undefined>(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = useRef(value);

  useEffect(() => {
    if (prevValueRef.current !== value) {
      onChange?.(value as T);
      prevValueRef.current = value;
    }
  }, [onChange, value]);

  return uncontrolledState;
}
