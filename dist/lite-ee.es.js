const mixin = (superclass) => class extends superclass {
    constructor(...args){
        super(...args);
        this._handlers = {};
    }

    on(type, handler){
        if(this._handlers[type] == null) this._handlers[type] = []; 
        this._handlers[type].push(handler);
        return this;
    }

    once(type, handler){
		const onceHandler = (...args) => {
			handler(...args);
            this.off(type, onceHandler);
        };
        return this.on(type, onceHandler);
    }

    off(type, handler = null){
        if(handler == null) this._handlers[type] = [];
        else {
            const index = this._handlers[type].indexOf(handler);
            if(index != -1) this._handlers[type].splice(index, 1);
        }
        return this;
    }

    emit(type, ...args) {
        if(!this._handlers[type] || this._handlers[type].length === 0) return;
        this._handlers[type].forEach(handler=>handler(...args));
    }
};

class _Hollow {}
class LiteEventEmitter extends mixin(_Hollow) {}

export default LiteEventEmitter;
