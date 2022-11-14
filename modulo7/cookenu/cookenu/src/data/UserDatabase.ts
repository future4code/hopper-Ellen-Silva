import { strict } from "assert";
import { CustomError } from "../error/customError";
import { recipe } from "../model/recipe";
import { infoUserInput, user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          nickname: user.nickname,
          email: user.email,
          password: user.password,
        })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public infoUser = async (user: infoUserInput) => {
    try {
      await UserDatabase.connection
        .update({ name: user.email})
        .where({ id: user.id })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findUserByEmail = async (email: string) => {
    try {
      const result = await UserDatabase.connection("Auth_users")
      .select()
      .where({email})
      
      return result[0]
        
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public insertRecipe = async (recipe: recipe) => {
    try {
      await UserDatabase.connection
        .insert({
          
          title: recipe.title,
          description: recipe.description,
          date: recipe.date
        })
        .into("Auth_recipes");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
