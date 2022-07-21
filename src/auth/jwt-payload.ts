export class JwtPayload {
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly lastname: string;
  readonly mother_lastname: string;
  readonly user_rol: string[];
  readonly ci: string;
  readonly session_id: string;
}
