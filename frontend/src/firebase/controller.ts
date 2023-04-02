import { AddAffiliateType } from "@/types/affiliate";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {app} from "./firebase";

export const firestore = getFirestore(app);

//Affiliate Collection
export const affiliateCollection = collection(firestore,"affiliate");

// ADD A NEW Affiliate from 

export const addAffiliate = async (affiliateData:AddAffiliateType) => {
    const newAff = await addDoc(affiliateCollection,{...affiliateData});
    console.log(`New Mint with Affiliate has happend, with TokenId: ${newAff.path}`);
}