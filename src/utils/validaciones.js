export const validarEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

export const validarContrasena = (password) => {
    return password.length >= 8;
};

export const validarCamposVacios = (...campos) => {
    return campos.every(campo => campo.trim() !== '');
};

export const validarContrasenasIguales = (password, confirmPassword) => {
    return password === confirmPassword;
};

export const validarCodigoOTP = (codigo, length = 6) => {
    const re = new RegExp(`^\\d{${length}}$`);
    return re.test(codigo);
};