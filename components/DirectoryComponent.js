import React from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";

function Directory(props) {
  const renderDirectoryItem = ({ item }) => {
    return (
      <ListItem
        title={item.name}
        subtitle={item.description}
        leftAvatar={{ source: require("../shared/images/react-lake.jpg") }}
      />
    );
  };

  const extractZeeKey = (item) => item.id.toString();

  return (
    <FlatList
      data={props.campsites}
      renderItem={renderDirectoryItem}
      keyExtractor={extractZeeKey}
    />
  );
}

export default Directory;
