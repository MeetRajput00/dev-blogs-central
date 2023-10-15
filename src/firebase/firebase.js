import { initializeApp } from "firebase/app";
import { getDatabase,ref, set,get,child } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
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
  export async function getDashboardPosts(username="",category=""){
    const snapshot = await get(child(ref(database), "posts"));
    const result = [];
    if(category!==""){
      console.log(category);
      snapshot.forEach((data) => {
          if(data.val().category===category){
            result.push({
              postname: data.key,
              post: data.val().data,
              category: data.val().category,
              username: data.val().username,
              createdOn: data.val().createdOn
            });
          }
      });
    }
    else if(username!==""){
      snapshot.forEach((data) => {
          if(data.val().username===username){
            result.push({
              postname: data.key,
              post: data.val().data,
              category: data.val().category,
              username: data.val().username,
              createdOn: data.val().createdOn
            });
          }
      });
    }
    else{
      snapshot.forEach((data) => {       
          result.push({
            postname: data.key,
            post: data.val().data,
            category: data.val().category,
            username: data.val().username,
            createdOn: data.val().createdOn
        });
      });
    }
    result.sort((a, b) => b.createdOn-a.createdOn);
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
      category: selectedCategory,
      createdOn: new Date().toLocaleString()
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