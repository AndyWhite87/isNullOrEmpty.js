
window.isNullOrEmpty = function (thing) {

    // Check for undefined, null and NaN
    if (typeof thing === "undefined" || thing === null ||
        (typeof thing === "number" && isNaN(thing))) {
        return true;
    }

    // Numbers, booleans, functions and DOM nodes are never judged to be empty
    else if (typeof thing === "number" || typeof thing === "boolean" ||
             typeof thing === "function" || thing.nodeType === 1) {
        return false;
    }

    // Check for arrays with zero length
    else if (thing.constructor === Array && thing.length < 1) {
        return true;
    }

    // Check for empty strings after accounting for whitespace
    else if (typeof thing === "string") {
        if (thing.replace(/\s+/g, "") === "") {
            return true;
        }
        else {
            return false;
        }
    }

    // Check for objects with no properties, accounting for natives like window and XMLHttpRequest
    else if (Object.prototype.toString.call(thing).slice(8, -1) === "Object") {
        var props = 0;
        for (var prop in thing) {
            if (thing.hasOwnProperty(prop)) {
                props++;
            }
        }
        if (props < 1) {
            return true;
        }
    }

    // If we've got this far, the thing is not null or empty
    return false;
};
