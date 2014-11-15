var Template = jBinary.Template = typeFactory(class extends Type.Base {
	constructor(config, getType, args) {
		super(...arguments);
		if (config.baseType) {
			this.baseType = getType(config.baseType);
		}
	}

	createProperty(binary) {
		var property = super(binary);
		if (this.getBaseType) {
			property.baseType = binary.getType(property.getBaseType(binary.contexts[0]));
		}
		return property;
	}

	read() {
		return this.baseRead();
	}

	baseRead() {
		return this.binary.read(this.baseType);
	}

	write(value) {
		return this.baseWrite(value);
	}

	baseWrite(value) {
		return this.binary.write(this.baseType, value);
	}
});
