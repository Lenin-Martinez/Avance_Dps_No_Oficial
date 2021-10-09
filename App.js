import React, { useState } from 'react';
import { Text, Button, View, FlatList, StyleSheet, Modal, Image, TouchableHighlight, Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { Value } from 'react-native-reanimated';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function PokemonScreen({ navigation }){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Go to home"
      />
    </View>
  );
}













const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>


        <View style={styles.BannerSup}>

          <View style={styles.BannerImageSpc}>
            <Image 
                source={require('./assets/img/LogoFF.png')}
                style={styles.BannerIcono}>
            </Image>
          </View>

          <View style={styles.BannerEslogan}>
            <Image 
                source={require('./assets/img/Eslogan.png')}
                style={styles.BannerIcono}>
            </Image>
          </View>

          <View style={styles.BannerBtnAyuda}>
            <TouchableOpacity>
              <Text>Ayuda</Text>
              <Image 
                  source={require('./assets/img/Ayuda.png')}
                  style={{width: 30, height: 30}}>
              </Image>
            </TouchableOpacity>
          </View>

        </View>




        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
          <Drawer.Screen name="Lista" component={PokemonScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
BannerSup:{
  flexDirection: 'row',
  height: 100,
  width: '100%',
},
BannerImageSpc:{
  flexBasis: 100,
  height: '100%',
  margin: 20,
},
BannerIcono:
{
  width: '100%',
  height: '80%',
},
BannerEslogan:{
  flexBasis: 200,
  width: '100%',
  height: '90%',
  marginTop: 20
},
BannerBtnAyuda:{
  flexBasis: '73%',
  height: 50, 
  marginTop: 50,
  flexWrap: 'wrap',
  alignContent: 'flex-end',
}

});
