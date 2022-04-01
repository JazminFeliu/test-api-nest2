import { IsString } from "class-validator";

export class CreateCatDto {

    @IsString()
    readonly message: string;

}