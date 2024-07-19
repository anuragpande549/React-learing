import { useState, useCallback, useEffect, useRef} from "react";
import './index.css';

function MYpassword() {
    const [length, setLength] = useState(Math.floor((Math.random() * 10 )+ 1));
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState('');

    const passwordRef = useRef(null)

    const passwordGenrate = useCallback(() => {
        let pass = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let charAllow = '!@#$%^&*()';
        let numAllow = '1234567890';

        if (charAllowed) str += charAllow;
        if (numberAllowed) str += numAllow;

        for (let i = 0; i < length; i++) {
            let myRandom = Math.floor(Math.random() * str.length);
            pass += str.charAt(myRandom);
        }
        setPassword(pass);
    }, [length, numberAllowed, charAllowed]);

    const copyPassword = useCallback(() => {
        passwordRef.current?.select()
        window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(() => {
        passwordGenrate();
    }, [length, numberAllowed, charAllowed, passwordGenrate]);

    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-slate-800">
            <div id="container" className="w-[37rem] h-28 bg-purple-700 shadow-lg border border-red-600 shadow-purple-600 rounded-lg text-center">
                <input type="text" id="password" 
                value={password}
                 readOnly 
                 
                 ref={passwordRef} 
                 className="w-[25rem] text-center text-lg h-11 mt-5 rounded-lg text-black" />
                <button className="w-28 bg-slate-700 h-11 text-white text-lg" id="copy" onClick={copyPassword}>Copy</button>
                <div id="data" className="mt-3">
                    <input
                        type="range"
                        id="lengthSlider"
                        min="5"
                        max="20"
                        value={length}
                        className="text-red-800 align-middle mr-2"
                        onChange={(e) => { setLength(parseInt(e.target.value, 10)) }}
                    />
                    <output htmlFor="lengthSlider" id="lengthOutput" className="text-red-600 text-lg">Length({length})</output>
                    <input
                        type="checkbox"
                        checked={numberAllowed}
                        className="mx-5 text-red-800 align-middle mr-2"
                        onChange={() => { setNumberAllowed((prev) => !prev) }}
                    />
                    <label htmlFor="numberAllowed" className="text-red-600 text-lg" >Number</label>
                    <input
                        type="checkbox"
                        checked={charAllowed}
                        className="mx-5 text-red-800 align-middle mr-2"
                        onChange={() => { setCharAllowed((prev) => !prev) }}
                    />
                    <label htmlFor="charAllowed" className="text-red-600 text-lg">Character</label>
                </div>
            </div>
        </div>
    );
}

export default MYpassword;
