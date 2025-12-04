import { mahasantri } from "./data.js";

export const tampilkan = () => {
    mahasantri.forEach ((data,index) =>{
        console.log(`${index +1} - ${data.nama} - ${data.nilai}`);
        
    })
}