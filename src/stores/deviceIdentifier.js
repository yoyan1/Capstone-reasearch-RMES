import { db } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

async function getDeviceIdentifier() {
    // Implement logic to get the device identifier (e.g., using a device identification library or platform-specific method)
}

async function getStoredDeviceIdentifier(userId) {
    // Retrieve the stored device identifier for the user from Firestore
    try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const userData = docSnap.data();
            return userData.deviceIdentifier;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error getting document:", error);
        return null;
    }
}

export {getDeviceIdentifier, getStoredDeviceIdentifier}