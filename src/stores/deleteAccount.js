import { getDocs, query, collection, where, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { isUser } from "./session";

export async function deleteAccount(user, UID){
    // Function to delete a record from Firestore
    try{
        await user.delete()
        const healthQuerySnapshot = await getDocs(query(collection(db, 'pets'), where('uid', '==', UID)));
        // Delete each document in the query snapshot
        if(healthQuerySnapshot){
            healthQuerySnapshot.forEach(async doc => {
                await deleteDoc(doc.ref);
            });
        } else{
            console.log("No pet data");
        }

        await deleteDoc(doc(db, 'users', UID))
        console.log("deleted Successfully")
    } catch(error){
        console.error("cant delete account:",error);
        alert("session expired! Please Log in again")
    }

}