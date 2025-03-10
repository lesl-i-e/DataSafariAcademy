// auth.js
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signInWithPopup 
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { auth, provider } from "./firebase.js";

// Function to handle login
export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("User logged in:", userCredential.user);
            return userCredential; // Return for caller to handle redirect
        })
        .catch((error) => {
            console.error("Login error:", error.code, error.message);
            throw error; // Throw error for specific handling in LoginPage.html
        });
}

// Function to handle sign-up
export function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("User signed up:", userCredential.user);
            return userCredential; // Return for caller to handle Firestore storage and redirect
        })
        .catch((error) => {
            console.error("Sign-up error:", error.code, error.message);
            throw error; // Throw error for specific handling in SignUp.html
        });
}

// Function for Google login
export function googleLogin() {
    return signInWithPopup(auth, provider)
        .then((result) => {
            console.log("Google login successful:", result.user);
            window.location.href = "homepage.html"; // Direct redirect for Google login
            return result;
        })
        .catch((error) => {
            console.error("Google login error:", error.code, error.message);
            throw error; // Throw error for caller handling
        });
}
