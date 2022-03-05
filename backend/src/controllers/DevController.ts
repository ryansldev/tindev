import { Request, Response } from "express";
import { api } from "../services/github";

import { Dev } from "../models/Dev";

class DevController {  
  async store(request: Request, response: Response) {
    const { username } = request.body;

    const userExists = await Dev.findOne({ user: username });

    if(userExists) {
      return response.json(userExists);
    }

    const { data: user } = await api.get(`/users/${username}`);

    const { name, bio, avatar_url: avatar } = user;

    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar,
    })

    return response.json(dev);
  }
};

export { DevController };
