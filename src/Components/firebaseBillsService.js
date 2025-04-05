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

async function getBillsFromBackend()
{
    const response = await getDocs(collection(db, "bills"));
    let list = [];
    response.forEach((doc) => {
      let obj = { ...doc.data() };
      obj.id = doc.id;
      list.push(obj);
    });
    return list;
}
async function getSingleBillsFromBackend(id) {
  const docSnap = await getDoc(doc(db, "bills", id));
  if (docSnap.exists()) {
    console.log(docSnap.data());
    return docSnap.data();
  } else {
    return null;
  }
}
async function addBillsToBackend(bills)
{
   const docRef = await addDoc(collection(db, "bills"), bills);
   console.log("Document written with ID: ", docRef.id);
    bills.id = docRef.id;
  return bills;
}
async function updateBackendBills(bills) 
{
    const studentRef = doc(db, "bills", bills.id);
    await updateDoc(studentRef, bills);
}
async function deleteBackendBills(id) 
{
    await deleteDoc(doc(db, "bills", id));
}

export {getBillsFromBackend, getSingleBillsFromBackend, addBillsToBackend, updateBackendBills, deleteBackendBills}