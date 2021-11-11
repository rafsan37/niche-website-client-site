import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebaseconfig";

const initializeAuthwentication = () =>{
    initializeApp(firebaseConfig);
}
export default initializeAuthwentication;