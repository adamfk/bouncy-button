"use strict";
class ErrorLogger {
    /**
     * @type {string[]}
     */
    #messages = [];

    clear() {
        this.#messages = [];
    }

    /**
     * 
     * @param {string} message 
     */
    logError(message) {
        this.#messages.push(message);
        console.error(message);

        if (this.#messages.length > 100) {
            this.#messages.shift();
        }
    }

    hasErrors() {
        return this.#messages.length > 0;
    }
}
