import React, { PureComponent } from "react";
import { Svg } from "expo";
import colors from "../../constants/colors";
import tabBarIcon from "../TabBarIcon";

class HomeIcon extends PureComponent {
  static defaultProps = {
    fillColor: colors.icon
  };
  render() {
    const { fillColor } = this.props;
    return (
      <Svg width={24} height={24} viewBox="0 0 24 24" fill={fillColor}>
        <Svg.Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.6139 1.21065C12.2528 0.929784 11.7472 0.929784 11.3861 1.21065L2.38606 8.21065C2.14247 8.4001 2 8.69141 2 9V20C2 20.7957 2.31607 21.5587 2.87868 22.1213C3.44129 22.6839 4.20435 23 5 23H9H15H19C19.7957 23 20.5587 22.6839 21.1213 22.1213C21.6839 21.5587 22 20.7957 22 20V9C22 8.69141 21.8575 8.4001 21.6139 8.21065L12.6139 1.21065ZM16 21H19C19.2652 21 19.5196 20.8946 19.7071 20.7071C19.8946 20.5196 20 20.2652 20 20V9.48908L12 3.26686L4 9.48908V20C4 20.2652 4.10536 20.5196 4.29289 20.7071C4.48043 20.8946 4.73478 21 5 21H8V12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12V21ZM10 21V13H14V21H10Z"
        />
      </Svg>
    );
  }
}

export default tabBarIcon(HomeIcon);
