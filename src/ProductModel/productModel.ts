//In this file, an array [] of <object> is created that describes the product model and their list.
//Each product object includes such fields as a name, a unique identifier, composition, 
//a description of the cooking technology, 
//as well as a calculate () method for calculating the required number of ingredients relative to the required volume of the product.

//Declare type for product object
export type productType = {
    name : string,
    description : string,
    composition : {},
    id : string,
    calculate : (val : number) => {}
}

export const Products : productType[] = [
    {
        name : "Apple Cordial",
        description : "wfefwef",
        composition : {
            apple_juice : 500,
            simple_syryp : 250,
            lemon_acid : 40
        },
        id : "applecord",
        calculate : (val : number) => {
            return {
                apple_juice : val * 500,
                simple_syryp : val * 250,
                lemon_acid : val * 40
            }
        }
    },
    {
        name : "Amber mix",
        description : "wfefwef",
        composition : {
            apple_juice : 500,
            simple_syryp : 250,
            lemon_acid : 40
        },
        id : "ambermix",
        calculate : (val : number) => {
            return {
                apple_juice : val * 500,
                simple_syryp : val * 250,
                lemon_acid : val * 40
            }
        }
    },
    {
        name : "Kinoto Cordial",
        description : "wfefwef",
        composition : {
            apple_juice : 500,
            simple_syryp : 250,
            lemon_acid : 40
        },
        id : "kinotocord",
        calculate : (val : number) => {
            return {
                apple_juice : val * 500,
                simple_syryp : val * 250,
                lemon_acid : val * 40
            }
        }
    },    {
        name : "Ginger Cordial",
        description : "Имбирь почистить,порезать,сешать все компоненты в блендере,отфильровать",
        composition : {
            apple_juice : 500,
            simple_syryp : 250,
            lemon_acid : 40
        },
        id : "gingercord",
        calculate : (val : number) => {
            return {
                apple_juice : val * 500,
                simple_syryp : val * 250,
                lemon_acid : val * 40
            }
        }
    },    {
        name : "Basil Cordial",
        description : "wfefwef",
        composition : {
            apple_juice : 500,
            simple_syryp : 250,
            lemon_acid : 40
        },
        id : "basilecord",
        calculate : (val : number) => {
            return {
                apple_juice : val * 500,
                simple_syryp : val * 250,
                lemon_acid : val * 40
            }
        }
    }
]