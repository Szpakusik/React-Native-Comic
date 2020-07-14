
import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { Comic } from '../models/comicModel';
import { getComics } from '../functions/apiFunctions';

export function HomeScreen({ navigation }: { navigation: any } ) {

    const [ comics, setComics ] = React.useState< Comic[] >([])
    let screenWidth: number;

    React.useEffect(() => {
        screenWidth = Dimensions.get('screen').width;
        getComics( setComics, comics )
    }, [])
    
    return (
        <View style={ styles.container }>
            <FlatList 
                numColumns = {1}
                keyExtractor={(item:Comic, index) => item.id.toLocaleString()}
                data={comics}
                renderItem={ ({item}) => (
                    <TouchableOpacity  onPress={ () => navigation.navigate('Details', item) } >
                        <Text style = {styles.title}>{item.title}</Text>
                        <Image source = { {uri:item.img} } style = {{
                            width: screenWidth,
                            height: 200,
                            resizeMode: 'contain'
                        }}/>
                    </TouchableOpacity>
                ) }
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 10,
    },
    title:{
        fontSize: 20,
        textAlign:"center",
        marginTop: 20,
        marginBottom: 10
    }
})

