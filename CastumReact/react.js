//custom React ;


function customRander(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    for (const prop in reactElement.props) {

        if(prop === 'Children') continue;
        const hello = domElement.setAttribute(prop, reactElement.props[prop]);

        console.log(hello);
    
    }


    container.appendChild(domElement)

     
}

const reactElement = { // object
    type : 'a',
    props: {
        href : 'https://google.com',
        target: '_blank'

    },
    Children : 'click me to visit google'
}

const mainContainer = document.getElementById("root");

customRander(reactElement , mainContainer )