import {ITeleData} from "./ITeleData";
import fetch from 'cross-fetch';

const teleUrl = 'https://teletekst-data.nos.nl/json';

export class TeleClient {
    /**
     * Call to receive a Promise for ITeleData.
     * @param page The page that should be retrieved. 
     * @returns ITeleData contains the json information, as displayed from the URL.
     */
    static getTeleDataByArgument(page: string) : Promise<ITeleData> {
        return new Promise((resolve, reject) => {
            fetch(teleUrl+'/'+page)
            .then((response) => {
                if (response.status==200)
                    resolve(response.json());
                else resolve(null);    
            })
            .catch((error) => {
                reject(error);
            })
        });
        
        
    }
}