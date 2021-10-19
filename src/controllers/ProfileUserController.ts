import {Request, Response} from "express";
import {GetLast3MessagesService} from "../services/GetLast3Messages";
import {ProfileUserService} from "../services/ProfileUserService";

class ProfileUserController {
  async handle (request: Request, response: Response) {
    const service = new ProfileUserService();
    const {user_id} = request;
    try {
      const result = await service.execute(user_id);
      return response.json(result);
    } catch (e) {
      return response.status(400).json({error: e.message});
    }
  }
}

export {ProfileUserController}