import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Student from '../models/Student';
import Report from '../models/Report';
import User from '../models/User';

const models = [Student, Report, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
Student.associate(connection.models);
Report.associate(connection.models);
