import { ref, onMounted } from 'vue';
import { getDownloadURL, ref as storageRef } from 'firebase/storage';
import { storage } from '@/firebase/firebase';

export default function useFirebaseStorage(imagePath, image) {
  const imageUrl = ref(null);

  onMounted(async () => {
    try {
      const imageRef = storageRef(storage, imagePath + image);
      const url = await getDownloadURL(imageRef);
      imageUrl.value = url;
    } catch (error) {
      console.log("no image found in database:");
    }
  });

  return {
    imageUrl
  };
}