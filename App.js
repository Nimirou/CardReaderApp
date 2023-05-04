import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import axios from "axios";
import { Rows, Table } from "react-native-table-component";

export default function App() {
  const [startCamera, setStartCamera] = React.useState(false);
  const [cardDetail, setCardDetail] = React.useState([]);
  let camera;

  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };
  //Function for taking picture and sending it to server
  const __takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync({ base64: true });
    var bodyFormData = new FormData();
    bodyFormData.append("image", {
      uri: photo.uri,
      name: "photo.jpg",
      type: "image/jpeg",
    });
    axios({
      method: "post",
      maxBodyLength: Infinity,
      headers: { "Content-Type": "multipart/form-data" },
      data: bodyFormData,
      url: "http://janklimes.eu:3000/",
    })
      .then((response) => {
        setCardDetail(response.data.map(Object.values));
        setStartCamera(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      {startCamera ? (
        <Camera
          style={{ flex: 1, width: "100%" }}
          ref={(r) => {
            camera = r;
          }}
        >
          <View
            style={{
              position: "absolute",
              bottom: 0,
              flexDirection: "row",
              flex: 1,
              width: "100%",
              padding: 20,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                alignSelf: "center",
                flex: 1,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={__takePicture}
                style={{
                  width: 70,
                  height: 70,
                  bottom: 0,
                  borderRadius: 50,
                  backgroundColor: "#fff",
                }}
              />
            </View>
          </View>
        </Camera>
      ) : (
        <View
          style={{
            paddingTop: 50,
            flex: 1,
            width: "100%",
            backgroundColor: "#fff",
          }}
        >
          <Text
            style={{
              paddingLeft: 16,
              fontWeight: "bold",
            }}
          >
            Tabulka s kartou:
          </Text>
          <View
            style={{
              flex: 1,
              padding: 16,
              paddingTop: 30,
              backgroundColor: "#fff",
            }}
          >
            <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
              <Rows data={cardDetail} textStyle={{ margin: 6 }} />
            </Table>
          </View>
          <TouchableOpacity
            onPress={__startCamera}
            style={{
              width: 130,
              borderRadius: 4,
              backgroundColor: "#14274e",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              height: 40,
              alignSelf: "center",
              position: "absolute",
              bottom: 120,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Take picture
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
