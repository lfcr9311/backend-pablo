export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    constructor(partial: Partial<User>);
    get_id(): number;
    get_name(): string;
    get_email(): string;
    get_password(): string;
    set_id(id: number): void;
    set_name(name: string): void;
    set_email(email: string): void;
    set_password(password: string): void;
}
