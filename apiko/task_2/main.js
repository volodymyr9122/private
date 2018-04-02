const attributeException = [
  `role`
]

function appendText(el, text){
    const textNode = document.createTextNode(text)
     el.appendChild(textNode)
}

function appendArray (el, children) {
  children.forEach((child) =>{
    if (Array.isArray(child)) {
      appendArray(el, child)
    } else if (child instanceof window.Element) {
      el.appendChild(child)
    } else if (typeof child === `string`) {
      appendText(el, child)
    }
  })
}

function setStyles(el, styles) {
  if (!styles) {
    el.removeAttribute(`styles`)
    return
  }

  Object.keys(styles).forEach((styleName) => {
    if (styleName in el.style) {
      el.style[styleName] = styles[styleName]
    } else {
      console.log(`${styleName} is not a valid style for  <${el.tagName.toLowerCase()}>`)
    }
  })
}


function createElement(type, textOrPropsOrChild, ...childrenElements) {
  const el = document.createElement(type)

  if (Array.isArray(textOrPropsOrChild)) {
    appendArray(el, textOrPropsOrChild)
  } else if (textOrPropsOrChild instanceof window.Element) {
    el.appendChild(textOrPropsOrChild)
  } else if (typeof textOrPropsOrChild === `string`) {
    appendText(el, textOrPropsOrChild)
  } else if (typeof textOrPropsOrChild === `object`) {
    Object.keys(textOrPropsOrChild).forEach((propName) => {
      if (propName in el || attributeExceptions.includes(propName)) {
        const value = textOrPropsOrChild[propName]

        if (propName === `style`) {
          setStyles(el, value)
        } else if (value) {
          el[propName] = value
        }
      } else {
        console.log(`${propName} is not a valid property of a <${type}>`)
      }
    })
  }

  if (childrenElements) appendArray(el, childrenElements)

  return el
}

function render(el, parent) {
  return parent.appendChild(el)
}

const React = {
    createElement,
    render
}

const app = React.createElement('div', { style: { backgroundColor: 'red' } }, [
    React.createElement('span', undefined, 'Hello world'),
    React.createElement('br'),
    'This is just a text node',
    React.createElement('div', { textContent: 'Text content' }),
  ])

React.render(
  app,
  document.getElementById('root'),
)


const list =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite ice cream flavors'),
    React.createElement('ul', {},
      [
        React.createElement('li', { className: 'brown' }, 'Chocolate'),
        React.createElement('li', { className: 'white' }, 'Vanilla'),
        React.createElement('li', { className: 'yellow' }, 'Banana')
      ]
    )
  );

React.render(
  list,
  document.getElementById('global')
);



