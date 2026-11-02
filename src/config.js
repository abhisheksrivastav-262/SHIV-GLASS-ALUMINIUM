// Add the shop's real number in international format, digits only (for example 919876543210).
export const BUSINESS_PHONE = '';
export const ADDRESS = 'Shop NU 03, Grand West Society, Lale Chashma Wale Side Shop, 19, Dange Chowk Road, Near Thergaon Phata, Pimpri-Chinchwad, Maharashtra 411033, India';
export const whatsappUrl = (message) => BUSINESS_PHONE ? `https://wa.me/${BUSINESS_PHONE}?text=${encodeURIComponent(message)}` : null;
