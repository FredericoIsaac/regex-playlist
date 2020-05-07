// validation script here
// ir buscar todos os elementos que vamos querer validar
const inputs = document.querySelectorAll("input");


const patterns = {
    telephone: /^\d{11}$/,           //Telephone must be a valid UK telephone number (11 digits)
    username: /^[a-z\d]{5,12}$/i,    //Username must be  and contain 5 - 12 characters
    password: /^[\w@-]{8,20}$/i,     //Password must alphanumeric (@, _ and - are also allowed) and be 8 - 20 characters
    slug: /^[a-z\d-]{8,20}$/,        //Slug must contain only lowercase letters, numbers and hyphens and be 8 - 20 characters
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/ // a ultima parte é opicional
};

//validate function
function validate(field,regex){
    if(regex.test(field.value)){
        field.className = "valid";
    }else{
        field.className = "invalid";
    }
};

//ir buscar o item
inputs.forEach((input) =>{
    input.addEventListener("keyup", (e) =>{
        //console.log(e.target.attribute.name.value);
        validate(e.target, patterns[e.target.attributes.name.value]);
    }
)});
