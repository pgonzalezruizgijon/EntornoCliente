class Periferico {

    // Propiedades pseudo internas
    _id; // Código del periférico
    _description; // Descripción del periférico
    _price; // Precio del periférico

    constructor(id,description, price){
        this._id=id;
        this._description=description;
        this._price=price;
    }

    get id (){ return this._id;};
    set id(idNew) {this._id=idNew};

    get description() { return this._description;};
    set description(descriptionNew) { this._description=descripcionNew;};

    get price() { return this._price;};
    set price(priceNew) {this._price=priceNew;};

}