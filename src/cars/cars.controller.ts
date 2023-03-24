import { Controller, Get, NotFoundException, Param, ParseUUIDPipe } from '@nestjs/common';
import { Post, Put } from '@nestjs/common/decorators';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

	constructor(private readonly carsService: CarsService) {
	}

	@Get()
	GetCarList() {
		return this.carsService.getCarList();
	}

	@Get(':id')
	GetCarById(@Param('id', ParseUUIDPipe) id) {
		const car = this.carsService.getCarById(id);

		if (!car) throw new NotFoundException(`id ${id} not found`);

		return car;
	}

	@Post()
	createCar() {
		return {
			ok: true
		};
	}

	@Put(':id')
	updateCar() {
		return {
			ok: true
		};
	}
}
