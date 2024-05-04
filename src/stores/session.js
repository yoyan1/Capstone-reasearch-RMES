import { getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import {ref, onMounted} from 'vue'
import { getDownloadURL, ref as storageRef } from 'firebase/storage';
import { storage } from '@/firebase/firebase';
import { getDoc, doc} from 'firebase/firestore'
import {db} from '../firebase/firebase'
import { deleteAccount } from './deleteAccount';

const isUser = ref(false)

const isLoading = ref(false)
let Auth;
const isNew = ref(false)
const UID = ref()
const userName = ref()
const profile = ref()
const imageUrl = ref()
const userDat = ref({})
const email = ref()
let deleteUser;

function getUser(){

    Auth = getAuth();
    onAuthStateChanged(Auth, async (user) => {
        isLoading.value = !isLoading.value
        if(user){
            isUser.value = true;
            UID.value = user.uid
            profile.value = user.photoURL
            userName.value = user.displayName
            email.value = user.email
            deleteUser =async ()=>{
                await deleteAccount(user, UID.value)
                signOut(Auth)
                isUser.value = false
            }
            try {
                try{

                    const imagePath = 'profiles/'
                    const imageRef = storageRef(storage, imagePath + profile.value);
                    const url = await getDownloadURL(imageRef);
                    imageUrl.value = url;
    
                } catch(error){
                    console.log("no image found in database:");
                }
                //fetching user data
                const userRef = doc(db, 'users', UID.value)
                const docSnapshotUser = await getDoc(userRef);

                if(docSnapshotUser.exists()){
                    const userData =  docSnapshotUser.data();
                    const userID = docSnapshotUser.id;
                    
                    userDat.value = {...userData, id: userID}
                    isLoading.value = !isLoading.value
                    isNew.value = false
                    
                } else{
                    isNew.value = true
                    isLoading.value = !isLoading.value
                }
            } catch (error) {
                console.log("no image found in database:");
            }
        } else{
            isUser.value = false;
            isLoading.value = !isLoading.value
        }
})
}


export {getUser, userName, imageUrl, userDat, isUser, email, profile, isLoading, Auth, UID,deleteUser, isNew} 