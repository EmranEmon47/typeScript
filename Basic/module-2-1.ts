{

//type assertion
let anything : any;

anything = "Next Level web development";

anything = 222 ;

// (anything as number).

const kgToGm = (value:string | number) : string | number | undefined => {
    if(typeof value === 'string'){
        const convertedValue = parseFloat(value)*1000;
        return `The converted value is : &{convertedValue}`
    }
    if(typeof value === "number"){
        return value *1000
    }
}
const result1 =kgToGm(1000) as number

}


