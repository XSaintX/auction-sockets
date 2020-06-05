import { ProductList } from '../class/product';
import { UsersList } from '../class/users-list';

export const productlistz = new ProductList();
export const usersConnected = new UsersList();

export const SERVER_PORT: number = Number(process.env.PORT) || 5000;