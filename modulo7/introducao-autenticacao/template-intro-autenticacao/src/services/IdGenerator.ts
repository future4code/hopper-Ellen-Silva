import { v4 } from "uuid"

export class IdGenerator {
    public generatorId = () =>{
        return v4()
    }
}