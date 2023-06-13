import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  strong:{
    color: '#09f',
    fontWeight: 'bold',
    marginBottom: 5
  }
});

const RepositoryItem = (props) => (
  <View key={props.id} styles={styles.container}>
    <StyledText big bold>id: {props.id}</StyledText>
    <StyledText blue small>FullName: {props.fullName}</StyledText>
    <StyledText bold small>Description: {props.description}</StyledText>
    <StyledText blue small>Language: {props.language}</StyledText>
    <StyledText small>Stars: {props.stargazersCount}</StyledText>
    <StyledText small>Forks: {props.forksCount}</StyledText>
    <StyledText small>Review: {props.reviewCount}</StyledText>
    <StyledText small>Rating: {props.ratingAverage}</StyledText>
  </View>
);

export default RepositoryItem;
