import React from 'react';
import { HsvaColor, hsvaToHslaString } from '@uiw/color-convert';
import Interactive, { Interaction } from '@uiw/react-drag-event-interactive';
import { Pointer, PointerProps } from './Pointer';

export * from '@uiw/color-convert';

export interface SaturationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  prefixCls?: string;
  /** hsva => `{ h: 0, s: 75, v: 82, a: 1 }` */
  hsva: HsvaColor;
  radius?: React.CSSProperties['borderRadius'];
  /** React Component, Custom pointer component */
  pointer?: ({ prefixCls, left, top, color }: PointerProps) => JSX.Element;
  onChange?: (newColor: HsvaColor) => void;
}

export default React.forwardRef<HTMLDivElement, SaturationProps>((props, ref) => {
  const { prefixCls = 'w-color-saturation', radius = 0, pointer, className, style, hsva, onChange, ...other } = props;
  const containerStyle: React.CSSProperties = {
    width: 200,
    height: 200,
    borderRadius: radius,
    ...style,
    position: 'relative',
    backgroundColor: `hsl(${hsva.h},100%, 50%)`,
  };

  const handleChange = (interaction: Interaction, event: MouseEvent | TouchEvent) => {
    onChange &&
      onChange({
        h: hsva.h,
        s: interaction.left * 100,
        v: (1 - interaction.top) * 100,
        a: hsva.a,
        // source: 'hsv',
      });
  };

  const comProps = {
    top: `${100 - hsva.v}%`,
    left: `${hsva.s}%`,
    color: hsvaToHslaString(hsva),
  };

  return (
    <Interactive
      className={`${prefixCls} ${className || ''}`}
      {...other}
      style={{
        position: 'absolute',
        inset: 0,
        ...containerStyle,
      }}
      ref={ref}
      onMove={handleChange}
      onDown={handleChange}
    >
      <div
        style={{
          inset: 0,
          background: 'linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0))',
          position: 'absolute',
          borderRadius: radius,
        }}
      >
        <div
          style={{
            inset: 0,
            background: 'linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0))',
            position: 'absolute',
            borderRadius: radius,
          }}
        >
          {React.createElement(pointer || Pointer, {
            prefixCls,
            ...comProps,
          })}
        </div>
      </div>
    </Interactive>
  );
});