import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

// or any pure javascript modules available in npm
import { Avatar, Header } from 'react-native-elements';

export default class App extends Component {
  _onPressButton() {

  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>
              harsimarriar96
            </Text>
          }
          rightComponent={{
            icon: 'settings',
            color: '#fff',
            style: { marginTop: 10 },
          }}
        />
        {/*}
        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 20, height: 100  }}>
          <View style={{ flex: 1, paddingHorizontal: 20, width: '20%' }}>
            <Avatar
              large
              rounded
              source={{
                uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              }}
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
            />
          </View>
          <View style={{ flex: 5 }}>
            <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 30 }}>
              <Text style={styles.statsMainText}>30<Text style={styles.statsSubText}>{`\n`}posts</Text></Text>
              <Text style={styles.statsMainText}>585<Text style={styles.statsSubText}>{`\n`}following</Text></Text>
              <Text style={styles.statsMainText}>362<Text style={styles.statsSubText}>{`\n`}followers</Text></Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 1, backgroundColor: 'red' }}>
              <Button title="follow" />
              <Button title="follow" />
            </View>
          </View>
            </View> */}
        <View style={{ padding: 20, flexDirection: 'row', height: 150 }}>
          <View style={{  }}>
            <Avatar
                large
                rounded
                source={{
                  uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                }}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 20, padding: 10 }}>
                <View style={{flex: 1, flexDirection: 'row' }}>
                  <Text style={styles.statsMainText}>200 <Text style={styles.statsSubText}>{`\n`}posts</Text></Text>
                  <Text style={styles.statsMainText}>595 <Text style={styles.statsSubText}>followers</Text></Text>
                  <Text style={styles.statsMainText}>580 <Text style={styles.statsSubText}>following</Text></Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 1, marginRight: 5 }}><Button onPress={this._onPressButton} title="follow" style={{ borderRadius: 5 }} /></View>
                  <View style={{ flex: 1 }}><Button title="Message" onPress={this._onPressButton} /></View>
                </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statsMainText: {
    fontSize: 25,
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  statsSubText: {
    fontSize: 12,
    fontWeight: '100',
    color: 'grey'
  }
});
