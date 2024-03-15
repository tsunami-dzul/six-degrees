import { Router } from 'express';
import { create, findRelationshipDistance, list, remove, update } from '../controllers/user.controller';

const routerUser = Router();

routerUser.get('/', list);

routerUser.get('/:name', findRelationshipDistance);

routerUser.post('/', create);

routerUser.put('/', update);

routerUser.delete('/:id', remove);

export default routerUser;
