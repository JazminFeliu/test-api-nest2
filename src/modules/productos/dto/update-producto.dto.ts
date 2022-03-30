import { IsString } from "class-validator";

export class UpdateProductoDto {

    @IsString()
    readonly message: string;
}
