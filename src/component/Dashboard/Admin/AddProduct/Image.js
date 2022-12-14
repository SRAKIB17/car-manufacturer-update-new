import React, { useEffect, useState } from 'react';
import useFileUploader from '../../../hooks/useUploadShow';

const Image = ({ props: { setGetImageData, setGetImageUrl } }) => {

    const { fileData, uploadFileHandler, message, result } = useFileUploader();

    useEffect(() => {
        setGetImageData(fileData);
        setGetImageUrl(result?.data?.url)
    }, [fileData, result, setGetImageData, setGetImageUrl])


    const imageDrop = (e) => {
        uploadFileHandler(e)
    }
    const hightLightHandle = event => {
        event.preventDefault()
        event.stopPropagation()
        event.target.ownerDocument.querySelector('#uploaderFile').classList.add('highlight')
    }
    const unHightLightHandel = event => {
        event.preventDefault()
        event.stopPropagation()
        event.target.ownerDocument.querySelector('#uploaderFile').classList.remove('highlight')
    }

    return (
        <div className=' max-w-xs w-full'>
            <div>
                <div
                    onDragEnter={hightLightHandle}
                    onDragOver={hightLightHandle}
                    onDragLeave={unHightLightHandel}
                    onDrop={imageDrop} id="uploaderFile">

                    <p>Upload a file with the file dialog or by dragging and dropping images onto the dashed region</p>


                </div>
                <div className="divider">OR</div>
                <div>

                    <input type="file" name="image_file" id="uploaderManually" className='form-control' onChange={(e)=>uploadFileHandler(e)} />
                </div>
                {message && <span className='label-text-alt text-red-500 mb-4'>  {message}</span>}


                {/* <div id='gallery'>
                    {
                        imageData.map((data, index) => <img src={data} key={index} alt='' />)
                    }
                </div> */}

            </div >

        </div>
    );
};

export default Image;