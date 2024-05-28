/* eslint-disable react/prop-types */

import { useState } from "react";

const ImageDisplayer = ({ display, format }) => {

    const [loading, setLoading] = useState(true);
    const photoStatus = display.status;
    const photoData = display.data;
    const photoError = display.error;


    console.log(photoData)
    return(
        <section>
            {photoData ? photoData.map((element, i) => format(element, i)): ""}
        </section>
    )
}

export default ImageDisplayer;