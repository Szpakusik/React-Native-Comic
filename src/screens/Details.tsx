import * as React from 'react';
import { View, Text, Image, Dimensions} from 'react-native';

export function DetailsScreen({route, navigation}) {

    let screenHeight: number;
    screenHeight = Dimensions.get('screen').height;

    console.log(route.params);
    
    return (
        
    route.params ? 
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source = { {uri:route.params.img} } style = {{
                            // flex: 1,
                            width: 360,
                            height: screenHeight * 0.85,
                            resizeMode: 'contain'
                        }}/>
      </View>
      : null
    );
  }