import Joi from 'joi';
import { config } from 'dotenv';
config();

const schema = Joi.object({
  PORT: Joi.string().required(),
});

const { value, error } = schema.validate(process.env);
if (error) {
  throw new Error(error.message);
}

const PORT: number = value.PORT;

export { PORT };
