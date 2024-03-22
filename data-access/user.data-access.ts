import { IUser, IUsers } from '../model/IUser';
import User from '../schema/user.schema';

export const listUser = async (): Promise<IUsers> => {
  try {
    const users: IUser[] = await User.find({}, { password: 0 });

    const totalDocs = await User.countDocuments();

    const response: IUsers = {
      users,
      totalDocs,
    };

    return response;
  } catch (error) {
    console.error('DTO:', error);

    throw error;
  }
};

export const createUser = async (user: IUser): Promise<boolean> => {
  try {
    const newUser = new User(user);

    await newUser.save();

    return true;
  } catch (error) {
    console.error('DTO:', error);
    throw error;
  }
};

export const updateUser = async (user: IUser): Promise<IUser | null> => {
  try {
    const userUpdated = await User.findByIdAndUpdate(user.id, user, { new: true });

    if (!userUpdated) {
      return null;
    }

    const response: IUser = {
      id: userUpdated.id,
      name: userUpdated.name,
      friends: userUpdated.friends,
    };

    return response;
  } catch (error) {
    console.error('DTO:', error);
    throw error;
  }
};

export const deleteUser = async (id: string): Promise<boolean> => {
  try {
    const userDeleted = await User.findByIdAndDelete(id);

    if (!userDeleted) {
      return false;
    }

    return true;
  } catch (error) {
    console.error('DTO:', error);
    throw error;
  }
};
