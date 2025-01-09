import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UsersService } from '../service/users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        name: string;
        email: string;
        phone_number: string;
        password: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        email: string;
        phone_number: string;
        password: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        phone_number: string;
        password: string;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        name: string;
        email: string;
        phone_number: string;
        password: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        phone_number: string;
        password: string;
    }>;
}
