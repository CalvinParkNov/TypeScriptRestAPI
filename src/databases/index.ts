import fs from 'fs';
import Sequelize from 'sequelize';

const env = process.env.NODE_ENV || 'development';

const config = JSON.parse(fs.readFileSync('./src/config/config.json', 'utf8'));
