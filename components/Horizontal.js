import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

export default class Horizontal extends Component {
  render() {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        style={styles.container}
      >
        <View style={styles.outer}>
          <Text style={styles.innerText}> Welcome to LetzB! </Text>
        </View>

        <View style={[styles.outer, styles.pink]}>
          <Text style={styles.innerText}>
            {" "}
            a safe place for womxn to mingle{" "}
          </Text>
        </View>

        <View style={[styles.outer, styles.magenta]}>
          <Text style={styles.innerText}> Available on ios early April!</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {},

  outer: {
    backgroundColor: "#8C9CE5",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },

  innerText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  },

  pink: {
    backgroundColor: "#F7DEE7"
  },

  magenta: {
    backgroundColor: "#A60061"
  }
});
