import * as React from 'react';
import { View, Text, Image, Dimensions} from 'react-native';

export function DetailsScreen({route, navigation}: { route:any, navigation: any }) {

    let screenHeight: number;
    screenHeight = Dimensions.get('screen').height;

    return (
        
    route.params ? 
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source = { {uri:route.params.img} } style = {{
                            width: 360,
                            height: screenHeight * 0.85,
                            resizeMode: 'contain'
                        }}/>
      </View>
      : null
    );
  }