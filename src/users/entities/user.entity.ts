export class User {

    id: number;
    name: string;
    email: string;
    password: string;

    constructor(partial: Partial<User>) {
        this.name = partial.name;
        this.email = partial.email;
        this.password = partial.password;

    }

    public get_id(): number {
        return this.id;
    }

    public get_name(): string {
        return this.name;
    }

    public get_email(): string {
        return this.email;
    }

    public get_password(): string {
        return this.password;
    }

    public set_id(id: number): void {
        this.id = id;
    }

    public set_name(name: string): void {
        this.name = name;
    }

    public set_email(email: string): void {
        this.email = email;
    }

    public set_password(password: string): void {
        this.password = password;
    }

}
