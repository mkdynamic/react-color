Color Alpha
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-alpha)](https://bundlephobia.com/package/@uiw/react-color-alpha) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-alpha.svg)](https://www.npmjs.com/package/@uiw/react-color-alpha)

## Install

```bash
npm i @uiw/react-color-alpha
```

## Usage

```js
import Alpha from '@uiw/react-color-alpha';

function Demo() {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  return (
    <Alpha
      hsva={hsva}
      onChange={(newAlpha) => {
        setHsva({ ...hsva, ...newAlpha });
      }}
    />
  );
}
```

## Props

```ts
import { HsvaColor } from '@uiw/color-convert';

interface AlphaProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  prefixCls?: string;
  /** String, Pixel value for picker width. Default `316px` */
  width?: number;
  /** String, Pixel value for picker height. Default `16px` */
  height?: number;
  /** hsva => `{ h: 0, s: 75, v: 82, a: 1 }` */
  hsva: HsvaColor;
  /** React Component, Custom pointer component */
  pointer?: ({ prefixCls, left }: PointerProps) => JSX.Element;
  /** Set rounded corners. */
  radius?: number;
  /** Set the background color. */
  background?: string;
  /** String Enum, horizontal or vertical. Default `horizontal` */
  direction?: 'vertical' | 'horizontal';
  onChange?: (newAlpha: { a: number }, offset: Interaction) => void;
}
interface PointerProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  left?: string;
  top?: string;
}
```