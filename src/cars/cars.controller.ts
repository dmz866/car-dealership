import { Controller, Get, NotFoundException, Param, ParseUUIDPipe } from '@nestjs/common';
import { Body, Post, Put } from '@nestjs/common/decorators';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dtos/create-car.dto';
import { UpdateCarDTO } from './dtos/update-car.dto';

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
	//@UsePipes(ValidationPipe)
	createCar(@Body() car: CreateCarDTO) {
		return this.carsService.createCar(car);
	}

	@Put(':id')
	updateCar(@Param('id', ParseUUIDPipe) id, @Body() car: UpdateCarDTO) {
		return this.carsService.updateCar(id, car);
	}
}
