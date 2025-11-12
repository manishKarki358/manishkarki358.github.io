// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
import { 
    getFirestore, collection, addDoc, onSnapshot, serverTimestamp 
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

// Your Firebase config
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
const db = getFirestore(app);

// DOM elements
const commentInput = document.getElementById("commentInput");
const commentBtn = document.getElementById("postComment");
const commentList = document.getElementById("comments");

// Add comment function
commentBtn.addEventListener("click", async () => {
    const text = commentInput.value.trim();
    if (!text) return;
    
    await addDoc(collection(db, "comments"), {
        text: text,
        time: serverTimestamp()
    });

    commentInput.value = ""; // Clear box
});

// Load comments live
onSnapshot(collection(db, "comments"), (snapshot) => {
    commentList.innerHTML = ""; // Clear

    snapshot.forEach(doc => {
        const c = doc.data();
        const li = document.createElement("li");
        li.textContent = c.text;
        commentList.appendChild(li);
    });
});
