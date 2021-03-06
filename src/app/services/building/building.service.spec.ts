import { TestBed } from '@angular/core/testing';

import { BuildingService } from './building.service';

describe('BuildingService', () => {
	let service: BuildingService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(BuildingService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();

		expect(service.numberOfFloors$).toBeDefined();
		expect(service.numberOfFloors$.value).toBeGreaterThan(2);
	});
});
