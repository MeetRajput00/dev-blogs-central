import { initializeApp } from "firebase/app";
import { getDatabase,ref, set,get,child } from "firebase/database";

const firebaseConfig = {
  apiKey: 'AIzaSyDTlRjN7zYnkh5riFRqFLr-HcArqtCXLu8',
  authDomain: 'devspace-11ca8.firebaseapp.com',
  projectId: 'devspace-11ca8',
  storageBucket: 'devspace-11ca8.appspot.com',
  messagingSenderId: '589037692530',
  appId: '1:589037692530:web:6a3b4ace8025f6e64304eb',
  measurementId: 'G-H4KNY4TQ8Q',
  databaseURL: 'https://devspace-11ca8-default-rtdb.firebaseio.com/'
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
export async function createUserPost(username, postname, post, selectedCategory){
  const snapshot=await get(child(ref(database),"posts/"+postname));
  if (snapshot.exists()) {
      return false;
  }
  else{
    await set(ref(database, 'posts/' + postname), {
      username: username,
      data: post,
      selectedCategory: selectedCategory
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