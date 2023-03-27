import { IsString } from "class-validator";
import { IsEmpty } from "class-validator/types/decorator/decorators";

export class CreateCarDTO {
	@IsString()
	readonly model: string;
	@IsString()
	@IsEmpty()
	readonly brand: string;
}