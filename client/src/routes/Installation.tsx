import React from 'react'
import { Outlet, useOutletContext, Link, useLocation } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons'
import { useEffect, useRef } from 'react'

function pkg(pkg: string, name: string) {
    fetch(`http://localhost:2000/${pkg}`, { method: 'post' }).then(res => res.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        link.parentNode!.removeChild(link);
    });
}

function macpkg() {
    pkg('mac', 'Bytl_MacOS.pkg');
}

export default function Installation() {
    return (
        <div id='install'>
            <div className='card'>
                <h4>MacOS & Linux</h4>
                <br />
                <p className='instr'>Copy and run the following code into Terminal</p>
                <code className='cin'>curl -fsSL https://raw.githubusercontent.com/tshpigel/Bytl/main/iscripts/unix.sh | sh</code> <br />
                <p className='expla'>This will run the <code>unix.sh</code> file from the Bytl Github page which sets up the machine with all the necessary files and commands to run Bytl.</p>
                <h5>or</h5> <br />
                <p className='instr'>Install <a href="https://docs.deno.com/runtime/manual/getting_started/installation" target='_blank'>Deno</a> if it is not already installed and then manually download and setup disk-image file with</p>
                <div className="box">
                    <div className="subcard">
                        <img width={100} height={100} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.stickpng.com%2Fimages%2F580b57fcd9996e24bc43c516.png&f=1&nofb=1&ipt=fec05b7b394c251e4a1545cd6e0352b3dddb5c5face695c3d3f0d87464d7b0cd&ipo=images" alt="Apple Logo"/>
                        <button onClick={() => { macpkg() }} className='dnl' id='mac'>MacOS (pkg)</button>
                    </div>
                    <div className="subcard">
                        <img width={100} height={100} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsellbroke.com%2Fwp-content%2Fuploads%2F2019%2F10%2Flinux-logo.png&f=1&nofb=1&ipt=331467ed248e11fce3fb702e445d0e6fe3bc3623fead3004760cca1497be9c21&ipo=images" alt="Linux Logo" />
                        <button className='dnl' id='lnx'>Linux ()</button>
                    </div> 
                </div>
            </div>
            <div className='card'>
                <h4>Windows</h4>
                <br />
                <p className='instr'>Copy and run the following code into PowerShell</p>
                <code className='cin'>iex (iwr https://raw.githubusercontent.com/tshpigel/Bytl/main/iscripts/windows.ps1)</code> <br />
                <p className='expla'>This will run the <code>windows.ps1</code> file from the Bytl Github page which sets up the machine with all the necessary files and commands to run Bytl.</p>
                <h5>or</h5> <br />
                <p className='instr'>Install <a href="https://docs.deno.com/runtime/manual/getting_started/installation" target='_blank'>Deno</a> if it is not already installed and then manually download and setup executable file with</p>
                <div className="box">
                    <div className="subcard">
                        <img width={100} height={100} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodix.com%2Flogo%2F436007.png&f=1&nofb=1&ipt=5d0d288e9e941720d2627bde423f479d8daa82f4579cc09ddca4db000453caff&ipo=images" alt="Windows Logo"/>
                        <button className='dnl' id='wnd'>Windows (exe)</button>
                    </div>
                </div>
            </div>
        </div>
    )
}