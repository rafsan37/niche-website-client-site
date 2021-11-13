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
    const [admin, setAdmin] = useState(false);
    

    
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
    //get admin
    useEffect(() => {
        fetch(`https://dry-basin-21190.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])
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
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
               setUserName();
               // save user to the database
               saveUser(email, name, 'POST');
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
   // save new user
   const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('https://dry-basin-21190.herokuapp.com/users', {
        method: method,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then()
}
    return{
        isLoading,
        user,
        admin,
        singInUsingGoogle,
        logOut,
        error,
        getUserPassword,
        getUserEmail,
        handleSubmitForm,
        signInWithEmail,
        getUserName
        ,setUser,
        setError,
        saveUser
        
        
    }
}
export default useFirebase;