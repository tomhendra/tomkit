import { Dimensions } from 'react-native';

import type { Insets } from '../types';
import type { LayoutRectangle, ScaledSize } from 'react-native';

export interface LayoutPosition {
  pageY: number;
  pageX: number;
  width: number;
  height: number;
}

type UseRelativePositionArgs = {
  align: 'start' | 'center' | 'end';
  avoidCollisions: boolean;
  triggerPosition: LayoutPosition | null;
  contentLayout: LayoutRectangle | null;
  alignOffset: number;
  insets?: Insets;
  sideOffset: number;
  side: 'top' | 'bottom';
  disablePositioningStyle?: boolean;
};

/**
 * Returns positioning style for content relative to a trigger element.
 * Handles collision avoidance and alignment.
 */
export function useRelativePosition({
  align,
  avoidCollisions,
  triggerPosition,
  contentLayout,
  alignOffset,
  insets,
  sideOffset,
  side,
  disablePositioningStyle,
}: UseRelativePositionArgs) {
  const dimensions = Dimensions.get('screen');

  if (disablePositioningStyle) {
    return {};
  }

  if (!triggerPosition || !contentLayout) {
    return {
      position: 'absolute',
      opacity: 0,
      top: dimensions.height,
      zIndex: -9999999,
    } as const;
  }

  return getContentStyle({
    align,
    avoidCollisions,
    contentLayout,
    side,
    triggerPosition,
    alignOffset,
    insets,
    sideOffset,
    dimensions,
  });
}

interface GetPositionArgs {
  dimensions: ScaledSize;
  avoidCollisions: boolean;
  triggerPosition: LayoutPosition;
  contentLayout: LayoutRectangle;
  insets?: Insets;
}

interface GetSidePositionArgs extends GetPositionArgs {
  side: 'top' | 'bottom';
  sideOffset: number;
}

function getSidePosition({
  side,
  triggerPosition,
  contentLayout,
  sideOffset,
  insets,
  avoidCollisions,
  dimensions,
}: GetSidePositionArgs) {
  const insetTop = insets?.top ?? 0;
  const insetBottom = insets?.bottom ?? 0;
  const positionTop = triggerPosition.pageY - sideOffset - contentLayout.height;
  const positionBottom = triggerPosition.pageY + triggerPosition.height + sideOffset;

  if (!avoidCollisions) {
    return {
      top: side === 'top' ? positionTop : positionBottom,
    };
  }

  if (side === 'top') {
    return {
      top: Math.min(Math.max(insetTop, positionTop), dimensions.height - insetBottom - contentLayout.height),
    };
  }

  return {
    top: Math.min(dimensions.height - insetBottom - contentLayout.height, positionBottom),
  };
}

interface GetAlignPositionArgs extends GetPositionArgs {
  align: 'start' | 'center' | 'end';
  alignOffset: number;
}

function getAlignPosition({
  align,
  avoidCollisions,
  contentLayout,
  triggerPosition,
  alignOffset,
  insets,
  dimensions,
}: GetAlignPositionArgs) {
  const insetLeft = insets?.left ?? 0;
  const insetRight = insets?.right ?? 0;
  const maxContentWidth = dimensions.width - insetLeft - insetRight;
  const contentWidth = Math.min(contentLayout.width, maxContentWidth);

  let left = getLeftPosition(
    align,
    triggerPosition.pageX,
    triggerPosition.width,
    contentWidth,
    alignOffset,
    insetLeft,
    insetRight,
    dimensions,
  );

  if (avoidCollisions) {
    const doesCollide = left < insetLeft || left + contentWidth > dimensions.width - insetRight;
    if (doesCollide) {
      const spaceLeft = left - insetLeft;
      const spaceRight = dimensions.width - insetRight - (left + contentWidth);

      if (spaceLeft > spaceRight && spaceLeft >= contentWidth) {
        left = insetLeft;
      } else if (spaceRight >= contentWidth) {
        left = dimensions.width - insetRight - contentWidth;
      } else {
        const centeredPosition = Math.max(insetLeft, (dimensions.width - contentWidth - insetRight) / 2);
        left = centeredPosition;
      }
    }
  }

  return { left, maxWidth: maxContentWidth };
}

function getLeftPosition(
  align: 'start' | 'center' | 'end',
  triggerPageX: number,
  triggerWidth: number,
  contentWidth: number,
  alignOffset: number,
  insetLeft: number,
  insetRight: number,
  dimensions: ScaledSize,
) {
  let left = 0;
  if (align === 'start') {
    left = triggerPageX;
  }
  if (align === 'center') {
    left = triggerPageX + triggerWidth / 2 - contentWidth / 2;
  }
  if (align === 'end') {
    left = triggerPageX + triggerWidth - contentWidth;
  }
  return Math.max(insetLeft, Math.min(left + alignOffset, dimensions.width - contentWidth - insetRight));
}

type GetContentStyleArgs = GetPositionArgs & GetSidePositionArgs & GetAlignPositionArgs;

function getContentStyle({
  align,
  avoidCollisions,
  contentLayout,
  side,
  triggerPosition,
  alignOffset,
  insets,
  sideOffset,
  dimensions,
}: GetContentStyleArgs) {
  return Object.assign(
    { position: 'absolute' } as const,
    getSidePosition({
      side,
      triggerPosition,
      contentLayout,
      sideOffset,
      insets,
      avoidCollisions,
      dimensions,
    }),
    getAlignPosition({
      align,
      avoidCollisions,
      triggerPosition,
      contentLayout,
      alignOffset,
      insets,
      dimensions,
    }),
  );
}
