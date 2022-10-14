import { HttpException } from '@exceptions/HttpException';
import { NextFunction, Request, Response } from 'express';

const errorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const status: number = error.status || 500;
    const message: string = error.message || 'Default server error message';

    console.log(
      `${req.method} ${req.path} >> StatusCode: ${status}, Message: ${message}`,
    );
    res.status(status).json({ message });
  } catch (error) {
    next(error);
  }
};
export default errorMiddleware;
