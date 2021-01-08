import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Student from '../models/Student';
import Report from '../models/Report';

const models = [Student, Report];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
