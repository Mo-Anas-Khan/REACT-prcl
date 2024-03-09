//1. h1 tag create normal 

// const hdng=react.createElement("h1",{id:"hdng"},
//     "this is react pro"
// );
// const rt =ReactDOM(document.getElementById("root"));
// rt.render(hdng);

//   ------------------------   2ND nested tag create-----------------------  //

/* <div id="prnt">
<div id="chld">
<h1 id="txt1" >i m h1 tag</h1>
</div>
</div> */ 

// const prnt=react.createElement(
//     "div",{id:"prnt"},react.createElement(
//         "div",{id:"chld"},react.createElement(
//             "h1",{id:"txt"},"i m h1 tag"
//             )
//             )
//             );
//             const rt =ReactDOM(document.getElementById("root"));
//             rt.render(prnt);

// ----------- 3rd nested element with multiple sibling ------------------------//

/* <div id="prnt">
<div id="chld">
<h1 id="txt1">i m h1 tag</h1>
<h2 id="txt2">i m h2 tag</h2>
</div>
</div> */ 

// const prnt=react.createElement(
//     "div",{id:"prnt"},react.createElement(
//         "div",{id:"chld"},[
//             react.createElement(
//             "h1",{id:"txt"},"i m h1 tag"),
//             react.createElement("h2",{id:"txt"},"i m h2 tag")]
//             // array me sibling multiple
//             )
//             );
//             const rt =ReactDOM(document.getElementById("root"));
//             rt.render(prnt);

            // --------- 4th child mutiple create --------------------//

 /* <div id="prnt">
<div id="chld1">
<h1 id="txt1">i m h1 tag</h1>
<h2 id="txt2">i m h2 tag</h2>
</div>
<div id="chld2">
<h3 id="txt1">i m h3 tag</h3>
<h4 id="txt2">i m h4 tag</h4>
</div>
</div> */ 

const prnt=React.createElement(
    "div",{id:"prnt"},[React.createElement(
        "div",{id:"chld1"},[
            React.createElement(
            "h1",{id:"txt"},"i m h1 tag"),
            React.createElement("h2",{id:"txt"},"i m h2 tag")
        ]),
        React.createElement("div",{id:"chld2"},[
            React.createElement(
            "h3",{id:"txt"},"i m h3 tag"),
            React.createElement("h4",{id:"txt"},"i m h4 tag")
        ]),
            ]);
            const rt =ReactDOM.createRoot(document.getElementById("root")); //root id se Root
            rt.render(prnt);