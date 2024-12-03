import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'a4e6ba20-1b9a-4b26-b0d2-dd2efac948e5',
};

export const sampleWithPartialData: IAuthority = {
  name: '233c6f87-70a2-4fa8-9c39-56593f1a267c',
};

export const sampleWithFullData: IAuthority = {
  name: 'd43a17c0-0c65-4baf-851f-2f94b4326254',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
