import { describe, it, expect } from 'vitest';
import request from 'supertest';
import express from 'express';
import branchRouter from './branch';

const app = express();
app.use(express.json());
app.use('/branches', branchRouter);

describe('Branch API', () => {
	it('should create a new branch', async () => {
		const newBranch = { branchId: 1, name: 'Branch 1' };
		const response = await request(app).post('/branches').send(newBranch);
		expect(response.status).toBe(201);
		expect(response.body).toEqual(newBranch);
	});

	it('should get all branches', async () => {
		const response = await request(app).get('/branches');
		expect(response.status).toBe(200);
		expect(response.body).toEqual([{ branchId: 1, name: 'Branch 1' }]);
	});

	it('should get a branch by ID', async () => {
		const response = await request(app).get('/branches/1');
		expect(response.status).toBe(200);
		expect(response.body).toEqual({ branchId: 1, name: 'Branch 1' });
	});

	it('should update a branch by ID', async () => {
		const updatedBranch = { branchId: 1, name: 'Updated Branch 1' };
		const response = await request(app).put('/branches/1').send(updatedBranch);
		expect(response.status).toBe(200);
		expect(response.body).toEqual(updatedBranch);
	});

	it('should delete a branch by ID', async () => {
		const response = await request(app).delete('/branches/1');
		expect(response.status).toBe(204);
	});

	it('should return 404 for non-existing branch', async () => {
		const response = await request(app).get('/branches/999');
		expect(response.status).toBe(404);
	});
});
