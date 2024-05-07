// utils/validation.js
export const validateForm = (firstName, lastName, gender) => {
    let errors = {};

    if (!firstName) {
        errors.firstName = 'First Name is required';
    }

    if (!lastName) {
        errors.lastName = 'Last Name is required';
    }

    if (!gender) {
        errors.gender = 'Gender is required';
    }

    return errors;
};
