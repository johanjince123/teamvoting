import firebase from 'firebase';

 const firebaseConfig = {
  apiKey: "AIzaSyBht_rmqcz1nr69xopGFwdLNqIWr-ukSHY",
  authDomain: "teamvotingapp-600da.firebaseapp.com",
  projectId: "teamvotingapp-600da",
  storageBucket: "teamvotingapp-600da.appspot.com",
  messagingSenderId: "35560933904",
  appId: "1:35560933904:web:71f7cef08451e1c8d11895",
  measurementId: "G-1WP53FC5L0"
};


    
  

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();