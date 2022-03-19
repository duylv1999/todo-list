import { useState, useMemo, useRef } from 'react'

function UseMemo() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [listProduct, setListProduct] = useState([])

    const handleAdd = () => {
        setListProduct([...listProduct,
        {
            name,
            price: +price
        }])

        setName('')
        setPrice('')

        nameRef.current.focus()
    }

    const nameRef = useRef()


    const total = useMemo(() => {
        const result = listProduct.reduce((result, prod) => {
            console.log('Tinh toan lai ......')
            return result + prod.price
        }, 0)

        return result
    }, [listProduct])

    return (
        <div style={{ padding: '20px' }}>
            <input
                ref={nameRef}
                value={name}
                placeholder="Nhap ten cua mon"
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
                value={price}
                placeholder="Nhap gia cua mon"
                onChange={(e) => setPrice(e.target.value)}
            />

            <p>Total: {total}</p>
            <br />
            <button
                onClick={handleAdd}
            >Add</button>

            <ul>
                {listProduct.map((list, index) => (
                    <li key={index}>{list.name} - {list.price}</li>
                ))}
            </ul>
        </div>
    )
}

export default UseMemo;