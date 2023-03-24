import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './car.interface';

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
}
