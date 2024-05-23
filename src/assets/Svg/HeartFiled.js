import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#EC4A55"
      stroke="#EC4A55"
      strokeWidth={1.5}
      d="M16.5 1.967c-2.72-2.176-5.5 0-6.5 1-1-1-3.78-3.176-6.5-1-2.72 2.175-3.31 6.69.5 10.5 3.81 3.81 6 4.5 6 4.5s2.19-.69 6-4.5 3.22-8.325.5-10.5Z"
    />
  </Svg>
)
export default SvgComponent
