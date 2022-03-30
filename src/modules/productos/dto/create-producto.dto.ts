import { IsString } from "class-validator";

export class CreateProductoDto {

    @IsString()
    readonly message: string;

}
