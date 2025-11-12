
const app = firebase.initializeApp(firebaseConfig);
    const db = firebase.database();

    // Post a new comment
    function postComment() {
      const name = document.getElementById('name').value.trim() || "Anonymous";
      const text = document.getElementById('comment').value.trim();
      if (!text) return alert("Write a comment first!");

      const commentData = {
        name: name,
        text: text,
        time: new Date().toLocaleString()
      };

      db.ref("comments").push(commentData);
      document.getElementById('comment').value = '';
    }

    // Listen for new comments in real time
    const commentSection = document.getElementById("comments");
    db.ref("comments").on("child_added", snapshot => {
      const data = snapshot.val();
      const div = document.createElement("div");
      div.className = "comment";
      div.innerHTML = `<strong>${data.name}</strong> <em>(${data.time})</em><br>${data.text}`;
      commentSection.prepend(div);
    });
// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCvf3_PET1cRFHJHdYroQt3BdCgwIuhHiw",
    authDomain: "project-aachal.firebaseapp.com",
    projectId: "project-aachal",
    storageBucket: "project-aachal.firebasestorage.app",
    messagingSenderId: "119996673559",
    appId: "1:119996673559:web:295f009931c1584bea7652",
    measurementId: "G-HLKVEHP2WX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
    
