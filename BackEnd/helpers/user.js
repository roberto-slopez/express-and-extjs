/**
 * @author esanchez on 31/03/2017.
 * @class {User}
 */
module.exports = class User {
    constructor(uuid) {
        this.uuid = uuid;
    }
    getUuid() {
        return this.uuid;
    }
    getCurrentUser() {
        let _this = this;
        return {
            'uuid': _this.getUuid(),
            'name': 'Juan Lopez'
        };
        // const _this = this;
        // return new Promise((resolve, reject) => {
        // });
    }
}
