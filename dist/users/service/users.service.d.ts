import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { PrismaService } from './prisma.service';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
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
