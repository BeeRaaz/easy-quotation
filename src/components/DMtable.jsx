import React, {useState} from 'react'

function DMtable({pricingTitle="Digital Marketing Pricing"}) {
  //state to store input data, table row, and price
  const [data, setData] = useState({sn:"", service:"", pricing:"",})
  const [tableRow, setTableRow] = useState([])
  const [tableFoot, setTableFoot] = useState(false)
  const [price, setPrice] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  
  // console.log(price);


  //function to handle input change
  const handleInputChange = (e) => {
    setData({...data, [e.target.name]:e.target.value})
    
  }

  //functiont to handle input data and showing them in rows
  const handleFormSubmit = (e) => {
    e.preventDefault()
    setTableRow((prevtableRow) => [...prevtableRow, data])
    setPrice((prevPrice) => [...prevPrice, (Number(data.pricing))])
    // console.log(price) 
    setTotalPrice(() => price.reduce((accumulator, currentValue) => accumulator + currentValue, Number(data.pricing)))
    setData({sn:"", service:"", pricing:""})
    setTableFoot(true)

  }
   
  return (
    <>

    {/* taking user input */}
    <div id="formContainer" className=" flex justify-center w-full text-xl mb-10">
      <form
      onSubmit={handleFormSubmit} 
      className="flex items-center gap-10">
        <label>S.N: <input type="text" name="sn" value={data.sn} onChange={handleInputChange} className="px-1 py-3 rounded-xl bg-white"/></label>
        <label>Service: <input type="text" name="service" value={data.service} onChange={handleInputChange} className="px-1 py-3 rounded-xl bg-white"/></label>
        <label>Pricing: <input type="text" name="pricing" value={data.pricing} onChange={handleInputChange} className="px-1 py-3 rounded-xl bg-white"/></label>
        <button 
        type="submit" 
        className="w-auto px-2 py-3 border-2 text-xl rounded-xl text-white bg-cyan-500 border-cyan-500 hover:bg-inherit hover:text-cyan-500 hover:border-gray-400 font-semibold outline-none" >Add Row</button>
      </form>
    </div>

    {/* table to show the input data */}
    <div id="quotationContainer" className=" w-2/4 m-auto bg-white p-10 relative max-h-full">
      <h1 className="text-center text-4xl text-gray-700 mb-8 w-full h-fit" contentEditable={false}>{pricingTitle.toUpperCase()}</h1>
      <table id="quotationTable" className="w-full border-2">
        <thead className=" h-14">
          <tr>
            <th className="border-2 w-1/4 text-xl">S.N.</th>
            <th className="border-2 w-2/4 text-xl">Service</th>
            <th className="border-2 w-1/4 text-xl">Pricing(NRs.)</th>
          </tr>
        </thead>
        <tbody className="h-14">
          {tableRow.map((row, index)=>(
            <tr key={index}>
              <td className="border-2 w-1/4 text-xl text-center h-14">{row.sn}</td>
              <td className="border-2 w-1/4 text-xl text-center h-14">{row.service}</td>
              <td className="border-2 w-1/4 text-xl text-center h-14">{row.pricing}</td>
            </tr>
          ))}
        </tbody>
        
        {tableFoot ? 
        <tfoot className="text-center h-14 text-lg">
          <tr>
            <td colSpan={2} className="border-2">Total: </td>
            <td className="border-2">{totalPrice}</td>
          </tr>
        </tfoot> : null}
      </table>
    </div>
    </>
    
  )
}

export default DMtable
