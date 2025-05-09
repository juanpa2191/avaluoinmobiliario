export const validatePassword = (password) => {
  // Mínimo 8 caracteres, al menos una letra mayúscula, una minúscula y un número
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test(password);
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  // Formato: +XX XXX XXX XXXX o números locales
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
};

export const sanitizeUserData = (userData) => {
  return {
    ...userData,
    password: undefined,
    createdAt: undefined,
    updatedAt: undefined,
  };
};
