const _ = require('lodash');

// WARNING: beware object mutable

/**
 * @params {Object} store
 * @params {String} name
 * @params {Object} scores
 * @params {Number} scores{key}
 */
exports.updateStudentScore = (store, { name, scores }) => {
    // code here
    store = { ...store,  }
    return store
};

/**
 * @params {Object} store
 * @params {String} name
 * @params {String} subject
 */
exports.removeStudentScoreBySubject = (store, { name, subject }) => {
    // code here
};

/**
 * @params {Object} store
 */
exports.transformData = store => {
    // code here

   const result = [];
   const obj = {};
   let subjet = null;

   store.forEach((x) => {
    subjet = 
    obj[x.subject] = null;
    x.students.forEach((y) => {
        if (x.subject !== subjet) {
            obj.name = y.name;
            obj[x.subject] = y.score;
            subjet = x.subject;
        }
    })
    result.push(obj);
   });


   return result;
};
