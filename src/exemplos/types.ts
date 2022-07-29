type input = number | string;

function somarValores(input1:input, input2:input){

    if (typeof input1 === 'string' || input2 === 'string'){

        return input1.toString() + input2.toString();

    }else{
        return Number(input1) + Number(input2);   
    }
}