import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

async function getLastBillNumberFromBackend()
{
    const response = await getDocs(collection(db, "lastBillNumber"));
    let list = [];
    response.forEach((doc) => {
      let obj = { ...doc.data() };
      obj.id = doc.id;
      list.push(obj);
    });
    return list[0];
}
async function getSingleLastBillNumberFromBackend(id) {
  const docSnap = await getDoc(doc(db, "lastBillNumber", id));
  if (docSnap.exists()) {
    console.log(docSnap.data());
    return docSnap.data();
  } else {
    return null;
  }

}
// async function addLastBillNumberToBackend(bill)
// {
//    const docRef = await addDoc(collection(db, "lastBillNumber"), bill);
//    console.log("Document written with ID: ", docRef.id);
//     bill.id = docRef.id;
//   return bill;
// }
async function updateBackendLastBillNumber(b) 
{
    const studentRef = doc(db, "lastBillNumber", b.id);
    await updateDoc(studentRef, b);
}
// async function deleteBackendLastBillNumber(id) 
// {
//     await deleteDoc(doc(db, "lastBillNumber", id));
// }

export {getLastBillNumberFromBackend, getSingleLastBillNumberFromBackend,  updateBackendLastBillNumber}