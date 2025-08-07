import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user.entity';
import { CreateUserDto } from 'src/payloads/user/create-user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ){}

  create(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.name = createUserDto.name;
    newUser.email = createUserDto.email;
    newUser.is_active = true;
    newUser.is_deleted = false;
    newUser.created_at = new Date();
    newUser.updated_at = null;
    newUser.deleted_at = null;
    return this.userRepository.save(newUser);
  }

  async updateHashedRefreshToken(userId: number,hashed_rt: string) {
    const user = await this.userRepository.findOneBy({id: userId});
    user.hashed_rt = hashed_rt
    this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  findOneByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOneBy({email})
  }
}