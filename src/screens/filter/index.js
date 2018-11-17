import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { updateSortOrder } from "../../actions/profileActions";
import HeaderButtons from "../../shared/HeaderButtons";
import CloseIcon from "../../shared/icons/CloseIcon";
import Picker from "../../shared/picker/Picker";
import Title from "../../shared/Title";
import TransparentButton from "../../shared/TransparentButton";
import navigationService from "../../utils/navigationService";

class Filter extends Component {
  static navigationOptions = {
    title: "фильтры",
    headerLeft: (
      <HeaderButtons side="left">
        <TransparentButton onPress={navigationService.goBack}>
          <CloseIcon width={24} height={24} fill="#000" />
        </TransparentButton>
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons side="right">
        <TransparentButton>
          <Text>Сбросить</Text>
        </TransparentButton>
      </HeaderButtons>
    )
  };

  sortOrderVariants = [
    {
      text: "По умолчанию",
      value: "default"
    },
    {
      text: "По рейтингу",
      value: "rating"
    },
    {
      text: "По популярности",
      value: "popularity"
    },
    {
      text: "По возрастанию цены",
      value: "price_asc"
    },
    {
      text: "По убыванию цены",
      value: "price_desc"
    }
  ];

  render() {
    const { sortOrder, updateSortOrder } = this.props;
    return (
      <View style={styles.root}>
        <View style={styles.sortOrder}>
          <Title>
            <Text>Порядок результатов</Text>
          </Title>
          <View style={styles.sortOrderPicker}>
            <Picker
              selectedValue={sortOrder}
              items={this.sortOrderVariants}
              onChange={updateSortOrder}
            />
          </View>
        </View>
        <View style={styles.price}>
          <Title>
            <Text>Цена</Text>
          </Title>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20
  },
  sortOrder: {
    marginTop: 20
  },
  sortOrderPicker: {
    marginTop: 20
  },
  price: {
    marginTop: 36
  }
});

const mapStateToProps = state => {
  return {
    sortOrder: state.profile.productsSortOrder
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSortOrder: sortOrder => dispatch(updateSortOrder(sortOrder))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);