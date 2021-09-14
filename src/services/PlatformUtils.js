import React from 'react';
import { CLIMATE_CONSCIOUS, ENERGY_AND_CLIMATE, IncompletePartyInformation, SENIORS, SENIORS_TOPIC } from "data/Constants"


export class PlatformUtils {

    static addMissingPlatformData = (platformData) => {
        if (platformData.incomplete) {
            if (!platformData.partyPlatforms) {
                platformData.partyPlatforms = []
            } 
            platformData.partyPlatforms.push(
                {
                    text: <IncompletePartyInformation />
                }
            )
        } else {
            platformData.partyPlatforms.forEach( idea => {

                if (!idea.demographics) {
                    idea.demographics = []
                } if (platformData.topic === ENERGY_AND_CLIMATE) {
                    idea.demographics.push(CLIMATE_CONSCIOUS)
                } if (platformData.topic === SENIORS_TOPIC) {
                    idea.demographics.push(SENIORS)
                }
                
            })
        }

        console.log({platformData});
        return platformData
    }
}