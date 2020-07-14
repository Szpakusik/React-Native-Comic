import * as React from 'react';
import { View, Text, Image, Dimensions, StyleSheet} from 'react-native';

export function DetailsScreen({ route }: { route:any }) {

    const [ screenHeight, setScreenHeight] = React.useState( Dimensions.get('screen').height )
    const [ screenWidth, setScreenWidth] = React.useState( Dimensions.get('screen').width )

    Dimensions.addEventListener('change', () => {
      setScreenHeight(Dimensions.get('screen').height);
      setScreenWidth(Dimensions.get('screen').width)
    });
    
    return (
        route.params ? 
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          <Image  source = { {uri:route.params.img} } 
                  style = {{
                    marginTop: 10,
                    width: screenWidth * 0.98,
                    height: screenHeight * 0.70,
                    resizeMode: 'contain'
                  }}
          />
          {screenWidth < 479 ?
          <Text style={styles.tip}>Rotate for a better view!</Text>
          : null}

        </View>
        : null
    );
}
const styles = StyleSheet.create({
  tip:{
      fontSize: 10,
      textAlign:"center",
      marginTop: 30,
      marginBottom: 5,
      backgroundColor: "orange",
      padding: 15,
  }
})