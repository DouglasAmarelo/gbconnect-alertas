import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_PUSH_API_KEY,
  authDomain: 'gb-connect-alertas.firebaseapp.com',
  databaseURL: 'https://gb-connect-alertas.firebaseio.com',
  projectId: 'gb-connect-alertas',
  storageBucket: 'gb-connect-alertas.appspot.com',
  messagingSenderId: process.env.REACT_APP_PUSH_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_PUSH_APP_ID,
  measurementId: process.env.REACT_APP_PUSH_MEASUREMENT_ID,
};

// @ts-ignore
export const startFirebase = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
};

// @ts-ignore
export const askForNotificationPermissions = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('token do usuário:', token);
    return token;
  } catch (error) {
    console.error(error);
  }
};
