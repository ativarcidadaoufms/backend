import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  getHello (): string {
    return 'Hello World!'
  }

  //TODO: Implementar Repository e as funções FindAll, FindOne
}
