module ArmyService{
    const WeaponKey = "368ea6bbba3116e0906aa85cb68dda616f966a6c551254305aa19ba82acaabb158405b5ea112554512857600963bce20ea53e7b937ef777739f6abc68c9ea6ce";
    const fetch = require("node-fetch");

    export async function getByKills(){

        return fetch('http://api.backendarmy.com/weapons_get_kills_10')
        .then((response: { json: () => any; }) => response.json())
        .then((data: any) => {
           return data;
        })
        .catch(Error);

    }

    export async function getByRank(rank: number){
        const fetch = require("node-fetch");
        return fetch(`http://api.backendarmy.com/soldiers_get_rank/${rank}`)
        .then((response: { json: () => any; }) => response.json())
        .then((data: any) => {
           return data;
        })
        .catch(Error);

    }



}

export default ArmyService;
