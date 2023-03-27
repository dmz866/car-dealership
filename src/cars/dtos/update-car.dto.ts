import { IsString } from "class-validator";

export class UpdateCarDTO {
	@IsString()
	readonly id: string;
	@IsString()
	readonly model: string;
	@IsString()
	readonly brand: string;
}