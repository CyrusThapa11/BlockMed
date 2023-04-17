/* eslint-disable no-unused-vars */
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { actions } from "../../contexts/EthContext";
import app from "../../firebaseconfig";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const addToFireBase = async (email, role, GobalState) => {
  console.log(
    " adding to firebase GobalState.accounts[0]",
    GobalState.accounts[0]
  );
  const db = getFirestore(app);
  const docRef = await addDoc(collection(db, "Users"), {
    email: email,
    role: role,
    ethID: GobalState.accounts[0],
    password: "",
  });
  console.log("Document written with ID: ", docRef.id);
  //   dispatch({
  //     type: actions.login,
  //     data: { role: role, email: email, ethID: GobalState.accounts[0] },
  //   });
};

export const GoogleAuth = (role, GobalState) => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("credential", credential);
      console.log("token", token);
      console.log("user", user);
      addToFireBase(user.email, role, GobalState);
      let data = {
        email: user.email,
        role: role,
        ethID: GobalState.accounts[0],
      };
      console.log("data", data);
      return data;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
export const registerUser = async (UserState, GobalState, dispatch, role) => {
  return new Promise(async (res, rej) => {
    const db = getFirestore(app);
    const q = query(
      collection(db, "Users"),
      where("email", "==", UserState.email)
    );
    const querySnapshot = await getDocs(q);
    console.log("querySnapshot", querySnapshot);
    let valid = false;
    if (querySnapshot) {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log("doc.data()", doc.data());
        if (
          doc.data()?.password === UserState.password ||
          doc.data()?.email === UserState.email
        ) {
          console.log(" CREDENTIALS MATCHED !");
          valid = true;
          console.log("found user !");
          //   return { message: "USER ALREADY REGISTERED ", error: true };
          return rej("USER ALREADY REGISTERED");
        }
        console.log(doc.id, " => ", doc.data());
      });
    }
    if (valid === true) return;
    console.log("adding user");
    const docRef = await addDoc(collection(db, "Users"), {
      email: UserState.email,
      role: role,
      ethID: GobalState.accounts[0],
      password: UserState.password,
    });
    console.log("docRef", docRef);
    let data = {
      email: UserState.email,
      role: role,
      ethID: GobalState.accounts[0],
    };
    dispatch({
      type: actions.login,
      data: {
        ...data,
      },
    });
    console.log("dispatched !", data);
    return res("SUCCESS");
  });
};

export const LoginUser = async (UserState) => {
  return new Promise(async (res, rej) => {
    const db = getFirestore(app);
    const q = query(
      collection(db, "Users"),
      where("email", "==", UserState.email)
    );
    let data = null;
    const querySnapshot = await getDocs(q);
    console.log("querySnapshot", querySnapshot);
    if (querySnapshot) {
      let valid = false;
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log("doc.data()", doc.data());
        if (doc.data()?.password === UserState.password) {
          console.log(" CREDENTIALS MATCHED !");
          valid = true;
          data = doc.data();
          delete data["password"];
        }
        console.log(doc.id, " => ", doc.data());
      });
      if (valid === false) {
        return rej("ERROR MILGYA BROOO");
      }
    } else {
      // console.log(" not found !");
      return rej("ERROR MILGYA BROOO");
      //   return { error: true, message: "NO USER FOUND " };
    }
    return res({ msg: "SUCCESS", data });
  });
};
