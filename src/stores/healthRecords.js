const q = query(collection(db, 'health'), where('uid', '==', userID));


            try {
              const querySnapshot = await getDocs(q);
              querySnapshot.forEach((doc) => {
                // Push document data to items array
                diagnosis.value.push({
                  id: doc.id,
                  ...doc.data()
                });
              });
            } catch (error) {
              console.error('Error getting documents: ', error);
            }