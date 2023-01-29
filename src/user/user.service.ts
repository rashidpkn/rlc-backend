import { Injectable } from '@nestjs/common';
import { User } from 'src/database/model/user.entity';

@Injectable()
export class UserService {
  create = async (username: string, email: string, password: string, role: string) => {
    try {
      const found = await User.findOne({ where: { email } });
      if (found) {
        return {
          status: false,
          reason: 'User already exist',
        };
      } else {
        await User.create({ username, email, password, role });

        return {
          status: true,
          reason: 'User is created',
          token: 'asdfgjkl',
          role: role,
        };
      }
    } catch (error) {
      return {
        status: false,
        reason: error.message,
      };
    }
  };

  login = async (email: string, password: string) => {
    try {
      const found = await User.findOne({ where: { email, password } });
      if (found) {
        return {
          status: true,
          reason: '',
          token: 'asdfgjkl',
          role: found.role,
          username: found.username
        };
      } else {
        return {
          status: false,
          reason: 'User not Exist',
        };
      }
    } catch (error) {
      return {
        status: false,
        reason: error.message,
      };
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  delete = async () => { };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  verify = async () => { };
}
