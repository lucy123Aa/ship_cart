import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Search({ color = "#000", ...props }: any) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M21 21l-6-6M3 10a7 7 0 1014 0 7 7 0 00-14 0z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Search;
