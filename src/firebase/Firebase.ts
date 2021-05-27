import fb from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import 'firebase/auth';
import 'firebase/firestore';

if (!fb.apps.length) {
  fb.initializeApp(firebaseConfig);
}
// eslint-disable-next-line import/prefer-default-export
export const auth = fb.auth();
