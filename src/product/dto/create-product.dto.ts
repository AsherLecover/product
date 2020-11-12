import { IsInt, IsNumber, IsString } from 'class-validator';

export class CreateProductDTO {
    
  @IsString()
  name: string;

  @IsString()
  description: string;

    price: number;
}
