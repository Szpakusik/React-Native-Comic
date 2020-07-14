
import * as React from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Comic } from '../models/comicModel';
import { getComics } from '../functions/apiFunctions';
import { ListItem } from '../components/ListItem';

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
                keyExtractor={(item:Comic, index) => item.id.toString()}
                data={comics}
                renderItem={ ({item}) => (
                    <ListItem item={item} navigation={navigation} screenWidth={screenWidth} />
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
})

