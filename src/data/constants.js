export const WA_NUMBER = "6281213694363";
export const WA = `https://wa.me/${WA_NUMBER}`;
export const TEL = "tel:+6281213694363";
export const PHONE = "0812-1369-4363";
export const ADDRESS = "Mini III No. 51, Bambu Apus, Jakarta Timur";

export const waLink = (text) => (text ? `${WA}?text=${encodeURIComponent(text)}` : WA);
