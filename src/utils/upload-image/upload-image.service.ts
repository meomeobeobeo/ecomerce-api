import { Injectable } from '@nestjs/common';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDownloadURL, getStorage, ref, updateMetadata, uploadBytes} from 'firebase/storage'
import {v4} from 'uuid'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr-gR5mI-P10iwSq03fRs3zFXNkuBX2bU",
  authDomain: "meoeco-d3c20.firebaseapp.com",
  projectId: "meoeco-d3c20",
  storageBucket: "meoeco-d3c20.appspot.com",
  messagingSenderId: "1007496383108",
  appId: "1:1007496383108:web:332430c611c01131b6d0d1",
  measurementId: "G-E5XSR4WDLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app)
@Injectable()
export class UploadImageService {
  async uploadImageToFirebase(fileImage: Express.Multer.File[]) {
    console.log(fileImage[0]);
    const fileData = fileImage[0];

    try {
      let tailFile = '';
      if (fileData.mimetype === 'image/jpeg') {
        tailFile = 'jpeg';
      } else if (fileData.mimetype === 'image/png') {
        tailFile = 'png';
      }

      let fileName = fileData.originalname.split('.')[0]
      

      const imageRef = ref(storage, `image/${fileName}-${v4()}.${tailFile}`);
      await uploadBytes(imageRef, fileData.buffer);

      // Update metadata to set content type
      await updateMetadata(imageRef, {
        contentType: fileData.mimetype,
        contentDisposition: 'inline', // Optional: Set to 'inline' if you want to display the file in the browser
      });

      // Generate download URL with appropriate headers
      const downloadURL = await getDownloadURL(imageRef);

      return {
        statusCode: 200,
        message: 'Upload image successfully.',
        metaData: {
          contentType: fileData.mimetype, // type to save data in firebase storage
          viewURL: downloadURL,
        },
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: error?.message,
        metaData: '',
      };
    }
  }
}