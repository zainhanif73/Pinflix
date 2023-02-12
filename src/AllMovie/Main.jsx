import React, { useState } from 'react'
import Header from '../MainPage/Header'
import Hero from "../Movie/Hero"
import Footer from "../MainPage/Footer"
import Similar from "../Movie/Similar"
import FooterImg from "../Img/footer.jpg"
import { useEffect } from 'react'
import SearchFiler from './SearchFiler'
import Movies from './Movies'

function Main() {
    const [click , setClick] = useState(1)
    const [input, setInput] = useState("")
    const [search, setSearch] = useState(false)
    return (
        <>
            <div className='hover:bg-[#ffffff] h-[30vh]' style={{ backgroundImage: "linear-gradient(0deg,#0f0f0f,rgba(22,19,19,0))", bottom: "0px", width: "100%" }}>
                <div className='pt-1' style={{ width: "100%", height: "30vh", backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundImage: `url(${FooterImg})` }}>
                    <span >
                        <Header click={click} setClick={setClick}/>
                        <h1 className='flex justify-center mt-8 text-[#ffffff] hover:cursor-pointer font-[600] text-3xl pt-2 ml-2'>Movie</h1>
                    </span>
                </div>
            </div>
            <SearchFiler input={input} setInput={setInput} search={search} setSearch={setSearch} />
            <Movies input={input} setInput={setInput} search={search} setSearch={setSearch}/>
            <Footer/>
        </>
    )
}

export default Main