import React from 'react'

function Columns() {
    const items = []
    return (
        //can only be passed key attribute in React.Fragment
        <React.Fragment>
            {
                items.map(item => (
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
        </React.Fragment>

        //can't use key attribute
        // <>
        //     <p>Ok</p>
        // </>
    )
}

export default Columns
