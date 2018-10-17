//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
var arr = [];
for (var keys in object){
    arr.push(object[keys]);
}return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
var array = [];
for (var keys in object){
    if (typeof object[keys] === 'string'){
    array.push(object[keys]);
}
}return array.join(" ");
}


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return 'array';
    }else {
    return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
     return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
  var splitStr = string.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);     
   }
   
   return splitStr.join(' '); 
}
        

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {

object.name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
return "Welcome " + object.name + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    object.name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
    object.species = object.species.charAt(0).toUpperCase() + object.species.slice(1);
return object.name + " is a " + object.species;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
   if (object.noises){
        
   for (var i = 0; i < object.noises.length; i++){
            if(object.noises[i]){
                return object.noises.join(" ");
            }
        } 
   }
   return 'there are no noises';
}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
 var split = string.split(" ");
  for (var i = 0; i < split.length; i++){
      
   if (split[i] === word){
       return true;
   }
  }
    return false;
  
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
object.friends.push(name);
return object;
    
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
   
if (object.friends){
     for (var i = 0; i < object.friends.length; i++){
    if (object.friends[i] === name){
    return true;
}
}
}
return false;
}





//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
//make array called allFriendsnames
//loop over array of friends to see what names there are
//add each name to the allFriendsNames array
//loop over array of friends
//if name is same as array[i].name
      // access its friends list
        // compare friends list against allFriendsNames
  
    var allFriendsNames = [];
    var notFriends = [];
    var current = null;
    for(var i=0; i<array.length; i++){
        if(name === array[i].name){
            current = array[i];
        }else{
            allFriendsNames.push(array[i].name);
        }
    
    }

    for(var j=0; j<allFriendsNames.length; j++){
        if(current.friends.indexOf(allFriendsNames[j]) == -1){
            notFriends.push(allFriendsNames[j]);
        }
    }

    return notFriends;

}
 
      
      
      
      
      
     
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
   
    object[key] = value;
    
  for (var key in object){
        if (key === undefined){
            object[key] = value;
            return object;
        }    
        
    } 
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  for (var i = 0; i < array.length; i++){
       for (var key in object){
        if (array[i] === key){
              delete object[key];
            }
       
       
        } 
       
    } return object;

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
 var i, j;
    for (i = array.length - 1; i >= 0; i--) {
       var newArray = array[i];
        var found = false;
        for (j = i - 1; !found && j >= 0; j--) {
            if (newArray === array[j]) {
                if (i !== j) {
                    array.splice(i, 1);
                }
                found = true;
            }
        }
    }
    return array;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}