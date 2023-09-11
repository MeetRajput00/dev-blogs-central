import { initializeApp } from "firebase/app";
import { getDatabase,ref, set,get,child } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.firebase_apiKey,
  authDomain: "devspace-11ca8.firebaseapp.com",
  projectId: "devspace-11ca8",
  storageBucket: "devspace-11ca8.appspot.com",
  messagingSenderId: "589037692530",
  appId: "1:589037692530:web:6a3b4ace8025f6e64304eb",
  measurementId: "G-H4KNY4TQ8Q",
  databaseURL: "https://devspace-11ca8-default-rtdb.firebaseio.com/"
};


const app = initializeApp(firebaseConfig);

const database = getDatabase(app);


export default async function writeUserData(username, email, password) {
    await set(ref(database, 'users/' + username), {
      email: email,
      password : password
    });
  }
export async function checkUserExists(username){
  const snapshot=await get(child(ref(database),"users/"+username));
    if(snapshot.exists()){
      return true;
    }
    return false;
}
export async function authenticateUser(username, password){
  const snapshot=await get(child(ref(database),"users/"+username));
  if(snapshot.exists()){
    if(snapshot.val().password===password){
      return true;
    }
  }
  return false;
}