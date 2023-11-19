import axios from 'axios';

export async function getCompatibility(name: string, date: string) : Promise<string> {

    try {
        const response = await axios.request({
            method: 'GET',
        url: 'https://starlovematch.p.rapidapi.com/api/',
        params: {
            birthdetails: `name=Eva Shabanova&dob=11/25/2000&name1=${name}&dob1=${date}&sort=O&NC=C&ryr=2023&details=N&coupon=12345678`
        },
        headers: {
            'X-RapidAPI-Key': '4463d1a86amshb2e52c11fa2e6a2p179b94jsn40d77074c72e',
            'X-RapidAPI-Host': 'starlovematch.p.rapidapi.com'
        }
        });
        console.log(response.data);

        debugger
        return "ok"
    } catch (error) {
        console.error(error);
        return ""
    }
}