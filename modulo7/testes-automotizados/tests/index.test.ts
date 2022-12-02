import { performPurchase, User } from "../src"


describe.skip("teste", ()=>{

    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 100
        }
    
        const result = performPurchase(user, 40)
        
        expect(result).toEqual({
            name: "Astrodev",
            balance: 60
        })
    })


})

describe.skip("teste2", ()=>{
    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 50
        }
    
        const result = performPurchase(user, 50)
        
        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })
})

describe.skip("teste3", ()=>{
    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 30
        }
    
        const result = performPurchase(user, 50)
        
        expect(result).not.toBeDefined()
    })
})
