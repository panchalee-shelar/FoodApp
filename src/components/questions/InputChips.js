import React from 'react';
import { useState } from 'react';
const Questions = () => {
    const [inputText, setInputText] = useState('');
    const [chips, setChips] = useState([]);

    const handleChips = (e)=>{
        // /logic to add chips
        if(e.key === 'Enter' && inputText.trim() !== ""){
            setChips((prev)=>[...prev, inputText]);
            setInputText('');
        }
    }
    const handleDeleteChip = (index)=>{
        let chipsCopy = [...chips];
        chipsCopy.splice(index,1);
        setChips(chipsCopy)
    }
    return (
        <>
            <div className="m-auto w-[1280px] pt-4 px-28">
                <h2 className="text-2xl text-center font-bold">React Chips</h2>
                <div>
                    <input type="text" className="border-2 border-green-500 text-black w-full p-2 mt-4 rounded-md" placeholder="Enter your chip here.." value={inputText} onChange={(e)=>setInputText(e.target.value)} onKeyDown={(e) => {
                        handleChips(e)
                    }} />
                    <div className='mt-5'>
                       {
                        chips.map((chip, index)=>{
                            return<span key={index} className='bg-slate-400 my-3 mx-2 p-3 rounded-md'>{chip} <button className='text-red-500 ml-1' onClick={()=>handleDeleteChip(index)}>X</button></span>
                        })
                       }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Questions;