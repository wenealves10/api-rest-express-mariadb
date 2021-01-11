import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Student from '../models/Student';
import Report from '../models/Report';
import User from '../models/User';
import Photo from '../models/Photo';

const models = [Student, Report, User, Photo];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
Student.associate(connection.models);
Report.associate(connection.models);
Photo.associate(connection.models);
