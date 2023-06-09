import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Controller('brands')
export class BrandsController {
	constructor(private readonly brandsService: BrandsService) { }

	@Post()
	create(@Body() createBrandDto: CreateBrandDto) {
		return this.brandsService.createBrand(createBrandDto);
	}

	@Get()
	findAll() {
		return this.brandsService.getBrandList();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.brandsService.getBrandById(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
		return this.brandsService.updateBrand(id, updateBrandDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.brandsService.deleteBrand(id);
	}
}
