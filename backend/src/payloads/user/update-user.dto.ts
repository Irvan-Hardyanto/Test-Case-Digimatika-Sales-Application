export class UpdateUserDto {
  name: string;
  password: string;
  email: string;
  is_active: boolean;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  hashed_rd: string;
}