import { Comic } from '../models/comicModel';

export function getComics( setComics: Function, comics: Comic[]  ){

    let current: number;
    const comicArray:Comic[] = [];
    
    setComics([]);

    return fetch('https://xkcd.com/info.0.json')
        .then(( res ) => res.json())
        .then(( data ) => {
            return data.num;
        })
        .then( async ( latest ) => {
            for (let index = 0; index < 8; index++) {
                await fetch(`http://xkcd.com/${latest.toString()}/info.0.json`)
                .then(( res ) => res.json())
                .then(( data ) => {

                    setComics( ( comics:Comic[] ) => [...comics, {
                        id: data.num, 
                        title: data.title,
                        img: data.img
                    }])

                    latest-= 1;
                });
            }
        })

}