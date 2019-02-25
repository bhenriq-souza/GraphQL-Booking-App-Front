export type AuthenticationType = 'login' | 'registration';
export interface IAuthDTO { email: string, password: string };

export class User {
    userId?: string;
    tokenExpiration?: string;
    token?: string;
}
