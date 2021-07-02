'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

/**
 * fs : 파일을 입출력해주는 라이브러리
 * readdirSync('파일경로') : 디렉터리 기반 상대경로로 읽어냄.
 */

/**
 * path : 파일과 디렉토리 경로를 정확히 맞춰줌
 * path.basename() : 파일이름을 출력한다.
 * path.join(): 플랫폼별(windows냐 mac이냐) 구분자를 사용해서 경로를 정규화해서 리턴
 * 
 */

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    // (file.indexOf('.') !== 0)  '.'을 발견하는 인덱스가 0 이 아닐 경우
    // (file !== basename) basename으로 파일 이름이 축출되고
    // (file.slice(-3) === '.js') 확장명이 'js' 인 경우
    //모두 만족하는 요소들만 필터링되도록
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model; 
    // db가 빈 객체였는데, 여기에 요소를 채우기 시작.
  });

// 모델들을 모두 db와 연결.
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;




module.exports = db;
