import 'dotenv/config';
import jwt from 'jsonwebtoken';
//dotenv.config();

export const requireAuth = (req, res, next) => {
  const header = req.header('Authorization'); //Bearer Token
  console.log('header = ', header);
  const token = header?.split(' ')[0];

  if (!token) {
    return res.status(401).send({ message: 'No Token' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id, email: decoded.email };
    next();
  } catch (err) {
    return res.status(401).send({ message: 'Invalid Token' });
  }
};
