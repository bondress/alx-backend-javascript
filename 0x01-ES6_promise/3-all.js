import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const info = [uploadPhoto(), createUser()];

  return Promise.all(info)
    .then((info) => console.log(`${info[0].body} ${info[1].firstName} ${info[1].lastName}`),
      () => console.log('Signup system offline'));
}
