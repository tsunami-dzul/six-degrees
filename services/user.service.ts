import { createUser, deleteUser, getUserByEmail, listUser, updateUser } from '../data-access/user.data-access';
import { IUser, IUsers } from '../model/IUser';

export const listUserService = async (): Promise<IUsers> => {
  try {
    const userList = await listUser();

    return userList;
  } catch (error) {
    console.error('Service: ', error);

    throw error;
  }
};

export const getUserByEmailService = async (email: string): Promise<IUser | null> => {
  try {
    const user = await getUserByEmail(email);

    return user;
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
