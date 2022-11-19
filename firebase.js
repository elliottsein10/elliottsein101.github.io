  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs, onSnapshot } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDVip1EGmc-jp0S5-H3GkYxttnXzPvgYGY",
    authDomain: "fir-javascript-crud-3e398.firebaseapp.com",
    projectId: "fir-javascript-crud-3e398",
    storageBucket: "fir-javascript-crud-3e398.appspot.com",
    messagingSenderId: "10830739018",
    appId: "1:10830739018:web:061d84b1f6e49a299498b3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore()

  export const saveTask = (title, description) => {
    addDoc(collection(db, 'tasks'), {title, description})
  }

  export const getTasks = () => getDocs(collection(db, 'tasks'))

  export const onGetTasks = () => onSnapshot(collection(db, 'tasks'), callback)