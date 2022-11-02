import React, { useEffect, useState } from "react";

// https://dog.ceo/api/breeds/image/random
const DogPicture = () => {
    const [scrImage, setScrImage] =  useState('');

    const fentchDog = async () => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const dog = await response.json();
        if (dog.status === 'success') {
            return dog.message;
        }
    }

    useEffect(() => {
        fentchDog().then(pic => setScrImage(pic));
    }, [])

    return (
        <div  className="dogPicture">
            <div className="imgWrapper">
                <img src={scrImage}/>
            </div>
            <button onClick={async () => setScrImage(await fentchDog())}>DOG</button>
        </div>
    )
}

export default DogPicture;