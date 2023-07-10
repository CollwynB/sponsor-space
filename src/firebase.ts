import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPxMSKMZXyekjp-evVkxBKMYQhphY2xoc",
  authDomain: "sponsor-space-7d969.firebaseapp.com",
  projectId: "sponsor-space-7d969",
  storageBucket: "sponsor-space-7d969.appspot.com",
  messagingSenderId: "425487517436",
  appId: "1:425487517436:web:700387475a9a5788613979",
  measurementId: "G-GW0TTRQMCD",
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db, analytics };
