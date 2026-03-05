import React, { ClipboardEventHandler, KeyboardEventHandler, useEffect, useState } from 'react'
import { Outlet, useOutletContext, Link, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useRef } from 'react'
import { Bytl } from '../components/Bytl'
import * as Icon from 'react-bootstrap-icons'
import Dropdown from 'react-dropdown'
import Cookies from 'js-cookie'

export default function Editor() {
    const [sxhg, setSxhg] = useState<string>("");
    const [time, setTime] = useState<string>("");

    const mainRef = useRef<HTMLDivElement | null>(null);
    const msb = useRef<HTMLDivElement | null>(null);
    const code = useRef<HTMLTextAreaElement | null>(null);
    const prevRequests = useRef<string[]>([""]);
    const prevFiles = useRef<string[]>([""]);

    const [curFileIndex, setCurFileIndex] = useState<number>(0);
    const [curFileNames, setCurFileNames] = useState<string[]>(["index"]);
    const [curFileData, setCurFileData] = useState<string[]>([""]);

    const isLogged = Cookies.get("logged");

    useEffect(() => {
        if (isLogged)
            fetch("http://localhost:2000/fileget", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    email: Cookies.get('logged')
                })
            }).then(res => res.json())
            .then(data => {
                if(data.success) {
                    console.log('loaded from database');
                    const files: string[][] = data.files;
                    code.current!.value = files[curFileIndex][1];
                    setCurFileNames(files.map(e => e[0]));
                    setCurFileData(files.map(e => e[1]));
                    lineEvent();
                    setTime(data.time);
                } else {
                    console.log('couldn\'t save');
                    code.current!.value = "";
                }
            }).catch(() => code.current!.value = "");
        
        const interval = setInterval(save, 60_000);
        return () => clearInterval(interval);
    }, []);

    const [line, setLine] = useState(1);

    const lineEvent = (): void => {
        const text = code.current!.value;
        setCurFileData(prev => prev.map((e, i) => i === curFileIndex ? text : e));
        setLine(text.split("\n").length);
        setSxhg(code.current!.value);
    }

    function getTime(): string {
        const now = new Date();
        const time = now.toLocaleString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        }).replace(" ", "");

        const date = now.toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "2-digit"
        });

        return `${time} ${date}`;
    }

    function save(): void {
        if(prevRequests.current.every((e, i) => e === curFileData[i]) &&
            prevFiles.current.every((e, i) => e === curFileNames[i])) return;
        prevRequests.current = curFileData;
        prevFiles.current = curFileNames;

        fetch("http://localhost:2000/filesend", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email: Cookies.get('logged'), 
                files: curFileNames.map((e, i) => [e, curFileData[i]]),
                time: getTime()
            })
        }).then(res => res.json())
        .then(data => {
            if(data.success) {
                console.log('saved', getTime());
                setTime(getTime());
            } else {
                console.log('couldn\'t save');
            }
        });
    }

    function setName(ev: React.ChangeEvent<HTMLInputElement>, index: number) {
        setCurFileNames(prev => prev.map((e, i) => i === index ? ev.target.value : e));
    } function checkForEnter(e: React.KeyboardEvent<HTMLInputElement>) {
        if(e.key === 'Enter') code.current!.focus();
    }

    function addFile() {
        const l = curFileNames.length;
        if(l < 8) {
            setCurFileNames([...curFileNames, 'untitled-' + curFileNames.filter(e => e.includes('untitled')).length]);
            setCurFileData([...curFileData, '']);
            setCurFileIndex(l);
            code.current!.value = "";
        }
    }

    function selectFile(index: number) {
        save();
        setCurFileData(prev => prev.map((e, i) => i === curFileIndex ? code.current!.value : e));
        setCurFileIndex(index);
    }

    // when switching files
    useEffect(() => {
        if(!!code.current && curFileData[curFileIndex] !== undefined) {
            const text = curFileData[curFileIndex];
            code.current.value = text;
            setLine(text.split("\n").length);
            code.current.focus();
        }
    }, [curFileIndex]);
    
    return (
        <>
            <div ref={msb} id="minisb">{Array.from({ length: line }).map((e, i) => <span>{i + 1}<br /></span>)}</div>
            <div ref={mainRef}>
                <div id="fileCont">
                    <div id="files">{ curFileNames.map((e, i) => 
                        <div onClick={() => selectFile(i)} style={{ width: (100 / curFileNames.length) + "%" }} className={"file " + (i === curFileIndex ? 'selected' : '')}>
                            <input type="text" onChange={(e) => setName(e, i)} onKeyDown={checkForEnter} value={e}/>
                        </div> 
                    ) }</div>
                    <Icon.PlusSquare id='addFile' onClick={addFile}/>
                </div>
                <textarea ref={code} onInput={lineEvent} spellCheck='false'></textarea>
            </div>
            <div id="rsb">
                <div id="sect">
                    <div id='play'><div id="innerplay"></div></div>
                    <div><span>{isLogged ? "Last Saved at" : "Cannot Save"}</span><span id='time'>{isLogged ? time : "No Account"}</span></div>
                    <button id='filesave' onClick={() => save()}>Save</button>
                </div>
                <br />
                <div id="out">

                </div>
            </div>
        </>
    )
}