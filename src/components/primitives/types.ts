import type { Pressable, Text, View, ViewStyle } from 'react-native';

type ComponentPropsWithAsChild<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  asChild?: boolean;
};

type SlottableViewProps = ComponentPropsWithAsChild<typeof View>;
type SlottablePressableProps = ComponentPropsWithAsChild<typeof Pressable>;
type SlottableTextProps = ComponentPropsWithAsChild<typeof Text>;

interface Insets {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

interface PositionedContentProps {
  forceMount?: true | undefined;
  style?: ViewStyle;
  alignOffset?: number;
  insets?: Insets;
  avoidCollisions?: boolean;
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'bottom';
  sideOffset?: number;
  disablePositioningStyle?: boolean;
}

interface ForceMountable {
  forceMount?: true | undefined;
}

export type {
  ComponentPropsWithAsChild,
  ForceMountable,
  Insets,
  PositionedContentProps,
  SlottablePressableProps,
  SlottableTextProps,
  SlottableViewProps,
};
