import React, { useState } from 'react'
import Button from './Button';

const Calculator = () => {
  const [output, setOutput] = useState('');
  const [input, setInput] = useState('');
  const [operator, setOperator] = useState(null); // Store operator to use it in calculations



  console.log('input value', input);
  console.log('output value', output);
  console.log('current operator',operator)


  //  ------------------- button css -------------------------   
  const btn_grey = 'shadow-sm shadow-gray-500 bg-gray-100 rounded-full flex justify-center items-center select-none active:scale-95 active:bg-gray-300'
  const btn_orange = 'shadow-sm shadow-gray-500 bg-orange-400 rounded-full flex justify-center items-center select-none active:scale-95 active:bg-orange-500'
  // ---------------------------------------------------------

  return (
    <div className='w-80 flex justify-center items-center flex-col shadow-md shadow-slate-600 rounded-2xl overflow-hidden glassmorphism'>
      <div className='border-b-2 w-full p-3 h-28 flex flex-col justify-between'>
          {/* output  */}
        <div className='flex justify-start items-start flex-wrap'>
          {output} {operator} {input}
        </div>
        <div className='flex justify-end items-center'>
          {output ? `= ${output}` : `0`}
        </div>
      </div>
      <div className='grid grid-cols-4 h-96 gap-2 w-80 p-4'>


        <Button buttonText='AC' buttonClasses={btn_grey} setInput={setInput} input={input} setOutput={setOutput} output={output} operator={operator} setOperator={setOperator} />
        <Button buttonText='DEL' buttonClasses={btn_grey} setInput={setInput} input={input} setOutput={setOutput} output={output} operator={operator} setOperator={setOperator} />
        <Button buttonText='%' buttonClasses={btn_grey} setInput={setInput} input={input} setOutput={setOutput} output={output} operator={operator} setOperator={setOperator} />
        <Button buttonText='/' buttonClasses={btn_orange} setInput={setInput} input={input} setOutput={setOutput} output={output} operator={operator} setOperator={setOperator} />
        <Button buttonText='7' buttonClasses={btn_grey} setInput={setInput} input={input} setOutput={setOutput} output={output} operator={operator} setOperator={setOperator} />
        <Button buttonText='8' buttonClasses={btn_grey} setInput={setInput} input={input} setOutput={setOutput} output={output} operator={operator} setOperator={setOperator} />
        <Button buttonText='9' buttonClasses={btn_grey} setInput={setInput} input={input} setOutput={setOutput} output={output} operator={operator} setOperator={setOperator} />
        <Button buttonText='x' buttonClasses={btn_orange} setInput={setInput} input={input} setOutput={setOutput} output={output} operator={operator} setOperator={setOperator} />
        <Button buttonText='4' buttonClasses={btn_grey} setInput={setInput} input={input} setOutput={setOutput} output={output} operator={operator} setOperator={setOperator} />
        <Button buttonText='5' buttonClasses={btn_grey} setInput={setInput} input={input} setOutput={setOutput} output={output} operator={operator} setOperator={setOperator} />
        <Button buttonText='6' buttonClasses={btn_grey} setInput={setInput} input={input} setOutput={setOutput} output={output} operator={operator} setOperator={setOperator} />
        <Button buttonText='-' buttonClasses={btn_orange} setInput={setInput} input={input} setOutput={setOutput} output={output} operator={operator} setOperator={setOperator} />
        <Button buttonText='1' buttonClasses={btn_grey} setInput={setInput} input={input} setOutput={setOutput} output={output} operator={operator} setOperator={setOperator} />
        <Button buttonText='2' buttonClasses={btn_grey} setInput={setInput} input={input} setOutput={setOutput} output={output} operator={operator} setOperator={setOperator} />
        <Button buttonText='3' buttonClasses={btn_grey} setInput={setInput} input={input} setOutput={setOutput} output={output} operator={operator} setOperator={setOperator} />
        <Button buttonText='+' buttonClasses={btn_orange} setInput={setInput} input={input} setOutput={setOutput} output={output} operator={operator} setOperator={setOperator} />
        <Button buttonText='0' buttonClasses={`col-span-2 ${btn_grey}`} setInput={setInput} input={input} setOutput={setOutput} output={output} operator={operator} setOperator={setOperator} />
        <Button buttonText='.' buttonClasses={btn_grey} setInput={setInput} input={input} setOutput={setOutput} output={output} operator={operator} setOperator={setOperator} />
        <Button buttonText='=' buttonClasses={btn_orange} setInput={setInput} input={input} setOutput={setOutput} output={output} operator={operator} setOperator={setOperator} />

      </div>
    </div>
  )
}

export default Calculator