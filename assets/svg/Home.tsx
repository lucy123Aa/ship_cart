import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Home(props: any) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M18.75 8.71l-5.334-4.148a2.666 2.666 0 00-3.274 0L4.808 8.71a2.67 2.67 0 00-1.029 2.105v7.2a2 2 0 002 2h12a2 2 0 002-2v-7.2c0-.823-.38-1.6-1.03-2.105zM15.749 15c-2.21 1.333-5.792 1.333-8 0"
        stroke={props.color || "#3B3B3B"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Home;
