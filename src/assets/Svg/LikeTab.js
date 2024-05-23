import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={37}
    fill="none"
    {...props}
  >
    <Path
      stroke="#B8B8B8"
      strokeWidth={3}
      d="M24.648 7.385c-3.304-2.665-6.683 0-7.898 1.225-1.215-1.225-4.594-3.89-7.898-1.225-3.305 2.665-4.023 8.194.607 12.861 4.63 4.668 7.291 5.513 7.291 5.513s2.66-.845 7.29-5.513c4.63-4.667 3.913-10.196.608-12.861Z"
    />
    <Path
      fill="#EC4A55"
      d="M19.25 34.45a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
    />
  </Svg>
)
export default SvgComponent
