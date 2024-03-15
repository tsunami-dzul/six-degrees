import { Request, Response } from 'express';
import { listUserService, createUserService, updateUserService, deleteUserService, findUserRelationshipDistance } from '../services/user.service';
import { IUser } from '../model/IUser';

export const list = async (req: Request, res: Response): Promise<void> => {
  try {
    const usersResponse = await listUserService();

    res.json({
      ok: true,
      users: usersResponse.users,
      totalDocs: usersResponse.totalDocs,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: 'There was an unexpected error',
    });
  }
};

export const findRelationshipDistance = async (req: Request, res: Response): Promise<void> => {
  try {
    const name = req.params.name;

    const result = await findUserRelationshipDistance(name);

    if (!result) {
      res.status(404).json({
        ok: false,
        message: 'User not found',
      });
    }

    res.json({
      ok: true,
      message: `2nd and 3rd relationship distance of the user ${name} against the rest of the users`,
      adjencyList: result.graph,
      distances: result.distances,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: 'There was an unexpected error',
    });
  }
};

export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, friends }: IUser = req.body;

    const isUSerCreated = await createUserService({ name, friends });

    res.json({
      ok: true,
      message: isUSerCreated ? 'User was created' : 'Something went wrong',
    });
  } catch (error) {
    console.error('Controller:', error);

    res.status(500).json({
      ok: false,
      message: 'There was an unexpected error',
    });
  }
};

export const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, name, friends }: IUser = req.body;

    const userUpdated = await updateUserService({ id, name, friends });

    if (!userUpdated) {
      res.status(404).json({
        ok: false,
        message: `The user with the id ${id} was not found`,
      });
    }

    res.json({
      ok: true,
      user: userUpdated,
    });
  } catch (error) {
    console.error('Controller:', error);

    res.status(500).json({
      ok: false,
      message: 'There was an unexpected error',
    });
  }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;

    const userDeleted = await deleteUserService(id);

    if (!userDeleted) {
      res.status(404).json({
        ok: false,
        message: `The user with the id ${id} was not found`,
      });
    }

    res.json({
      ok: true,
      message: `The user with id ${id} was deleted`,
    });
  } catch (error) {
    console.error('Controller:', error);

    res.status(500).json({
      ok: false,
      message: 'There was an unexpected error',
    });
  }
};
