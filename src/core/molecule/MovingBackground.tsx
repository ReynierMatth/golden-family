import React from 'react';

type MovingBackgroundProps = {
    images: string[];
    imagesClassName: string;
    wrapperClassName: string;
};

export const MovingBackground: React.FC<MovingBackgroundProps> = ({ images, imagesClassName, wrapperClassName }) => {

    return (
        <div className={wrapperClassName }>
            <div
                className="flex flew-row w-full overflow-x-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    {images.map((image, index) => (
                        <li>
                            <img key={index} src={image} alt="background" className={imagesClassName}/>
                        </li>
                    ))}
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    {images.map((image, index) => (
                        <li>
                            <img key={index} src={image} alt="background" className={imagesClassName}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
