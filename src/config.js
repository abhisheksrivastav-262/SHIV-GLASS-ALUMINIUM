// Store dialing numbers with country code and digits only.
export const WHATSAPP_PHONE = '917507612202';
export const CALL_PHONE = '919172733737';
export const ADDRESS = 'Shop NU 03, Grand West Society, Lale Chashma Wale Side Shop, 19, Dange Chowk Road, Near Thergaon Phata, Pimpri-Chinchwad, Maharashtra 411033, India';
export const whatsappUrl = (message) => WHATSAPP_PHONE ? `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}` : null;
