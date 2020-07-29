import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'contato@denistoledo.com.br',
    password: '123456',
    techs: [
      'node',
      'react',
      'ember',
      { title: 'js', experience: 100 }
    ]
  });

  return response.json(user)
}