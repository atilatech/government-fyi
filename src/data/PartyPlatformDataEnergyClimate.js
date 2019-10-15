import {Citations} from "../pages/1/expandables";
import React from "react";
import Citation from "../components/interactive/citation/citation";
import {CLIMATE_CONSCIOUS, OIL_WORKERS} from "./Constants";
import {ENERGY_AND_CLIMATE, HOUSING_PLATFORMS, JOBS_ECONOMY_PLATFORMS} from "./PartyPlatformData";

export const CONSERVATIVES_ENERGY_CLIMATE = {
    party: "Conservative",
    topic: ENERGY_AND_CLIMATE,
    partyPlatforms: [
        {
            text: "Cancel the carbon tax",
            source: "https://www.conservative.ca/cpc/build-the-pipe/",
            demographics: [
                OIL_WORKERS,
                CLIMATE_CONSCIOUS,
            ],
        },
        {
            text: "End the shipping ban in British Columbia",
            source: "https://www.conservative.ca/cpc/build-the-pipe/",
            demographics: [
                OIL_WORKERS,
            ],
        },
        {
            text: <span>
                Cancel
                <Citation data={Citations['1']}>
						Bill C-69
                </Citation>
            </span>,
            demographics: [
                OIL_WORKERS,
                CLIMATE_CONSCIOUS,
            ]
        }
    ],
};

export const GREEN_ENERGY_CLIMATE = {
    party: "Green",
    topic: ENERGY_AND_CLIMATE,
    partyPlatforms: [
        {
            text: "Reduce greenhouse gas emissions by 60 percent by 2030, zero emissions by 2050",
            source: "https://www.greenparty.ca/en/mission-possible",
            demographics: [
                OIL_WORKERS,
                CLIMATE_CONSCIOUS,
            ],
        },
        {
            text: "Ban fracking",
            demographics: [
                OIL_WORKERS,
                CLIMATE_CONSCIOUS,
            ],
        },
        {
            text: "Remove all fossil fuel generation from electrical grid by 3030",
            demographics: [
                OIL_WORKERS,
                CLIMATE_CONSCIOUS,
            ],
        },
        {
            text: "Replace all fuel cars with electric vehicles by 204",
            demographics: [
                OIL_WORKERS,
                CLIMATE_CONSCIOUS,
            ],
        },
        {
            text: "Build a cross-country electric vehicle charging system ",
            demographics: [
                OIL_WORKERS,
                CLIMATE_CONSCIOUS,
            ],
        },
    ],
};


export const ENERGY_CLIMATE_PLATFORMS = [CONSERVATIVES_ENERGY_CLIMATE, GREEN_ENERGY_CLIMATE];
export const ALL_PLATFORMS = [...HOUSING_PLATFORMS, ...JOBS_ECONOMY_PLATFORMS, ...ENERGY_CLIMATE_PLATFORMS];