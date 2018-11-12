import React, { PureComponent } from "react";
import { Svg } from "expo";
import colors from "../../constants/colors";
import tabBarIcon from "../TabBarIcon";

class ShoppingCartIcon extends PureComponent {
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
          d="M5.2 1.4C5.38885 1.14819 5.68524 1 6 1H18C18.3148 1 18.6111 1.14819 18.8 1.4L21.7939 5.39188C21.9232 5.56038 22 5.77122 22 6V20C22 20.7957 21.6839 21.5587 21.1213 22.1213C20.5587 22.6839 19.7957 23 19 23H5C4.20435 23 3.44129 22.6839 2.87868 22.1213C2.31607 21.5587 2 20.7957 2 20V6C2 5.77123 2.07682 5.56041 2.20606 5.39192L5.2 1.4ZM17.5 3L19 5H5L6.5 3H17.5ZM4 20V7H20V20C20 20.2652 19.8946 20.5196 19.7071 20.7071C19.5196 20.8946 19.2652 21 19 21H5C4.73478 21 4.48043 20.8946 4.29289 20.7071C4.10536 20.5196 4 20.2652 4 20ZM9 10C9 9.44771 8.55228 9 8 9C7.44772 9 7 9.44771 7 10C7 11.3261 7.52678 12.5979 8.46447 13.5355C9.40215 14.4732 10.6739 15 12 15C13.3261 15 14.5979 14.4732 15.5355 13.5355C16.4732 12.5979 17 11.3261 17 10C17 9.44771 16.5523 9 16 9C15.4477 9 15 9.44771 15 10C15 10.7956 14.6839 11.5587 14.1213 12.1213C13.5587 12.6839 12.7956 13 12 13C11.2044 13 10.4413 12.6839 9.87868 12.1213C9.31607 11.5587 9 10.7956 9 10Z"
        />
      </Svg>
    );
  }
}

export default tabBarIcon(ShoppingCartIcon);
