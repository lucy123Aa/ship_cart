import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Categories(props: any) {
  return (
    <Svg width={19} height={18} viewBox="0 0 19 18" fill="none" {...props}>
      <Path
        d="M1.5 1h6v6h-6V1zm10 0h6v6h-6V1zm-10 10h6v6h-6v-6zm10 3a3 3 0 106 0 3 3 0 00-6 0z"
        stroke={props.color || "black"} 
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Categories;
