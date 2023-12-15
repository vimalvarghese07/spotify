import React,{ useEffect,useState} from "react";
import styled from "styled-components";
import axios from "axios";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";

export default function CurrentTrack(){
    const [{ token ,currentlyPlaying},dispatch] = useStateProvider();
    const[currentlyPlay,setCurrentlyPlay] = useState();
    useEffect(() => {
        const getCurrentTrack = async () =>{
        const response = await axios.get("https://api.spotify.com/v1/me/player/currently-playing",{
            headers:{
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        });
        if(response.data !==""){
            const {item} = response.data
            const currentlyPlaying = {
                id : item.id,
                name: item.name,
                artists: response.data.item.artists.map((artist) => artist.name),
                image: response.data.item.album.images[2].url,
            }
            setCurrentlyPlay(currentlyPlaying)
        }
        dispatch({type:reducerCases.SET_PLAYING,currentlyPlaying})
    };
        getCurrentTrack();
    },[token,dispatch])

    return <Container>
            <div className="track">
                <div className="track_image">
                    <img src={currentlyPlay?.image} alt="currentPlaying" />
                </div>
                <div className="track_info">
                    <h4>{currentlyPlay?.name}</h4>
                    <h6>{currentlyPlay?.artists.join(", ")}</h6>
                </div>
            </div>
    </Container>
}

const Container = styled.div`
  .track {
    display: flex;
    align-items:center;
    gap: 1rem;
    
}
    .track_info {
      display:block;
    }
      h4{
        color: white;
        margin-bottom:0;
      }
      h6 {
        color: #b3b3b3;
        margin-top:.5rem;
      }
`;