import { atom, useRecoilState } from "recoil";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const count_atom = atom({
    key: "count",
    default: 0,
});

const centerState = atom({
    key: "centerState",
    default: "",
});

const App = () => {
    const [count, setCount] = useRecoilState(count_atom);
    const [center, setCenter] = useRecoilState(centerState);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React {center}</h1>
            <div className="card">
                <button
                    onClick={() => {
                        setCount(() => {
                            return count + 10;
                        });
                        setCenter("center");
                    }}
                    onKeyDown={() => {
                        setCount(() => {
                            return count + 10;
                        });
                        setCenter("center");
                    }}
                    type="button"
                >
                    count is222 {count}
                </button>

                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
};

export default App;
