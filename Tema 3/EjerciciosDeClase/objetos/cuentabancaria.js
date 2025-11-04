class CuentaBancaria{
  _titular;
  _iban;
  _saldo;

  constructor(titular,iban,saldo){
    this._titular=titular;
    this._iban=iban;
    this._saldo=saldo;
  }

  get titular(){
    return this._titular.toUpperCase();
  }

  get saldo(){
    return this._saldo;
  }

  ingresar(cantidad){
    if(cantidad<0) throw new Error("Cantidad ingresada debe ser un valor positivo");
    this._saldo+=cantidad;
  }

  extraer(cantidad){
    if(cantidad<0) throw new Error("Cantidad extraida debe ser un valor positivo");
    if(cantidad>this._saldo) throw new Error("No se puede extraer más dinero que el saldo de la cuenta");
    this._saldo-=cantidad;
  }

  transferirA(cuenta,cantidad){
    if(cantidad>this._saldo) throw new Error("No se puede transferir más dinero del saldo de la cuenta");
    this.extraer(cantidad);
    cuenta.ingresar(cantidad);
  }

}