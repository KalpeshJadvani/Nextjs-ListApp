import { ItemModel } from '../pages/Home/Home.module';
export type Action = { type: 'UPDATE'; results: ItemModel[]; totalItems: number } | { type: 'QUERY'; query: string } | { type: 'PAGINATION'; page: number };
