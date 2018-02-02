///1. Receive a set of expressions ////

function $(selector){
    return document.querySelector(selector);
}

function $all(selector){
    return document.querySelectorAll(selector);
}

function createHtmlElement(tagName, inHtml, clName) {
    const element = document.createElement(tagName);
    inHtml && (element.innerHTML = inHtml);
    clName && (element.className = clName);
    return element;
}

const removeElements = (elements) => ({
    removeChildrenFromNode() {
        if (elements.myParenNode === undefined || elements.myParenNode === null) {
            return;
        }
        while (elements.myParenNode.firstChild) {
            elements.myParenNode.removeChild(elements.myParenNode.firstChild);
        }
    }
})

const promisedData = (elements) => ({
    fetchData() {
      event.preventDefault();
        const promise = fetch(elements.myUrl, elements.fetchOptions)
        return promise.then(result =>
                result.json())
            .catch(error =>
                console.log(error));
    }
})

const DomElementsBuilder = () => ({
    createDomEl(data) {
        let id = createHtmlElement('p', data.id, 'data_id')
        $(".receivedData").appendChild(id)
        data.expressions.forEach(dat => {
          let expressions = createHtmlElement('p', dat, 'inputs')
           $(".receivedData").appendChild(expressions)
        })
    }
})


const pageloadedData = (myUrl) => {
    const elements = Object.freeze({
        myParenNode: $(".receivedData"),
        myUrl,
        fetchOptions: {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
            mode: 'cors'
        },
    })
    return Object.assign({},
        removeElements(elements),
        promisedData(elements),
        DomElementsBuilder()
    )
}

const pageloadedDataInstance = Object.create(pageloadedData('https://www.eliftech.com/school-task'));

window.onload = () =>
    pageloadedDataInstance.fetchData()
    .then(pageloadedDataInstance.createDomEl)
    .catch(error => console.log(error))

const getRenderExpressions = () => {
   pageloadedDataInstance.removeChildrenFromNode()
   pageloadedDataInstance.fetchData()
    .then(pageloadedDataInstance.createDomEl)
    .catch(error => console.log(error))
}

$('#receive').addEventListener("click", getRenderExpressions)

//*******************************************//



///2. Perform calculation of results for received set of expressions

const strToArray = () => ({
    setTransformation(arg) {
       return arg.innerHTML.split(' ')
    }
})

const valueSetter = () => ({
    setValue(element, valReceive) {
      element.value= ' '
	  element.value=valReceive
      return element
    }
})

const outputResults = () => ({

    evalRPN(arrArguments) {
        let returnValue = 0;
        let operators = "+-*/";

    let stack = [];
        for (let i=0; i<arrArguments.length; i++) {
                if (operators.indexOf(arrArguments[i]) == -1) {
            stack.push(arrArguments[i]);
        } else {
            let a = parseInt(stack.pop());
            let b = parseInt(stack.pop());
            if (arrArguments[i]) {

                if (arrArguments[i] === "+"){
                stack.push(b - a);
                }

                if (arrArguments[i] === "-"){
                stack.push(a + b + 8);
                }

                if (arrArguments[i] === "*"){
                  if(a === 0 || b === 0){
                      stack.push(42);
                  }else{
                      stack.push(b % a);
                  }
                }

                if (arrArguments[i] === "/"){
                  if(a === 0 || b === 0){
                      stack.push(42);
                  }else{
                      stack.push(Math.floor((b / a)));
                  }
                }
            }
        }
    }
    returnValue = parseInt(stack.pop());
    return returnValue;
    }
})


const dataCalculation = () => {
    return Object.assign({},
        strToArray(),
        valueSetter(),
        outputResults()
    )
}

const dataCalculationInstance = Object.create(dataCalculation());


const renderCalculations = () => {
   dataCalculationInstance.setValue($('#results'),
    [...$all('.inputs')].map(inp => {
     return dataCalculationInstance.evalRPN(dataCalculationInstance.setTransformation(inp))
   })
  ),
  dataCalculationInstance.setValue($('#id'), $('.data_id').innerHTML)
}

$('#calculate').addEventListener('click', renderCalculations)

//*******************************************//

///3.Send results to specified endpoint


const sendPromisedData = (elements) => ({
    sendResults() {
      event.preventDefault();
        const promise = fetch(elements.myUrl, elements.fetchOptions)
        return promise.then(result => result)
            .catch(error =>
                console.log(error));
    }
})



const sendData = (myUrl) => {
    const elements = Object.freeze({
        myUrl,
        fetchOptions: {
          body: JSON.stringify({
            id: $('#id').value,
            results: [$('#results').value]
        }),
            method: 'POST',
            mode:'no-cors',
            header: {
                'Access-Control-Allow-Origin':  'https://u0byf5fk31.execute-api.eu-west-1.amazonaws.com/etschool/task',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
               'Accept': 'application/json',
               'Content-Type': 'application/json'
            }
        },
    })
    return Object.assign({},
        sendPromisedData(elements)
    )
}

const sendDataInstance = Object.create(sendData('https://u0byf5fk31.execute-api.eu-west-1.amazonaws.com/etschool/task'));


const sendCalculatedData = () => {
  sendDataInstance.sendResults()
  .then((data) =>  console.log(data))
  .catch((err)=>console.log(err))
}

 $('form').addEventListener("submit", sendCalculatedData )

