import React, { PureComponent } from "react";
import { Svg } from "expo";
import colors from "../../constants/colors";
import tabBarIcon from "../TabBarIcon";

class ProfileIcon extends PureComponent {
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
          d="M9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7ZM12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2ZM8 14C6.67392 14 5.40215 14.5268 4.46447 15.4645C3.52678 16.4021 3 17.6739 3 19V21C3 21.5523 3.44772 22 4 22C4.55228 22 5 21.5523 5 21V19C5 18.2043 5.31607 17.4413 5.87868 16.8787C6.44129 16.3161 7.20435 16 8 16H16C16.7956 16 17.5587 16.3161 18.1213 16.8787C18.6839 17.4413 19 18.2044 19 19V21C19 21.5523 19.4477 22 20 22C20.5523 22 21 21.5523 21 21V19C21 17.6739 20.4732 16.4021 19.5355 15.4645C18.5979 14.5268 17.3261 14 16 14H8Z"
        />
      </Svg>
    );
  }
}

export default tabBarIcon(ProfileIcon);
