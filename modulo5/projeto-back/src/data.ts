import { type } from "os"

export type User = {
    id:number,
    name:string,
    cpf:string,
    birthday:string,
    balance:number,
    extract:Extract[],
}

export type Extract = {
    value:number,
    date:string,
    description:string,
}

export let users: User[]= [

    {
        id: 1,
        name: "Alice",
        cpf: "005.333.444-88",
        birthday: '25/02/1950',
        balance:0,
        extract:[{value:0, date:'31/08/2022',description:'extrato inicial'}]
    },
    {
        id: 2,
        name: "Bob",
        cpf: "025.383.254-44",
        birthday: "03/06/1996",
        balance:0,
        extract:[{value:0, date:'31/08/2022',description:'extrato inicial'}]
    },
    {
        id: 3,
        name: "Coragem",
        cpf: "045.323.414-38",
        birthday: "21/08/1990",
        balance:0,
        extract:[{value:0, date:'31/08/2022',description:'extrato inicial'}]

    },
    {
        id: 4,
        name: "Dory",
        cpf: "002.373.489-89",
        birthday: "17/05/1971",
        balance:0,
        extract:[{value:0, date:'31/08/2022',description:'extrato inicial'}]
    },
    {
        id: 5,
        name: "Elsa",
        cpf: "008.322.454-82",
        birthday: "17/02/1984",
        balance:0,
        extract:[{value:0, date:'31/08/2022',description:'extrato inicial'}]
    },
    {
        id: 6,
        name: "Fred",
        cpf: "001.335.434-81",
        birthday: "06/10/1966",
        balance:0,
        extract:[{value:0, date:'31/08/2022',description:'extrato inicial'}]
    }
]