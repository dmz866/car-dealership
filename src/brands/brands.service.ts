import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
	private brands: Brand[] = [{
		id: uuid(),
		name: 'Kia',
		createdAt: Date.now(),
	}, {
		id: uuid(),
		name: 'Honda',
		createdAt: Date.now(),
	},
	{
		id: uuid(),
		name: 'Toyota',
		createdAt: Date.now(),
	}];

	getBrandList() {
		return this.brands;
	}

	getBrandById(id) {
		return this.brands.find(c => c.id == id);
	}

	createBrand(brandDTO: CreateBrandDto) {
		const brand: Brand = { id: uuid(), createdAt: Date.now(), ...brandDTO }
		return this.brands.push(brand);
	}

	updateBrand(id: string, brandDTO: UpdateBrandDto) {
		this.brands?.map(c => {
			if (c.id == id) {
				c = { id: c.id, createdAt: c.createdAt, updatedAt: Date.now(), ...brandDTO };
				return;
			}
		});

		return brandDTO;
	}

	deleteBrand(id: string) {
		this.brands = this.brands?.filter(c => c.id != id);
	}
}
