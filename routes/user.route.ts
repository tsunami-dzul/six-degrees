import { Router } from 'express';
import { create, getByEmail, list, remove, update } from '../controllers/user.controller';

const routerUser = Router();

routerUser.get('/', list);

routerUser.get('/:email', getByEmail);

routerUser.post('/', create);

routerUser.put('/', update);

routerUser.delete('/:email', remove);

export default routerUser;
