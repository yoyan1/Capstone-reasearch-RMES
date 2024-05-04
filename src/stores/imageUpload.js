import { storage } from '@/firebase/firebase'; // Import storage from Firebase Storage
import { ref as storageRef, uploadBytes } from 'firebase/storage';

export function upload(path, file){
    const storageRefObj = storageRef(storage, path + file.name); // Reference to the file location
    // Upload the file to Firebase Storage
    uploadBytes(storageRefObj, file)
}