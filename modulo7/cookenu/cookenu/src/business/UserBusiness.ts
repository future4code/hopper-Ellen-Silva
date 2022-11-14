import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, UserNotFound } from "../error/customError";
import { recipe, RecipeInput } from "../model/recipe";
import {
  UserInputDTO,
  user,
  infoUserInputDTO,
  infoUserInput,
  LoginInputDTO,
} from "../model/user";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator()
const authenticator = new Authenticator

export class UserBusiness {
  public signup = async (input: UserInputDTO) => {
    try {
      const { name, nickname, email, password } = input;

      if (!name || !nickname || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email" e "password"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      if(password.length < 6){
        throw new InvalidPassword();
      }

      const id: string = idGenerator.generatorId();

      const user: user = {
        id,
        name,
        nickname,
        email,
        password,
      };
      const userDatabase = new UserDatabase();
      await userDatabase.insertUser(user);

      const token = authenticator.generateToken({id})

      return token

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO) => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "email" e "password"'
        );
      }

      
      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      if(password.length < 6){
        throw new InvalidPassword();
      }

      const id: string = idGenerator.generatorId();

      
      const userDatabase = new UserDatabase();
      const user = await userDatabase.findUserByEmail(email);
         
      if(!user){
        throw new UserNotFound();
      }

      if(user.password !== password){
        throw new InvalidPassword()
      }
      const token = authenticator.generateToken({id: user.id})

      return token

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public infoUser = async (input: infoUserInputDTO) => {
    try {
      const { email, token } = input;

      if (!email) {
        throw new CustomError(
          400,
          'Preencha os campos "id" e "email" '
        );
      }

      
      const {id} = authenticator.getTokenData(token)

      const infoUserInput: infoUserInput = {
        id,
        email,
       
      };

      const userDatabase = new UserDatabase();
      await userDatabase.infoUser(infoUserInput);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public recipe = async (input: RecipeInput) => {
    try {
      const {title, description, date } = input;

      if (!title || !description || !date ) {
        throw new CustomError(
          400,
          'Preencha os campos "title","description" e "date"'
        );
      }

      const id: string = idGenerator.generatorId();

      const recipe: recipe = {
        
        title,
        description,
        date,
        
      };
      const userDatabase = new UserDatabase();
      await userDatabase.insertRecipe(recipe);

      const token = authenticator.generateToken({id})

      return token

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
