import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './car.interface';
import { CreateCarDTO } from './dtos/create-car.dto';
import { UpdateCarDTO } from './dtos/update-car.dto';

@Injectable()
export class CarsService {
	private cars: Car[] = [{
		id: uuid(),
		brand: 'Kia',
		model: 'Seltos'
	}, {
		id: uuid(),
		brand: 'Honda',
		model: 'Civic'
	},
	{
		id: uuid(),
		brand: 'Toyota',
		model: 'Corolla'
	}];

	getCarList() {
		return this.cars;
	}

	getCarById(id) {
		return this.cars.find(c => c.id == id);
	}

	createCar(carDTO: CreateCarDTO) {
		const car: Car = { id: uuid(), ...carDTO }
		return this.cars.push(car);
	}

	updateCar(carDTO: UpdateCarDTO) {
		this.cars?.map(c => {
			if (c.id == carDTO.id) {
				c = { ...carDTO };
				return;
			}
		});

		return carDTO;
	}
}
