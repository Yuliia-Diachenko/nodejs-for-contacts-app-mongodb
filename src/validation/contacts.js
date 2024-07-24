import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least 3 characters',
    'string.max': 'Username should have at most 20 characters',
    'any.required': 'Username is required',
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Phone number should be a string',
    'string.min': 'Phone number should have at least 3 characters',
    'string.max': 'Phone number should have at most 20 characters',
    'any.required': 'Phone number is required',
  }),
  email: Joi.string().email().min(3).max(20),
  isFavourite: Joi.boolean(),
  contactType:  Joi.string().valid('work', 'home', 'personal').required().
  messages({
    'string.base': 'Contact Type should be a string',
    'string.valid': 'Contact Type should have at one of work, home or personal',
    'any.required': 'Contact Type is required',
  })

});


export const updateContactSchema = Joi.object({
    name: Joi.string().min(3).max(20),
    phoneNumber: Joi.string().min(3).max(20),
    email: Joi.string().email(),
    isFavourite: Joi.boolean(),
    contactType:  Joi.string().valid('work', 'home', 'personal'),

    });

