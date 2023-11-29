import axios from "axios";
export async function handleLogin(){
    try {
            const clientId="3a56e3ab9cda41a086b0faeb518a00f5";
            const redirectUrl="http://localhost:3000/";
            const apiUrl="https://accounts.spotify.com/authorize";
            const scope=[
                "user-read-email",
                "user-read-private",
                "user-modify-playback-state",
                "user-read-currently-playing",
                "user-read-recently-played",
                "user-read-playback-position",
                "user-top-read"
    
            ];
            const result = await axios.get(`${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`,
            {headers: {
                Accept:'*/*'
            }});
            console.log(result);
            return Promise.resolve(result)
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
}