let expression = "";

const buildExpression = (char) => {
    expression += char;
    document.getElementById("expression").innerHTML = expression;
};

const evaluateExpression = () => {
    expression = eval(expression);
    document.getElementById("expression").innerHTML = expression;

    console.log(expression);
};

const reset = () => {
    expression = "";
    document.getElementById("expression").innerHTML = expression;
};
