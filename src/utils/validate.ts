function isEmail( str : string) {
  const regex = new RegExp(
    /^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm
  );
  return regex.test(str);
}

function isPassword( input : string) {
  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).{8,}$/;
  return regex.test(input);
}

function isName( str: string ) {
  const regex = new RegExp(
    /^[a-zA-ZàạáảăâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
  );
  return regex.test(str);
}

function isPhone( input: string ) {
  const regex = new RegExp(/^[0-9\-+]{9,15}$/);
  return regex.test(input);
}

export { isEmail, isName, isPhone, isPassword };
