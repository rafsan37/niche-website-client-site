import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthwentication from "../Pages/Login/Firebase/Firebase.init";

initializeAuthwentication();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(" ");
    const [email, SetEmail] = useState(" ");
    const [password, SetPassword] = useState(" ");
    const [name, SetName] = useState(" ");
    

    
    const auth = getAuth();
// google login
    const singInUsingGoogle = () =>{
       
        const googleProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleProvider)
         
    }

    const logOut = () => {
       
        signOut(auth)
        .then(() => {
            setUser({})
        })
       
    }

    //observe use state change

    useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed
    }, []);
 // get user name
    const getUserName = (event) => {
        SetName(event.target.value);
    };
 // get user email
    const getUserEmail = (event) => {
        SetEmail(event.target.value);
    };
  // get user password  
    const getUserPassword = (event) => {
        SetPassword(event.target.value);
    };
// get user name funtion
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => { })
            .catch((error) => {
                setError(error.message);
            });
    }
    // sign up funtion
const handleSubmitForm = event => {
        event.preventDefault();

        console.log(email, password);
        if (password.length < 6) {
            setError("password should have 6 character")
            return;
        } if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("password must contain 2 upper case")
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
               setUserName();
               setError('')
            })
            .catch((err) => {
                setError(err.message)
            })
    };
// login funtion
    const signInWithEmail = () => {
        
      return  signInWithEmailAndPassword(auth, email, password)
            
    }
    return{
        isLoading,
        user,
        singInUsingGoogle,
        logOut,
        error,
        getUserPassword,
        getUserEmail,
        handleSubmitForm,
        signInWithEmail,
        getUserName
        ,setUser,
        setError
        
        
    }
}
export default useFirebase;