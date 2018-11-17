import React, { PureComponent } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Swipeout from "react-native-swipeout";
import colors from "../../../constants/colors";
import ClearButton from "../../../shared/ClearButton";
import BookmarkIcon from "../../../shared/icons/BookmarkIcon";
import SwipeActionButton from "../../../shared/SwipeActionButton";

class ProductListItem extends PureComponent {
  right = [
    {
      onPress: () => this.props.onBookmark(this.props.product.id),
      component: <SwipeActionButton text="В избранное" />,
      buttonWidth: 120,
      backgroundColor: colors.primary
    }
  ];

  render() {
    const { product, bookmarked, onSwipe } = this.props;
    return (
      <Swipeout
        autoClose
        backgroundColor="transparent"
        right={this.right}
        buttonWidth={120}
        sensitivity={30}
        scroll={onSwipe}
      >
        <View style={styles.root}>
          {product.images.length > 0 && (
            <Image
              source={{ uri: product.images[0].url }}
              style={styles.image}
            />
          )}
          <View style={styles.description}>
            <View style={styles.descriptionWrapper}>
              <Text style={styles.productName}>{product.name}</Text>
              <View style={styles.productPrice}>
                {product.price < product.regular_price && (
                  <Text style={styles.oldPrice}>{product.regular_price} ₽</Text>
                )}
                <Text style={styles.currentPrice}>{product.price} ₽</Text>
              </View>
            </View>
          </View>
          <View style={styles.right}>
            {bookmarked && (
              <BookmarkIcon
                width={12}
                height={12}
                fill={colors.primary}
                style={styles.bookmark}
              />
            )}
            <ClearButton text="Добавить" />
          </View>
        </View>
      </Swipeout>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    borderBottomColor: "#BCBBC1",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 8,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  image: {
    width: 62,
    height: 62
  },
  description: {
    flexDirection: "row",
    flex: 1,
    marginLeft: 12
  },
  descriptionWrapper: {
    justifyContent: "center"
  },
  productName: {
    fontSize: 13,
    lineHeight: 16,
    marginBottom: 6
  },
  productPrice: {
    flexDirection: "row"
  },
  currentPrice: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 22,
    color: colors.textGray
  },
  oldPrice: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 22,
    color: colors.textDisabled,
    textDecorationLine: "line-through",
    marginRight: 6
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16
  },
  bookmark: {
    marginRight: 8
  }
});

export default ProductListItem;
