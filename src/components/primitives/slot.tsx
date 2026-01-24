import * as React from 'react';

import type {
  Image as RNImage,
  Pressable as RNPressable,
  Text as RNText,
  View as RNView,
  PressableStateCallbackType,
  ImageProps as RNImageProps,
  ImageStyle as RNImageStyle,
  PressableProps as RNPressableProps,
  TextProps as RNTextProps,
  ViewProps as RNViewProps,
  StyleProp,
} from 'react-native';

type SlotPressableProps = RNPressableProps & {
  ref?: React.Ref<React.ComponentRef<typeof RNPressable>>;
};

function Pressable({ children, ref, ...pressableSlotProps }: SlotPressableProps) {
  if (!React.isValidElement(children)) {
    console.log('Slot.Pressable - Invalid asChild element', children);
    return null;
  }

  const childProps = children.props as AnyProps;
  const childRef = childProps.ref as React.Ref<React.ComponentRef<typeof RNPressable>> | undefined;

  return React.cloneElement(isTextChildren(children) ? <></> : children, {
    ...mergeProps(pressableSlotProps, childProps),
    ref: ref ? composeRefs(ref, childRef) : childRef,
  });
}

type SlotViewProps = RNViewProps & {
  ref?: React.Ref<React.ComponentRef<typeof RNView>>;
};

function View({ children, ref, ...viewSlotProps }: SlotViewProps) {
  if (!React.isValidElement(children)) {
    console.log('Slot.View - Invalid asChild element', children);
    return null;
  }

  const childProps = children.props as AnyProps;
  const childRef = childProps.ref as React.Ref<React.ComponentRef<typeof RNView>> | undefined;

  return React.cloneElement(isTextChildren(children) ? <></> : children, {
    ...mergeProps(viewSlotProps, childProps),
    ref: ref ? composeRefs(ref, childRef) : childRef,
  });
}

type SlotTextProps = RNTextProps & {
  ref?: React.Ref<React.ComponentRef<typeof RNText>>;
};

function Text({ children, ref, ...textSlotProps }: SlotTextProps) {
  if (!React.isValidElement(children)) {
    console.log('Slot.Text - Invalid asChild element', children);
    return null;
  }

  const childProps = children.props as AnyProps;
  const childRef = childProps.ref as React.Ref<React.ComponentRef<typeof RNText>> | undefined;

  return React.cloneElement(isTextChildren(children) ? <></> : children, {
    ...mergeProps(textSlotProps, childProps),
    ref: ref ? composeRefs(ref, childRef) : childRef,
  });
}

type SlotImageProps = RNImageProps & {
  children?: React.ReactNode;
  ref?: React.Ref<React.ComponentRef<typeof RNImage>>;
};

function Image({ children, ref, ...imageSlotProps }: SlotImageProps) {
  if (!React.isValidElement(children)) {
    console.log('Slot.Image - Invalid asChild element', children);
    return null;
  }

  const childProps = children.props as AnyProps;
  const childRef = childProps.ref as React.Ref<React.ComponentRef<typeof RNImage>> | undefined;

  return React.cloneElement(isTextChildren(children) ? <></> : children, {
    ...mergeProps(imageSlotProps, childProps),
    ref: ref ? composeRefs(ref, childRef) : childRef,
  });
}

export { Image, Pressable, Text, View };

function composeRefs<T>(...refs: (React.Ref<T> | undefined)[]) {
  return (node: T) =>
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T>).current = node;
      }
    });
}

// any is the right choice here, since props could be anything
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyProps = Record<string, any>;

function mergeProps(slotProps: AnyProps, childProps: AnyProps) {
  const overrideProps = { ...childProps };

  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];

    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args: unknown[]) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === 'style') {
      overrideProps[propName] = combineStyles(slotPropValue, childPropValue);
    }
  }

  return { ...slotProps, ...overrideProps };
}

type PressableStyle = RNPressableProps['style'];
type ImageStyle = StyleProp<RNImageStyle>;
type Style = PressableStyle | ImageStyle;

function combineStyles(slotStyle?: Style, childValue?: Style) {
  if (typeof slotStyle === 'function' && typeof childValue === 'function') {
    return (state: PressableStateCallbackType) => [slotStyle(state), childValue(state)];
  }
  if (typeof slotStyle === 'function') {
    return (state: PressableStateCallbackType) => [slotStyle(state), childValue];
  }
  if (typeof childValue === 'function') {
    return (state: PressableStateCallbackType) => [slotStyle, childValue(state)];
  }
  return [slotStyle, childValue];
}

export function isTextChildren(children: React.ReactNode | ((state: PressableStateCallbackType) => React.ReactNode)) {
  return Array.isArray(children) ? children.every(child => typeof child === 'string') : typeof children === 'string';
}
