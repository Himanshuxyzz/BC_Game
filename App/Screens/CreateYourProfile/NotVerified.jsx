import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import GradientVarientThirdBtn from "../../Components/Gradient/GradientVariantThirdBtn";

const NotVerified = ({ navigation }) => {
  return (
    <View style={styles.container}>
       <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text
        style={{
          color: "rgba(255, 0, 0, 1)",
          fontSize: 33,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "4%",
          textDecorationLine: "underline",
        }}
      >
        Your profile is not verified!!!
      </Text>
      <View style={{ marginTop: "15%", marginBottom: "7%" }}>
        <Image
          style={{ maxWidth: "85%", minWidth: "85%", height: 300 }}
          source={require("../../../assets/Images/not_verified.png")}
        />
      </View>
      <View
        style={{
          width: "90%",
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 30,
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          Sorry,
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 21,
            textAlign: "center",
            fontWeight: 400,
            marginBottom: "6%",
          }}
        >
          Your profile is not verified are you sure you filled correct info?
        </Text>
      </View>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <GradientVarientThirdBtn
          onPress={() => navigation.navigate("Createurprofile")}
          btnText={"Recreate"}
          style={styles.btn}
        />
        <GradientVarientThirdBtn btnText={"Help me"} style={styles.btn} />
      </View>
      <View style={{ flexDirection: "row", gap: 20, marginTop: "4%" }}>
        <Text
          style={{
            width: "50%",
            textAlign: "center",
            color: "#fff",
            fontSize: 13,
          }}
        >
          Looks like your information is incorrect, recreate your profile
        </Text>
        <Text
          style={{
            width: "50%",
            textAlign: "center",
            color: "#fff",
            fontSize: 13,
          }}
        >
          We can help you to create your profile
        </Text>
      </View>
      </ScrollView>
    </View>
  );
};

export default NotVerified;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2E2E",
    // alignItems: "center",
    // padding: 30,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  btn: {
    width: "50%",
    borderWidth: 1,
    borderColor: "#DDBBE6",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: "7%",
  },
});
