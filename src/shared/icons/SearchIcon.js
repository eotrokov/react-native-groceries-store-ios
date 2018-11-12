import { Svg } from "expo";
import React, { PureComponent } from "react";
import colors from "../../constants/colors";
import tabBarIcon from "../TabBarIcon";

class SearchIcon extends PureComponent {
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
          d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 12.886 17.2541 14.5978 16.0412 15.8566C16.0071 15.8828 15.9742 15.9116 15.9429 15.9429C15.9116 15.9742 15.8828 16.0071 15.8566 16.0412C14.5978 17.2541 12.886 18 11 18C7.13401 18 4 14.866 4 11ZM16.6177 18.0319C15.078 19.2635 13.125 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 13.125 19.2635 15.078 18.0319 16.6177L21.7071 20.2929C22.0977 20.6834 22.0977 21.3166 21.7071 21.7071C21.3166 22.0977 20.6834 22.0977 20.2929 21.7071L16.6177 18.0319Z"
        />
      </Svg>
    );
  }
}

export default tabBarIcon(SearchIcon);
