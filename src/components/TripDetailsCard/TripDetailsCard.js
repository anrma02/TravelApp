import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { colors, sizes, spacing } from "../../constants/theme";
import * as Animatable from "react-native-animatable";
// import bottomSheet from "@gorhom/bottom-sheet";

const TripDetailsCard = ({ trip }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{trip.title}</Text>
      <Animatable.View style={styles.bottomSheets}>
        <Animatable.View
          style={styles.header}
          animation="fadeInUp"
          delay={500}
          easing="ease-in-out"
          duration={400}
        >
          <Text style={styles.location}>{trip.location}</Text>

          <Text style={styles.description}>{trip.description}</Text>

          <View style={styles.inWrapper}>
            <View style={styles.infoItem}>
              <Text style={styles.ratingText}>Rating</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.rating}>{trip.rating}</Text>
                <Text style={styles.ratingText}>/person</Text>
                <Text style={styles.ratingText}>/person</Text>
              </View>
            </View>
          </View>
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingText: {
    fontSize: 12,
    color: colors.gray,
  },

  card: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "45%",
  },

  header: {
    zIndex: 999,
    paddingVertical: spacing.s,
    paddingHorizontal: spacing.l,
  },
  bottomSheets: {
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.white,
  },
  title: {
    left: 20,
    bottom: 10,
    opacity: 0.8,
    fontSize: sizes.title,
    fontWeight: "bold",
    color: colors.white,
  },
  location: {
    fontSize: sizes.title,
    color: colors.black,
  },
  description: {
    top: 5,
    color: colors.gray,
  },
  inWrapper: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: "space-between",
  },

  infoWrapper: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: "space-between",
  },

  rating: {},
  ratingText: {
    fontSize: 12,
    color: colors.gray,
  },

  rating: {
    fontSize: sizes.xsl,
    zIndex: 888,
    color: colors.black,
  },
});

export default TripDetailsCard;
