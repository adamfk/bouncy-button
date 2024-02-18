"use strict";
class Section {
    static NORMAL = 'norm';

    /**
     * @param {string} id
     * @param {string|null} rawDescription
     */
    constructor(id, rawDescription) {
        /** @type {string} */
        this.id = id;

        /** @type {string} */
        this.pressType = null;

        /** @type {string} */
        this.releaseType = null;

        /** @type {string} */
        this.title;

        /** @type {string} */
        this.description;


        var split = rawDescription.split(':');
        if (split.length > 1) {
            this.title = split[0];
            this.description = split[1];
        } else {
            this.title = id;
            this.description = rawDescription;
        }

        //look for `press(<type>)` and `release(<type>)` in the description
        //look for `p(<type>)` and `r(<type>)` in the description
        var pressMatch = /p\w*\((.+?)\)/gi.exec(this.description);
        if (pressMatch != null) {
            this.pressType = pressMatch[1].trim();
        }
        var releaseMatch = /r\w*\((.+?)\)/gi.exec(this.description);
        if (releaseMatch != null) {
            this.releaseType = releaseMatch[1].trim();
        }
    }
}
