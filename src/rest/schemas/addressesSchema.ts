import { ParamSchema } from "express-validator";

const addressesSchema: Record<string, ParamSchema> = {
  addresses: {
    custom: {
      options: (value: any) => {
        return Array.isArray(value) && value.length >= 3;
      }
    },
    errorMessage: '"addresses" should be an array with at least 3 itens'
  },
  'addresses.*.city': {
    isString: true,
    escape: true,
    errorMessage: 'City is invalid.'
  },
  'addresses.*.state': {
    isString: true,
    escape: true,
    errorMessage: 'State is invalid'
  },
  'addresses.*.address1': {
    isString: true,
    escape: true,
    errorMessage: 'Address is invalid'
  },
  'addresses.*.address2': {
    isString: true,
    escape: true,
    errorMessage: 'Complementary address is invalid.'
  },
  'addresses.*.number': {
    isInt: true,
    toInt: true,
    isLength: {
      errorMessage: 'Number should be at least 1 digit long',
      options: { min: 1 }
    }
  },
  'addresses.*.postalCode': {
    // Make it's optional when undefined or null
    optional: { options: { nullable: true } },
    isPostalCode: {
      options: ['BR'],
      errorMessage: 'Postal code should be like XXXXX-XXX.'
    }
  }
}

export default addressesSchema
