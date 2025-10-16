import React, { useState, useEffect } from 'react'

export default function Typing({strings = [], speed=80, pause=1500}){
  const [idx, setIdx] = useState(0)
  const [subidx, setSubidx] = useState(0)
  const [blink, setBlink] = useState(true)
  const [reverse, setReverse] = useState(false)

  useEffect(()=>{
    const t = setTimeout(()=>{
      if(!reverse){
        if(subidx < strings[idx].length){
          setSubidx(subidx+1)
        } else {
          setReverse(true)
          setTimeout(()=>{}, pause)
        }
      } else {
        if(subidx > 0){
          setSubidx(subidx-1)
        } else {
          setReverse(false)
          setIdx((idx+1) % strings.length)
        }
      }
    }, reverse ? 30 : speed)
    return ()=> clearTimeout(t)
  },[subidx, idx, reverse, strings, speed, pause])

  useEffect(()=>{
    const b = setInterval(()=> setBlink(v=>!v),500)
    return ()=> clearInterval(b)
  },[])

  return (
    <span>
      <span className="text-accent">{strings[idx].slice(0, subidx)}</span>
      <span className="text-accent">{blink ? '|' : ' '}</span>
    </span>
  )
}