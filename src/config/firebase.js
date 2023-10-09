  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  import { getAuth, GoogleAuthProvider } from "firebase/auth";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";

  const firebaseConfig = {
    apiKey: "AIzaSyABhyPp0h_xxAeYqrgSRkV3htKqAoJJNE0",
    authDomain: "fir-app-9e727.firebaseapp.com",
    projectId: "fir-app-9e727",
    storageBucket: "fir-app-9e727.appspot.com",
    messagingSenderId: "758030819742",
    appId: "1:758030819742:web:e82a447c71a929915bb68f",
    measurementId: "G-BY21ERY4B6"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const auth = getAuth(app);
  export const googleProvider = new GoogleAuthProvider();
  export const db = getFirestore(app);
  export const storage = getStorage(app);