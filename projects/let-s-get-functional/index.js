// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lowdown-taylorshephard');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 * 
 * 4. To test your work, run the following command in your terminal:
 * 
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array){
  return _.reduce(array, function(count, person){
      if (person.gender === 'male'){
          count++;
      }
      return count;
  }, 0);
};





var femaleCount = function(array){
 
return _.reduce(array, function(count, person){
       if (person.gender === 'female'){
           count++;
       } 
       return count;
    }, 0);
};





var oldestCustomer = function(array) {
   var oldestPerson = _.reduce(array, function(oldest, person){
     if (oldest.age > person.age){
         return oldest;
     } 
     return person;
  });
  return oldestPerson.name;
};





var youngestCustomer = function(array){
     
    var youngestCustomer = _.reduce(array, function(youngest, person){
       if (person.age < youngest.age){
           return person;
       } 
       return youngest;
    });
    return youngestCustomer.name;
    
};





var averageBalance = function(array){
  return _.reduce(array, function(total, person){
        var noSymbols = person.balance.replace('$', '');
        noSymbols = noSymbols.replace(',', '');
        var number = Number(noSymbols);
        return total + number;
    }, 0) / array.length;
};


        
        


var firstLetterCount = function(array, letter){
    
    return  _.reduce(array, function(count, person){
        if (person.name[0].toUpperCase() === letter.toUpperCase()){
            count++;
        }
        return count;
    }, 0);
};





var friendFirstLetterCount = function(array, customer, letter){
     var customerName = _.filter(array, function(value, index, collection) {
      if (value.name === customer) {
          return true;
      }
  });
  var findingFriends = _.filter(customerName[0].friends, function(value, index, collection) {
  if (value.name[0].toLowerCase() === letter.toLowerCase()) {
      return true;
  }
  });
  return findingFriends.length;
 
};





var friendsCount = function(array, name){
     var findFriends = _.filter(array, function(value, index, collection) {
      var friendsList = _.pluck(value.friends, 'name'); 
      return _.contains(friendsList, name);
    });
    return _.pluck(findFriends, 'name'); 
    
    
   
};






var topThreeTags = function(array){
     var tagValuesArray = _.map(array, function(value, index, collection){
         return value.tags;
     }); 
     tagValuesArray = tagValuesArray.reduce(function(previousResult, value, index){
         return previousResult.concat(value);
     }, []);
  var counter = [];
     var highestTagArray = [];
    
     _.each(tagValuesArray, function(tag, index, collection){
         var tagCount = _.filter(counter, function(value, index, collection){
             return value.tag === tag;
         });
        if (tagCount.length > 0){
             tagCount[0].count++;
         }else {
             counter.push({tag: tag, count: 1});
       
         }
     });

    function getHighestTag(counter){
         var highestIndex = 0;
         var highest = _.reduce(counter, function(previousResult, value, index){
             if (value.count >previousResult.count){
                 highestIndex = index;
                 return value;
             }else {
                 return previousResult;
             }
         });
         counter.splice(highestIndex, 1);
         return highest;
     }
     var highest = getHighestTag(counter);
     highestTagArray.push(highest.tag);
     
     highest = getHighestTag(counter);
     highestTagArray.push(highest.tag);
     
     highest = getHighestTag(counter);
     highestTagArray.push(highest.tag);
     
     return highestTagArray;
}






var genderCount = function(array){
      var transCount = function(array){
          return array.reduce(function(preVal, curr){
             if (curr.gender === 'transgender'){
                 return preVal + 1;
             } else {
                 return preVal;
             }
          }, 0);
      };
      
      return {female: femaleCount(array), male: maleCount(array), transgender: transCount(array)};
};



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
