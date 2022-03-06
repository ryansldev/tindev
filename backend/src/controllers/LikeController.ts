import { Request, Response } from "express";
import { Dev } from "../models/Dev";

class LikeController {
  async store(request: Request, response: Response) {
    const { devId } = request.params;
    const { user } = request.headers;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    if(!targetDev) {
      return response.status(400).json({ error: "Dev not exists" });
    }

    if(targetDev.likes.includes(loggedDev._id)) {
      console.log("DEU MATCH");
    }

    loggedDev.likes.push(targetDev._id);

    await loggedDev.save();

    return response.json(loggedDev);
  }
}

export { LikeController };