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
    return this.userRepository.insert({
      name: createUserDto.name,
      password: createUserDto.password,
      email: createUserDto.email,
      is_active: true,
      is_deleted: false,
      created_at: new Date(),
      updated_at: null,
      deleted_at: null
    })
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