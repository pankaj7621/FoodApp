import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Header } from "../../components";
import { FONTS, SIZES, COLORS, icons, dummyData } from "../../constants";
import { IconButton, CartQuantityButton } from "../../components";

const FoodDetail = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: Platform.OS === "ios" ? 40 : 20,
          alignItems: "center",
        }}
        title={"DETAILS"}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: COLORS.gray2,
              borderRadius: SIZES.radius,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray2,
            }}
            onPress={() => console.log("Back")}
          />
        }
        rightComponent={<CartQuantityButton quantity={9} />}
      />
      {/* Body */}
      {/* Footer */}
    </View>
  );
};

export default FoodDetail;
