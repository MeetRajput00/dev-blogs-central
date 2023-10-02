import { initializeApp } from "firebase/app";
import { getDatabase,ref, set,get,child } from "firebase/database";
const firebaseConfig = {
  apiKey: process.env.firebase_apiKey,
  authDomain: process.env.firebase_authDomain,
  projectId: process.env.firebase_projectId,
  storageBucket: process.env.firebase_storageBucket,
  messagingSenderId: process.env.firebase_messagingSenderId,
  appId: process.env.firebase_appId,
  measurementId: process.env.firebase_measurementId,
  databaseURL: process.env.firebase_databaseURL
};


const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default async function writeUserData(firstName, lastName, mobile, username, email, password) {
    await set(ref(database, 'users/' + username), {
      firstName: firstName,
      lastName: lastName,
      mobile: mobile,
      email: email,
      password : password,
      joiningDate: new Date().toLocaleString()
    });
  }
  export async function getDashboardPosts(username=""){
    const snapshot = await get(child(ref(database), "posts"));
    const result = [];
    if(username!==""){
      snapshot.forEach((data) => {
          if(username!=="" && data.val().username===username){
            result.push({
              postname: data.key,
              post: data.val().data,
              username: data.val().username,
            });
          }
      });
    }
    else{
      snapshot.forEach((data) => {
          result.push({
              postname: data.key,
              post: data.val().data,
              username: data.val().username,
          });
      });
    }
    return result;
  }
export async function createUserPost(username, postname, post){
  const snapshot=await get(child(ref(database),"posts/"+postname));
  if (snapshot.exists()) {
      return false;
  }
  else{
    await set(ref(database, 'posts/' + postname), {
      username: username,
      data: post
    });
    return true;
  }
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
      const data = {
        firstName: snapshot.val().firstName,
        lastName: snapshot.val().lastName,
        mobile: snapshot.val().mobile,
        email: snapshot.val().email,
        joiningDate: snapshot.val().joiningDate,
        username: username
      };    
      return data;    
    }
  }
  return null;
}