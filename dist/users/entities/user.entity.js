"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(partial) {
        this.name = partial.name;
        this.email = partial.email;
        this.password = partial.password;
    }
    get_id() {
        return this.id;
    }
    get_name() {
        return this.name;
    }
    get_email() {
        return this.email;
    }
    get_password() {
        return this.password;
    }
    set_id(id) {
        this.id = id;
    }
    set_name(name) {
        this.name = name;
    }
    set_email(email) {
        this.email = email;
    }
    set_password(password) {
        this.password = password;
    }
}
exports.User = User;
//# sourceMappingURL=user.entity.js.map