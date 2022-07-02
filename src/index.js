import ReactDOM from "react-dom/client";

function Welcome(props) {
    return <h1> selamat datang burhan {props.name}</h1> ;
}

const root = ReactDOM.createRoot(document.querySelector("main"));
root.render(
    < Welcome name="hawari" />
);