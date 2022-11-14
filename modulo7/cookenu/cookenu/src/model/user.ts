export type user = {
   id: string
   email: string
   password: string
   name: string
   nickname: string
}

export interface UserInputDTO {
   name: string,
   nickname: string,
   email: string,
   password: string
}

export interface LoginInputDTO {
   
   email: string,
   password: string
}

export interface infoUserInputDTO {
   email: string,
   token: string
}

export interface infoUserInput {
   email: string,
   id: string
}

export type AuthenticationData = {
   id: string
}