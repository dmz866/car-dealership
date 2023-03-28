import { Car } from "src/cars/car.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [{
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
