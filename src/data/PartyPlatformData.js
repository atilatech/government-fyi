import PropTypes from "prop-types";
import {HOUSING_PLATFORMS} from "./PartyPlatformDataHousing";
import {JOBS_ECONOMY_PLATFORMS} from "./PartyPlatformDataJobsEconomy";
import {EDUCATION_PLATFORMS} from "./PartyPlatformDataEducation";
import {HEALTHCARE_PLATFORMS} from "./PartyPlatformDataHealthcare";
import {IMMIGRATION_PLATFORMS} from "./PartyPlatformDataImmigration";
import {TAXES_PLATFORMS} from "./PartyPlatformDataTaxes";
import {ENERGY_CLIMATE_PLATFORMS} from "./PartyPlatformDataEnergyClimate";


export const PartyPlatformPropTypes = {
    text: PropTypes.PropTypes.oneOfType(
        [PropTypes.string, PropTypes.object])
        .isRequired,
    source: PropTypes.string,
    question: PropTypes.string,
    demographics: PropTypes.arrayOf(PropTypes.string),
};


export const ALL_PLATFORMS = [...HOUSING_PLATFORMS, ...JOBS_ECONOMY_PLATFORMS,
    ...ENERGY_CLIMATE_PLATFORMS, ...EDUCATION_PLATFORMS, ...HEALTHCARE_PLATFORMS,
    ...IMMIGRATION_PLATFORMS, ...TAXES_PLATFORMS];