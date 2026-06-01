"use strict";
import Citizen from "./class.citizen.js";
import NobleCitizen from "./class.nobleCitizen.js";
/**
 * Create a Village class. Each village should have
 * - a name
 * - an array of its buildings
 * - an array of its citizens
 *
 *
 *
 * You can see in main.js what methods a village should provide.
 * implement them.
 */

export default class Village{
    constructor(name){
        this.name = name;
        this.buildings = [];
        this.citizens = [];
    }

    addBuilding(name, capacity, noble = false){
        this.building.push(noble ? new NobleBuilding(name, capacity) : new Building(name, capacity));

    }

    addCitizen(name, noble = false){
        this.citizens.push(noble ? new NobleCitizen(name) : new Citizen(name));
        this.shelterCitizen(citizen);
    }

    shelterTheWorthy(){
        for(const citizen of this.citizens){
            if(citizen.home === null){
                this.shelterCitizen(citizen);
            }
        }
    }

    shelterCitizen(citizen){
        for(const building of this.buildings){
            if(building.addResident(citizen)){
                return;
            }
        }
    }

    printCitizenDirectory(){
        for(const building of this.buildings){
            building.listAllResidents();
        }
        this.listAllHomeless();
    }

    listAllHomeless(){
        console.log("%c Homeless People of " + this.name + ": " , "background-color. #a00; color: white");
        for(const citizen of this.citizens){
            if(citizen.home === null){
                console.log(citizen);
            }
        }
    }

}