import { osRoutes } from '../data/osRoutes.js';

export const routes = [{ path: '/', label: 'AIVerse Landing' }, ...osRoutes.map((route) => ({ path: route.path, label: route.title }))];
