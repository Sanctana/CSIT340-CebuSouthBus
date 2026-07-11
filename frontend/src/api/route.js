import { api } from './client';

export const getRoutes = async () => {
	return api.get('/route');
}