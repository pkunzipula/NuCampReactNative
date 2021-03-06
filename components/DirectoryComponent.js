import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem, Tile } from "react-native-elements";
import { CAMPSITES } from "../shared/campsites";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
  return {
    campsites: state.campsites,
  };
};

class Directory extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     campsites: CAMPSITES,
  //   };
  // }

  static navigationOptions = {
    title: "Directory",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderDirectoryItem = ({ item }) => {
      return (
        <Tile
          title={item.name}
          caption={item.description}
          featured
          leftAvatar={{ source: { uri: baseUrl + item.image } }}
          onPress={() => navigate("CampsiteInfo", { campsiteId: item.id })}
        />
      );
    };
    return (
      <FlatList
        data={this.props.campsites.campsites}
        renderItem={renderDirectoryItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default connect(mapStateToProps)(Directory);
