import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCI0qE9YPGjSMHGkD7fiPZqlsG7cQ514ew",
  authDomain: "miniblog-8ead9.firebaseapp.com",
  projectId: "miniblog-8ead9",
  storageBucket: "miniblog-8ead9.appspot.com",
  messagingSenderId: "923416313762",
  appId: "1:923416313762:web:8c9e8e0fad805349b43cfb"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
