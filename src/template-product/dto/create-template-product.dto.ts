import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateTemplateProductDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    product_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    laboratory_template_id: string;
}

