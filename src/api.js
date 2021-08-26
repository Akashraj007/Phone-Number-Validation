import axios from "axios";

const access_key = "7dc0b5e40f02a89dee2f68fa30d67684";

export async function validateNumber(number){

    let response = await axios.get( "http://apilayer.net/api/validate?access_key="+access_key+"&number="+number );
    return response;
    
}

