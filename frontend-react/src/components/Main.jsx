import React from 'react'
import Button from './Button'

const Main = () => {
    return (
        <div className='container'>
            <div className='p-5 text-center  bg-light-dark rounded'>
                <h1 className=''>Stock prediction portal</h1>
                <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rem error distinctio sed illo ullam veniam recusandae fugiat voluptatibus vitae provident autem facilis eius, et eligendi sint culpa qui libero.
                    Ex ullam facilis doloremque voluptates suscipit quis ut, nam placeat sunt, facere iusto laudantium, quia beatae harum dignissimos dolorum omnis neque exercitationem expedita unde eius fuga quo velit? Nisi, totam.
                </p>
                <Button text={"log in"} classname={"btn-outline-info"} />
            </div>
        </div>
    )
}

export default Main
