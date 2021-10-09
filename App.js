import React, { useState } from 'react';
import { Text, Button, View, FlatList, StyleSheet, Modal, Image, TouchableHighlight, Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { Value } from 'react-native-reanimated';

function Inicio({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Pagina2')}
        title="Go to Page 2"
      />
    </View>
  );
}

function Pagina2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Inicio')}
        title="Go to home"
      />
    </View>
  );
}
function Pagina3({ navigation }){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Inicio')}
        title="Go to home"
      />
    </View>
  );
}
function Pagina4({ navigation }){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Inicio')}
        title="Go to home"
      />
    </View>
  );
}
function Pagina5({ navigation }){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Inicio')}
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




        <Drawer.Navigator initialRouteName="Inicio"> 
          <Drawer.Screen name="Inicio" component={Inicio} />
          <Drawer.Screen name="Pagina2" component={Pagina2} />
          <Drawer.Screen name="Pagina3" component={Pagina3}/>
          <Drawer.Screen name="Pagina4" component={Pagina4}/>
          <Drawer.Screen name="Pagina5" component={Pagina5}/>
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
