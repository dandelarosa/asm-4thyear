var localStorageHelper = new LocalStorageHelper();

/**
 * Safe wrappers for localStorage methods.
 */
function LocalStorageHelper() {

  // Typeless values

  this.getItem = function(keyName) {
    try {
      var storedValue = window.localStorage.getItem(keyName);
      return storedValue;
    }
    catch(e) {
      return null;
    }
  }

  this.setItem = function(keyName, keyValue) {
    try {
      window.localStorage.setItem(keyName, keyValue);
    }
    catch(e) {
    }
  };

  // Boolean values

  this.getBoolean = function(keyName) {
    var storedValue = this.getItem(keyName);
    return storedValue === 'true';
  }

  this.setBoolean = this.setItem;

  // Object values

  this.setObject = function(keyName, keyValue) {
    var valueToStore = JSON.stringify(keyValue);
    return this.setItem(keyName, valueToStore);
  }

  this.getObject = function(keyName) {
    var storedValue = this.getItem(keyName);
    if (typeof storedValue !== "string") {
      return null;
    }
    return JSON.parse(storedValue);
  }
}
