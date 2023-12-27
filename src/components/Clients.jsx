import React from 'react'

function Clients() {
  return (
    <article className="pb-20">
      <div className="border-t-2 border-t-[#F5CB47] pb-20">
        <h3 className="text-3xl mb-3 text-[#F5CB47]">OUR CLIENTS</h3>
      </div>
        <div id="logoTop" className="flex flex-wrap pb-10">
            <img src="../src/assets/uhs.png" alt="UHS HOLDINGS" className="w-80 px-10 py-10"/>
            <img src="../src/assets/samsara.png" alt="SAMSARA HOLIDAYS" className="w-80 px-10 py-10"/>
            <img src="../src/assets/karma.png" alt="KARMA RESIDENCES" className="w-80 px-10 py-10"/>
            <img src="../src/assets/legramour.jpg" alt="LE GRAMOUR" className="w-80 px-10 py-10"/>
        </div>
        <div id="logoBottom" className="flex flex-wrap pb-10">
            <img src="../src/assets/revive.png" alt="REVIVE" className="w-80 px-10 py-10"/>
            <img src="../src/assets/cg.png" alt="CHAUDHARY GROUP" className="w-80 px-10 py-10"/>
            <img src="../src/assets/faber.png" alt="FABER" className="w-80 px-10 py-10"/>
            <img src="../src/assets/haffle.png" alt="HAFELE" className="w-80 px-10 py-10"/>
        </div>
    </article>
  )
}

export default Clients
