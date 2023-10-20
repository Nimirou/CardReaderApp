import React, { Component } from "react";
import { View, Text, Card, Button } from "react-native-ui-lib";
import { StyleSheet, Pressable, Image } from "react-native";
const ShootCardScreen = ({ route }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles?.headerView}>
        <Pressable
          onPress={() => {
            setSearchSection(!searchSection), console.log("state update");
          }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 100,
            backgroundColor: "#EEF1F4",
            marginTop: "10%",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Pressable>

        <Text
          style={{
            alignSelf: "center",
            fontSize: 20,
            marginTop: "10%",
          }}
        >
          Kliknete pro hledani...
        </Text>
        <Pressable
          onPress={() => navigation.navigate("NotificationScreen")}
          style={{
            width: 40,
            height: 40,
            borderRadius: 100,
            backgroundColor: "#EEF1F4",
            marginTop: "10%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "800", fontSize: 15 }}>SC</Text>
        </Pressable>
        {/* <View style={{
            position: 'absolute', width: 20, height: 20, borderRadius: 100, backgroundColor: COLORS.primarycolor2, bottom: 45, right: 13, justifyContent: 'center', alignItems
                : 'center'
        }}>
            <Text style={{ color: 'white', fontFamily: 'Aspira', fontWeight: '800', fontSize: 12 }}>1</Text>
        </View> */}
      </View>
    </View>
  );
};

export default ShootCardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // padding: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "400",
    fontFamily: "Chronicle",
    marginTop: "10%",
  },
  subHeaderTextContainer: {
    flexDirection: "row",
    marginTop: "5%",
  },
  subHeaderText: {
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.7,
  },
  subHeaderTextUnderline: {
    textDecorationLine: "underline",
    fontSize: 16,
    fontWeight: "700",
  },
  inputContainer: {
    marginTop: "10%",
  },
  input: {
    padding: "4%",
    borderWidth: 1,
    marginTop: "3%",
    borderRadius: 6,
  },
  passwordInputContainer: {
    flexDirection: "row",
    width: "100%",
  },
  passwordInput: {
    padding: "3%",
    borderWidth: 1,
    // marginTop: "3%",
    borderRadius: 6,
    width: "100%",
    paddingRight: 40,
  },
  passwordEyeIcon: {
    height: 14,
    width: 20,
    position: "absolute",
    right: "5%",
    top: "50%",
  },
  loginButton: {
    marginTop: "13%",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: "700",
    padding: "5%",
  },
  forgotPasswordText: {
    textDecorationLine: "underline",
    fontSize: 16,
    fontWeight: "600",
    marginTop: "5%",
    textAlign: "center",
    color: "black",
  },
  registerButton: {
    marginTop: "18%",
    justifyContent: "center",
    alignItems: "center",
  },
  registerButtonText: {
    fontSize: 16,
    fontWeight: "600",
    padding: "5%",
  },
  container2: {
    marginHorizontal: 10,
    width: 130,
  },
  image: {
    width: "100%",
    height: 230,
  },
  title: {
    fontSize: 10,
    fontWeight: "500",
    marginTop: 12,
  },
  description: {
    fontSize: 12,
    fontWeight: "500",

    // lineHeight: 15,
    // marginTop: 10,
  },
  mlContainer: {
    width: 65,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "4%",
  },
  mlText: {
    fontSize: 10,
    fontWeight: "600",
  },
  price: {
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 10,
    marginTop: "3%",
  },
  addToCartButton: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  addToCartText: {
    fontSize: 14,
    fontWeight: "500",
    marginRight: 10,
  },
  container3: {
    // backgroundColor: COLORS.primarycolor,
    // width: '45%', height: 60,
    // justifyContent: 'center', margin: 10, marginTop: '1%', alignItems: 'center'
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    borderColor: "gray",
    margin: 5,
    marginHorizontal: 10,
    flexDirection: "row",
    padding: "3%",
  },
  txt: {
    fontSize: 14,
    fontWeight: "600",
  },
  container4: {
    // backgroundColor: COLORS.primarycolor,
    // width: width-225, height: 60,
    // justifyContent: 'center', margin: 10, marginTop: '1%', alignItems: 'center', flexDirection: 'row'
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    borderColor: "gray",
    margin: 5,
    marginHorizontal: 10,
    flexDirection: "row",
  },
  container5: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    borderColor: "gray",
    margin: 5,
    marginHorizontal: 10,
    flexDirection: "row",
    padding: "3%",
  },
  headerView: {
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#fff",
  },
  nestedbox: {
    width: "75%",
    height: "100%",
    padding: 20,
  },
  text2: {
    fontSize: 24,
    fontWeight: "400",
    fontFamily: "Chronicle",
    marginTop: "4%",
    color: "#fff",
    marginTop: Platform.OS === "ios" ? "6%" : "4%",
  },
  txt4: {
    fontWeight: "400",
    fontSize: 14,
    marginTop: Platform.OS === "ios" ? "6%" : "3%",
    color: "#fff",
    width: Platform.OS === "ios" ? "120%" : "100%",
  },
  txt5: {
    fontWeight: "600",
    fontSize: 14,
    color: "#fff",
  },
});
