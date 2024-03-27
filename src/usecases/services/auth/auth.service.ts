import { Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { User } from "src/core/entities/user.entity";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(
    id: number,
    username: string,
    pass: string,
  ): Promise<User | null> {
    const user = await this.userService.findOne(id);
    if (user && user.password === pass) {
      return user;
    }
    return null;
  }
}
