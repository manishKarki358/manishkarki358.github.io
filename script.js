import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { 
    getDatabase, ref, push, onValue 
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";

// YOUR Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCvf3_PET1cRFHJHdYroQt3BdCgwIuhHiw",
    authDomain: "project-aachal.firebaseapp.com",
    projectId: "project-aachal",
    storageBucket: "project-aachal.firebasestorage.app",
    messagingSenderId: "119996673559",
    appId: "1:119996673559:web:295f009931c1584bea7652",
    measurementId: "G-HLKVEHP2WX",
    databaseURL: "https://project-aachal-default-rtdb.firebaseio.com/"  // <-- REQUIRED
};

// Initialize
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const commentInput = document.getElementById("commentInput");
const postBtn = document.getElementById("postComment");
const commentList = document.getElementById("comments");

// WRITE a comment
postBtn.addEventListener("click", () => {
    const text = commentInput.value.trim();
    if (!text) return;

    push(ref(db, "comments"), {
        text: text,
        time: Date.now()
    });

    commentInput.value = "";
});

// READ comments (live & after refresh)
onValue(ref(db, "comments"), (snapshot) => {
    commentList.innerHTML = ""; // Clear current list

    const data = snapshot.val();
    if (!data) return;

    // Loop through entries
    Object.values(data).forEach(comment => {
        const li = document.createElement("li");
        li.textContent = comment.text;
        commentList.appendChild(li);
    });
});
