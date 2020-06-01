import React from 'react'

const Hits = ({ hits }) => {
    return (
        <div>
            <center><h1> Item List </h1></center>
            {hits.map((fields) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{fields.item_name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{fields.brand_name}</h6>
                        <p class = "card-text">{fields.nf_calories}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Hits;