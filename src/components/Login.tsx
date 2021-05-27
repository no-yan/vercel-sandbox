import firebase from 'firebase/app';
import 'firebase/auth'; // If you need it
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useContext } from 'react';
import { FirebaseContext, UserContext } from '../firebase/contexts';

const Login = (): JSX.Element => {
  const { auth } = useContext(FirebaseContext);
  const { user: firebaseUser, setUser } = useContext(UserContext);

  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        customParameters: { lang: 'ja', prompt: 'select_account' },
      },
    ],
    callbacks: {
      signInSuccessWithAuthResult: ({ user }: firebase.auth.UserCredential) => {
        if (user) {
          setUser(user);
        }

        return false;
      },
    },
  };

  return (
    <div className="flex-end flex items-center">
      {firebaseUser?.displayName ? (
        <div className="flex flex-row text-center font-bold tracking-wider shadow-2xl">
          <p
            className="p-2 w-full underline rounded overflow-hidden"
            style={{ width: 140 }}
          >
            welcome {firebaseUser?.displayName}!
          </p>
          <button
            type="button"
            className="ml-4 px-2 bg-white hover:bg-yellow-100 rounded"
            onClick={() => auth?.signOut()}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      )}
    </div>
  );
};

export default Login;
