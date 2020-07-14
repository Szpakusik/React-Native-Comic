
import * as React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { Comic } from '../models/comicModel';

export function HomeScreen({ navigation }) {

    const [ comics, setComics ] = React.useState< Comic[] >([])
    const [ isLoading, setIsLoading ] = React.useState(true)

    const comicArray: Comic[] = [];
    let screenWidth: number;

    React.useEffect(() => {
        
        screenWidth = Dimensions.get('screen').width;
        let current: number;

            fetch('https://xkcd.com/info.0.json')
                .then(( res ) => res.json())
                .then(( data ) => {
                    current = data.num;
                })
                .then( async () => {
                    for (let index = 0; index < 8; index++) {
                        await fetch(`http://xkcd.com/${current.toString()}/info.0.json`)
                        .then(( res ) => res.json())
                        .then(( data ) => {

                            setComics(comics => [...comics, {
                                id: data.num, 
                                title: data.title,
                                img: data.img
                            }])

                            current -= 1;
                        });
                    }
                })

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
                            // flex: 1,
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

