import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { RecipeInput } from "../model/recipe";
import { infoUserInputDTO, LoginInputDTO, UserInputDTO } from "../model/user";

export class UserController {

      public signup = async (req: Request, res: Response) => {
        try {
          const { name, nickname, email, password } = req.body;
    
          const input: UserInputDTO = {
            name,
            nickname,
            email,
            password,
          };
          const userBusiness = new UserBusiness()
          const token = await userBusiness.signup(input);
    
          res.status(201).send({ message: "Usuário criado!" , token});
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };    

      public login = async (req: Request, res: Response) => {
        try {
          const { email, password } = req.body;
    
          const input: LoginInputDTO = {
            email,
            password,
          };
          const userBusiness = new UserBusiness()
          const token = await userBusiness.login(input);
    
          res.status(201).send({token});
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };    

      public infoUser = async (req: Request, res: Response) => {
        try {
          
          const input: infoUserInputDTO = {
            email: req.body.email,
            token: req.headers.authorization as string
          };

          const userBusiness = new UserBusiness()
          userBusiness.infoUser(input);
    
          res.status(201).send({ message: "Usuário visualizado!" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 
      
      public recipe = async (req: Request, res: Response) => {
        try {
          const { title, description, date} = req.body;
    
          const recipe: RecipeInput = {
            title,
            description,
            date,
            
          };
          const userBusiness = new UserBusiness()
          const token = await userBusiness.recipe(recipe);
    
          res.status(201).send({ message: "Receita criada com sucesso!" , token});
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }
 

}
