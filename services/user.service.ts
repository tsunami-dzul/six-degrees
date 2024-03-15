import { createUser, deleteUser, listUser, updateUser } from '../data-access/user.data-access';
import { IDistanceResponse } from '../model/IDistance';
import { IGraph } from '../model/IGraph';
import { IUser, IUsers } from '../model/IUser';
import { dijkstra } from '../utils/dijkstra';

export const listUserService = async (): Promise<IUsers> => {
  try {
    const userList = await listUser();

    return userList;
  } catch (error) {
    console.error('Service: ', error);

    throw error;
  }
};

export const findUserRelationshipDistance = async (name: string): Promise<IDistanceResponse> => {
  try {
    const userList = await listUser();

    const graph: IGraph = {};

    for (let user of userList.users) {
      const friends: IGraph = {};

      for (let friend of user.friends) {
        friends[friend] = 1;
      }

      graph[user.name] = friends;
    }

    const distances = dijkstra(graph, name);

    return {
      graph,
      distances,
    };
  } catch (error) {
    console.error('Service: ', error);

    throw error;
  }
};

export const createUserService = async (user: IUser): Promise<boolean> => {
  try {
    const isUserCreated = await createUser(user);

    return isUserCreated;
  } catch (error) {
    console.error('Service: ', error);

    throw error;
  }
};

export const updateUserService = async (user: IUser): Promise<IUser | null> => {
  try {
    const userUpdated = await updateUser(user);

    return userUpdated;
  } catch (error) {
    console.error('Service: ', error);

    throw error;
  }
};

export const deleteUserService = async (id: string): Promise<boolean> => {
  try {
    const userDeleted = await deleteUser(id);

    return userDeleted;
  } catch (error) {
    console.error('Service: ', error);

    throw error;
  }
};
