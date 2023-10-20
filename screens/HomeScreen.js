import React, { Component } from "react";
import { View, Text, Card, Button } from "react-native-ui-lib";
import liliana from "../src/Liliana.jpg";
import { ScrollView } from "react-native";
const post = {
  src: liliana,
  title: "product1",
  price: 1000,
  description: "this is product1",
};
const HomeScreen = ({ navigation }) => {
  return (
    <View
      flex
      padding-page
      style={{
        flexDirection: "column",
        paddingBottom: "5%",
        marginTop: "5%",
        paddingLeft: "5%",
        paddingRight: "5%",
      }}
    >
      <Text heading marginT-s4>
        Vítejte v aplikaci MTG Price my Card kde je možné zjistit cenu karty
        podle černého rytíře tím že vyfotíte kartu nebo nahráte fotku karty.
      </Text>
      <ScrollView>
        <Card
          style={{ marginBottom: 5, marginTop: 5 }}
          onPress={() => {
            navigation.navigate("SelectFile");
          }}
        >
          <Card.Section
            imageProps={{ resizeMode: "cover" }}
            imageSource={post.src}
            imageStyle={{ height: 100, width: 400 }}
          />
          <Card.Section
            content={[
              { text: "Nahrání fotky", text70: true, $textDefault: true },
              {
                text: "Nahrej kartu přímo z telefonu a zjisti cenu",
                text90: true,
                $textDisabled: true,
              },
            ]}
            style={{ padding: 20 }}
          />
        </Card>
        <Card
          style={{ marginBottom: 5, marginTop: 5 }}
          onPress={() => {
            navigation.navigate("ShootCardScreen");
          }}
        >
          <Card.Section
            content={[
              { text: "Vyfoť kartu", text70: true, $textDefault: true },
              {
                text: "Vyfoť kartu a zjisti cenu",
                text90: true,
                $textDisabled: true,
              },
            ]}
            style={{ padding: 20 }}
          />
        </Card>
        <Card style={{ marginBottom: 5, marginTop: 5 }} onPress={() => {}}>
          <Card.Section
            content={[
              { text: "Moje nákupy", text70: true, $textDefault: true },
              {
                text: "Váš rozpracovaný poslední nákup",
                text90: true,
                $textDisabled: true,
              },
            ]}
            style={{ padding: 20 }}
          />
        </Card>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
