import { IsString, IsOptional, MinLength } from 'class-validator';

export class UpdateProfileDto {
  @IsString()
  @IsOptional()
  @MinLength(2)
  displayName?: string;

  @IsString()
  @IsOptional()
  avatar?: string;
}
