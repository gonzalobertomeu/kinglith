export interface UserProps {
  id: string;
  email: string;
  password: string;
  isActive: boolean;
  isValidated: boolean;
  createdAt: Date;
}
export class User {
  private constructor(
    private readonly _id: string,
    private _email: string,
    private _password: string,
    private _isActive: boolean,
    private _isValidated: boolean,
    private _createdAt: Date,
  ) {}

  static create(email: string, passwordHash: string): User {
    return new User(
      crypto.randomUUID(),
      email,
      passwordHash,
      true,
      false,
      new Date(),
    );
  }

  static reconstitute(props: UserProps) {
    return new User(
      props.id,
      props.email,
      props.password,
      props.isActive,
      props.isValidated,
      props.createdAt,
    );
  }

  get id(): string {
    return this._id;
  }
  get email(): string {
    return this._email;
  }
  get isActive(): boolean {
    return this._isActive;
  }
  get isValidated(): boolean {
    return this._isValidated;
  }
  get snapshot() {
    return {
      id: this.id,
      email: this.email,
      password: this._password,
      isActive: this.isActive,
      isValidated: this.isValidated,
      createdAt: this._createdAt,
    };
  }
}

export type UserSnapshot = ReturnType<() => User['snapshot']>;
