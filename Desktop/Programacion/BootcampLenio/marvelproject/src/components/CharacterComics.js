import React from "react";
import './../assets/css/CharacterCard.css'

const CharacterDetails = ({ selectedCard }) => {
 /*    const [isOpen, setOpen] = React.useState(false);
    const handleClick = () => setOpen(false);

    if (!selectedCard) {
        return <div></div>;
    }
    const image = selectedCard.thumbnail.path;
    const file = selectedCard.thumbnail.extension;
    const detail = selectedCard.urls.find(
        (url) => url.type === "wiki" || url.type === "detail"
    );
    console.log(detail); */
    return (
        <div>
       {/*      <div className="popComics" >
                <Element id="CharacterDetails" className="containerElement">
                    <span className="close" onClick={handleClick} >X{isOpen}</span>
                    <h2 className="characterName">{selectedCard.name}</h2>
                    <div className="CharacterProfile">
                        <h3 className="CharacterDesc" >
                            {selectedCard.description}{" "}
                            <a target="_blank" href={detail.url}>
                                <div></div>
                            </a>
                        </h3>
                    </div>
                </Element>
            </div> */}
        </div>
    );
};

export default CharacterDetails;

