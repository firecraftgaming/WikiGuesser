import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Back() {
  return (
    <Svg width="39" height="34" viewBox="0 0 39 34" style={{marginRight: 10}}>
      <Path d="M3 17L19.7143 2M3 17L19.7143 32M3 17H39" stroke="#626262" strokeWidth="4" strokeLinecap="round"/>
    </Svg>
  );
}
function Next() {
  return (
    <Svg width="39" height="34" viewBox="0 0 39 34" style={{marginRight: 10}}>
      <Path d="M36 17L19.2857 2M36 17L19.2857 32M36 17H0" stroke="#626262" strokeWidth="4" strokeLinecap="round"/>
    </Svg>
  );
}
function Plus() {
  return (
    <Svg width="31" height="31" viewBox="0 0 31 31">
      <Path d="M13.4333 1.5C13.4333 0.671573 14.1049 0 14.9333 0H16.0667C16.8951 0 17.5667 0.671573 17.5667 1.5V29.5C17.5667 30.3284 16.8951 31 16.0667 31H14.9333C14.1049 31 13.4333 30.3284 13.4333 29.5V1.5Z" fill="#626262"/>
      <Path d="M29.5 13.4333C30.3284 13.4333 31 14.1049 31 14.9333V16.0667C31 16.8951 30.3284 17.5667 29.5 17.5667H1.5C0.671573 17.5667 0 16.8951 0 16.0667V14.9333C0 14.1049 0.671573 13.4333 1.5 13.4333H29.5Z" fill="#626262"/>
    </Svg>
  )
}
function Crown({style}: {style: any}) {
  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" style={style}>
      <Path d="M2.8 23.3333H25.2L27.7671 1.94089C27.8288 1.42697 27.1646 1.1695 26.8638 1.5907L18.6667 13.0667L14.4709 1.31844C14.3129 0.875996 13.6871 0.875996 13.5291 1.31844L9.33333 13.0667L1.13621 1.5907C0.835357 1.1695 0.171236 1.42697 0.232907 1.94089L2.8 23.3333Z" fill="#CEC831"/>
      <Path d="M2.8 25.2H25.2V27C25.2 27.5523 24.7523 28 24.2 28H3.8C3.24771 28 2.8 27.5523 2.8 27V25.2Z" fill="#CEC831"/>
    </Svg>
  )
}

export { Next, Back, Plus, Crown };