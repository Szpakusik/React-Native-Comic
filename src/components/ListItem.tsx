import * as React from 'react';
import { View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function ListItem({item, navigation, screenWidth}: { item:any, navigation: any, screenWidth:number }) {

    let screenHeight: number;
    screenHeight = Dimensions.get('screen').height;

    return (
        
        <TouchableOpacity  onPress={ () => navigation.navigate('Details', item) } >
            <Text style = {styles.title}> {item.title} </Text>
            <Image source = { {uri:item.img} } style = {{
                width: screenWidth,
                height: 200,
                resizeMode: 'contain'
            }}/>
        </TouchableOpacity>
    );
  }

  const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        textAlign:"center",
        marginTop: 20,
        marginBottom: 10
    }
  })