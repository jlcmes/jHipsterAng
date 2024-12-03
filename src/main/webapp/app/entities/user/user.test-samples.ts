import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 20561,
  login: '{C@dU3\\BCG\\~xYuQ',
};

export const sampleWithPartialData: IUser = {
  id: 21546,
  login: '-?@0s5lL\\|Y8j\\Gf-g5\\hWlJzf\\tk8Yoz',
};

export const sampleWithFullData: IUser = {
  id: 6803,
  login: 'X',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
