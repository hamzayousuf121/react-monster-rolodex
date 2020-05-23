import React from 'react'

function Cards(props) {
    return (

        <>
            {props.monster.map(userss => {

                return (
                    <div className="col-lg-4 col-md-6 col-12 my-3 box-shadow" key={userss.id}>
                        <div className="card">
                            <img className="card-img-top w-100 m-auto" src={`https://robohash.org/ ${userss.name}.png`} alt={userss.name} />
                            <div className="card-body">
                                <h5 className="card-title">{userss.name}</h5>
                                <p className="card-title">{userss.email}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Cards
