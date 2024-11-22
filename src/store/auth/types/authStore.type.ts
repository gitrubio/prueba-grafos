
export enum AuthenticationStatus {
	notAuthenticated = 'not-authenticated',
	authenticated = 'authenticated',
	checking = 'checking',
}

export type AuthSlice = {
	status: AuthenticationStatus;
	user: IUser;
};

export interface IUser {
	id:           string;
	displayName:     string;
	email:        string;
}

