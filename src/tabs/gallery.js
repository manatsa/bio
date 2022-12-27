import {useState} from "react";
import {PhotoAlbum} from "react-photo-album";
import gz from '../images/gz.jpg';
import hotel from '../images/hotel.JPG';
import lodge from '../images/lodge.jpg';
import main from '../images/main.jpg';
import masvingo from '../images/masvingo.jpg';
import nyanga from '../images/nyanga.jpg';
import office from '../images/office.jpg';
import sharp from '../images/sharp.jpg';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {Captions, Thumbnails} from "yet-another-react-lightbox/plugins";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

const Gallery = ()=>{
    const [index, setIndex]=useState(-1);

    const photos = [
        { src: main, width: 300, height: 300 },
        { src: nyanga, width: 300, height: 300 },
        { src: gz, width: 300, height: 300 },
        { src: hotel, width: 300, height: 300 },
        { src: office, width: 300, height: 300 },
        { src: lodge, width: 300, height: 300 },
        { src: masvingo, width: 300, height: 300 },
        { src: sharp, width: 300, height: 300 },
    ];


    return(
        <>
            <ScrollUpButton
                StopPosition={0}
                ShowAtPosition={150}
                EasingType='easeOutCubic'
                AnimationDuration={100}
                ContainerClassName='ScrollUpButton__Container'
                TransitionClassName='ScrollUpButton__Toggled'
                style={{backgroundColor:'dodgerblue', borderColor:'dodgerblue', color:'white'}}
                ToggledStyle={{backgroundColor:'dodgerblue', borderColor:'dodgerblue', color:'white'}}
            />

            <br/>
            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Captions, Thumbnails]}
                slides={[
                    { src: main, title:'Relaxing at Home',description:'Picture taken while relaxing at home.' },
                    { src: nyanga, title:'In Nyanga', description:"While at Troutbek Inn in Nyanga, Eastern Highlands in Zimbabwe." },
                    { src: gz, title:'At Great Zimbabwe Ruins', description:"While at Great Zimbabwe Ruins in south eastern zimbabwe province of Masvingo." },
                    { src: hotel, title:'', description: ''},
                    { src: office, title:'', description: ''},
                    { src: lodge, title:'', description: ''},
                    { src: masvingo, title:'', description: ''},
                    { src: sharp, title:'', description: ''}
                ]}
            />
            <br/>
            <PhotoAlbum
            layout="rows"
            photos={photos}
            targetRowHeight={150}
            onClick={({ index }) => setIndex(index)}
        />
        </>
    )
}

export default  Gallery;